#Integrating Stripe with Rails
Stripe is one of the favourite ways for developers to integrate a payment gateway with applications. It's easy to integate with and sensitive credit card information don't go through your website for more security. Start by creating an account on [Strip](https://stripe.com) then click on your account name at the top right corner then click on `Account Settings`. Within that section click on `API Keys` and take a note of your `Test Secret Key` and `Test Publishable Key`.
## How Does it Work
Stripe uses Javascript to connect to the Stripe server with the credit card infomration and gives you back a token. You can use the token to create a customer, make one time charge or make recurring charges. Consquently, we will need two part of the integration:
- Inegration with Stripe Javascript (to generate the token)
- Integration with Rail to use the generated token to charge the customer
## Setting up the ruby end
Let's start by adding the Stripe gem to the `Gemfile:
```ruby
gem "stripe"
```
Then put the keys you got above in your `config/secrets.yml` file as in:
```yml
development:
  secret_key_base: XXXX
  stripe_secret_key: sk_test_xxx
  stripe_publishable_key: pk_test_xxx
```
Make sure that the `secrets.yml` file is part of your `.gitignore` file. Then create a file `config/initializers/stripe.rb` with:
```ruby
Stripe.api_key = Rails.application.secrets.stripe_secret_key
```
## Setting Up the Javascript end
We will need to integrate the Stripe library, we can do that by adding the line to the `<head`> section of `/app/views/layouts/application.html.erb`:
```html
<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
```
We will also to use the Publishable Key in our Javascript we can add the following line to head as well:
```html
<meta name="stripe-pk" content="<%= Rails.application.secrets.stripe_publishable_key %>">
```
### Getting the Token
Let's start by creating a form to capture the user's payment information:
```erb
<h1>Make a Payment</h1>
<%= form_tag "", id: "stripe-token-form" do %>
  <div>
    <label for="card-number">Card Number</label>
    <input id="card-number">
  </div>
  <div>
    <label>Expiry</label>
    <%= select_month(Date.today, add_month_numbers: true) %>
    <%= select_year(Date.today, start_year: Date.today.year,
                                end_year: Date.today.year + 10) %>
  </div>
  <div>
    <label for="cvc">CVC</label>
    <input id="cvc">
  </div>
  <div>
    <%= submit_tag "Submit" %>
  </div>
<% end %>
```
The form above contains four fields:
- credit card number
- card expiry month
- card expiry year
- CCV

We will need to use all the entries above to generate a token from Stripe. So we can listen to the form submissions event and use the `Stripe` library to generate the token:
```js
$(document).ready(function(){
  // Setting the publishable key as per Stripe documentation
  Stripe.setPublishableKey($("meta[name='stripe-pk']").attr("content"));

  $("#stripe-token-form").on("submit", function(e){
    e.preventDefault();
    // Making the request to generate the token
    Stripe.card.createToken({
      number: $("#card-number").val(),
      cvc: $('#cvc').val(),
      exp_month: $('#date_month').val(),
      exp_year: $('#date_year').val()
    }, stripeResponseHandler);
  });

  // This function will be called when the token is returned from Stripe
  stripeResponseHandler = function(status, response) {
    console.log(status);
    console.log(response);
  };

});
```
So now upon submitting the form we will get the form and the response and code will be printed to the console. If the information are entered from the user then `status` will be `200` otherwise we will get errors within the `resposne` object. If the reponse is `200` we will need to submit the token to server, otherwise we will need to display the errors somewhere for the user. We can do so by having a second form to make the submission and a div for the errors:
```erb
<%= form_tag payments_path, id: "submission-form" do %>
  <%= hidden_field_tag :stripe_token %>
<% end %>

<h1>Make a Payment</h1>
<div id="stripe-error-message"></div>
...
```
Then we will need to modify the `stripeResponseHandler` to look like:
```js
stripeResponseHandler = function(status, response) {
  if(status === 200) {
    // case of success getting the token
    $("#stripe_token").val(response.id);
    $("#submission-form").submit();
  } else {
    // Case of error
    var errorMessage = response.error.message;
    $("#stripe-error-message").addClass("alert alert-danger").html(errorMessage);
  }
};
```
## Setting Up the Controller to Charge the Customer
If the form about with is `submissions-form` submits to a controller like `PaymentsController` with `create` action then you can write the Ruby code in that action to handle that, we can either charge the user directly or we can create a `customer` on Stripe which will give us back a customer id from Stripe to charge the customer later without having the customer enter their payment information again. Let's start by creating a cutsomer on Stripe.
```ruby
  def create
    customer = Stripe::Customer.create(
      :description => " Customer for user id: #{current_user.id}",
      :source => params[:stripe_token] # obtained with Stripe.js
    )
    # Saving Stripe customer information
    current_user.stripe_customer_id  = customer.id
    current_user.stripe_card_last4   = customer.sources.data[0].last4
    current_user.stripe_card_type    = customer.sources.data[0].brand
    current_user.save
  end
```
As you note above if we have `stripe_customer_id`, `stripe_card_last4` and `stripe_card_type` fields in the users table in the database we can store those to easily charge the user later without entering payment information. The `stripe_card_last4` and `stripe_card_type` are primarily for display purposes so the user remembers the card they used on our app.

We can then use those pieces of information to charge the user assuming we have an `order` model than contains the amount:
```ruby
def create
  # ...
  charge = Stripe::Charge.create(
      :amount => @order.amount * 100,
      :currency => "cad",
      :customer => current_user.stripe_customer_id,
      :description => "Charge for Pledge: #{@order.id}"
    )
  @order.stripe_txn_id = charge.id
  @order.confirm
  @order.save

  # ...
end
```
In the code above we're also storing the `stripe_txn_id` as part of the order. This is not required but useful if you like to add features such as refunds to your application.
## Improving the solutions
Please note that the solution above is meant to be a demonstartion of how to integrate with Stripe payment system. Please note that in production applications make sure to do the following:
- Use HTTPS for security of tansfering sensitive data such as the Stripe token
- Use exception handling on the Ruby side. Any time you connect to an external service it's highly recommended that you do it within `begin` / `rescue` blocks because you can't control the receviing end which can be down or may change something without notifying you.
- Refacting the controller code to a Service object. The code there is big and will be bigger if you add exception handling so it's best moved to a service object.