# AJAX with Rails - Summary Notes
AJAX stands for Asynchronous Javascript And XML. It's used to send HTTP Requests via Javascript instead of sending them the standard way with the browser. This enables us to communicate with the server without reloading the page and by so giving the user a much better experience.

Note that most modern web applications use JSON instead of XML to send data between the client and the server, so some developers attempted to popularize the name AJAJ but it didn't stick so the name AJAX is most most often even if the transfer mechanism uses JSON instead of XML.

Rails comes with an easy built-in method to add AJAX to your application that utilizes jQuery through another library which is added by default to your Rails application. If you look at `/app/assets/javascripts/appliction.js` you will notice a line `//= require jquery_ujs` which is jQuery Unobtrusive Javascript which is a Javascript library that adds extra functionalities to your Rails application including AJAX which we will examine here.

## Step By Step AJAX for Creating Answers
Let's look at the steps needed to add AJAX to your application with Rails. Let's say we have an application that has a `Question` model which `has_many` of the `Answer` model as in:
```ruby
class Question < ActiveRecord::Base
  has_many :answers, dependent: :destroy
end
```
and
```ruby
class Answer < ActiveRecord::Base
  belongs_to :question
  validates :body, presence: true
end
```
Let's enable creating an answer for the question.

### Adding the Form
We start by adding the form to the `Question` show page. We will have to make sure that that we add the `remote: true` option:
```erb
<%= form_for [@question, @answer], remote: true do |f| %>
  <div>
    <%= f.label :body %>
    <%= f.text_area :body %>
  </div>
  <%= f.submit %>
<% end %>
```
This will make the form submit with Javascript instead of a normal submission.

### Setting Up the Controller to Respond to AJAX
The form above will submit to the `AnswersController` with `create` action. The request will be received as a `js` request so we can respond to it by using the `respond_to` method in Rails:
```ruby
def create
  answer_params    = params.require(:answer).permit(:body)
  @question        = Question.find params[:question_id]
  @answer          = current_user.answers.new(answer_params)
  @answer.question = @question
  respond_to do |format|
    if @answer.save
      format.html { redirect_to question_path(@question), notice: "Answer created successfully!" }
      format.js { render :create_success }
    else
      format.html { render "questions/show" }
      format.js   { render :create_failure }
    end
  end
end
```
The `create` action above is set up to respond to both AJAX requests, which have a `js` format, and non-AJAX requests, which have an `html` format.

### Setting Up the Views
We've set up the controller to render `create_success` and `create_failure` templates. Let's create those templates. For the `create_success` template we will need to insert a new answer to the list of answers, we currently have in the `/app/views/questions/show.html.erb` the following:
```erb
<% @question.answers.each do |ans| %>
  <%= ans.body %>
  <%= link_to "Delete", question_answer_path(@question, ans),
                      method: :delete,
                      data: {confirm: "Are you sure?"} %>
<% end %>
```
The easiest way to accomplish our task is to convert the code for displaying the answer to a partial. We can create a partial `/app/views/answers/_answer.html.erb` that looks like:
```erb
<%= answer.body %>
<%= link_to "Delete", question_answer_path(@question, answer),
                      method: :delete,
                      data: {confirm: "Are you sure?"} %>
```
So we can change our code in the `/app/views/questions/show.html.erb` to look like:
```erb
<% @question.answers.each do |ans| %>
  <%= render "/answers/answer", answer: ans %>
<% end %>
```
In the code above we render the `_answer` partial and we pass it a local variable `answer` which can use the `ans` object for. Note that we don't need to explicitly pass instance variables so we can use the `@question` variable without the need to pass it in.

To make our life easier we can wrap the list of answers with a div as in:
```erb
<div id="answers">
  <% @question.answers.each do |ans| %>
    <%= render "/answers/answer", answer: ans %>
  <% end %>
</div>
```
After the set up we've done above we can complete the `/app/views/answers/create_success.html.erb` file:
```erb
$("#answers").prepend("<%= j(render('/answers/answer', {answer: @answer})) %>");
```
To handle the case of an unsuccessful save to the answer we can start by refactoring the answer form to `/app/views/answers/_form.html.erb` which has the form and the errors:
```erb
<%= @answer.errors.full_messages.join(", ") %>
<%= form_for [@question, @answer], remote: true do |f| %>
  <div>
    <%= f.label :body %>
    <%= f.text_area :body %>
  </div>
  <%= f.submit %>
<% end %>
```
Then we can render the form above from the `/app/views/questions/show.html.erb` as in:
```erb
<%# ... %>
<div id="answer-form">
  <%= render "/answers/form" %>
</div>
<%# ... %>
```
Then we can use the same form to be rendered from with in `/app/views/answers/create_failure.html.erb`:
```erb
$("#answer-form").html("<%= j render 'form' %>");
```

We will finally need to modify our `/app/views/answers/create_success.html.erb` file to re-render the form so the file becomes:
```erb
$("#answers").prepend("<%= j(render('/answers/answer', {answer: @answer})) %>");
<% @answer = Answer.new %>
$("#answer-form").html("<%= j render 'form' %>");
```
We need to re-render the form because if we don't, then it will still contain the data from the previous submissions. Also, if the form had an error displayed from a previous request, re-rendering the form will clear those errors from the form display.

## Step By Step AJAX for Deleting Answers
We can also accomplish the answer deletion by using a similar approach to what we did for the create. We start by adding the `remote: true` option to it in the `/app/views/answers/_answer.html.erb` delete link:
```erb
<%= answer.body %>
<%= link_to "Delete", question_answer_path(@question, answer),
                      method: :delete,
                      remote: true,
                      data: {confirm: "Are you sure?"} %>
```
This will also need to wrap the div in a way that we can uniquely identify it because we will need to fade it out after successful deletion so we can make use of the `dom_id` helper method in Rails:
```erb
<div id="<%= dom_id(answer) %>">
  <%= answer.body %>
  <%= link_to "Delete", question_answer_path(@question, answer),
                        method: :delete,
                        remote: true,
                        data: {confirm: "Are you sure?"} %>
</div>
```
The `dom_id` helper method will generate an id based on the `id` attributes of the given object. So in our case if the `answer` object has an id `7` the `dom_id(answer)` will return `answer_7`.

### Setting Up the Controller
We can then set up the `destroy` action in the controller to handle `js` request format:
```ruby
def destroy
  @answer = Answer.find params[:id]
  @answer.destroy
  respond_to do |format|
    format.html { redirect_to question_path(@answer.question), notice: "Answer deleted" }
    format.js   { render } # this renders /app/views/answers/destroy.js.erb
  end
end
```

### Setting Up the View file
We can then set up the view file `/app/views/answers/destroy.js.erb` to fade out the deleted answer:
```erb
$("#<%= dom_id(@answer) %>").fadeOut(1000, function(){ $(this).remove(); });
```
