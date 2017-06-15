# Service Objects in Rails with Virtus
When your controller code gets big and likely starts to involve multiple model then you may choose to use the service object pattern. It's best used to encapsulate business logic pieces of your application. This helps a lot in keeping controllers thin.
Let's start by creating a `services` folder with in your `app` folder. After that add the following line to your `/config/application.rb` within `class Application < Rails::Application` section to ensure that the service object classes are loaded in the Rails console:
```ruby
config.autoload_paths << Rails.root.join('app', 'services')
```
## Using Virtus
The `virtus` gem makes it easier to have objects that behave similarly to the `ActiveRecord` Objects. It helps making our classes read nicer. Here is a [link](https://github.com/solnic/virtus) to the Virtus gem, let add the gem to our `Gemfile`:
```ruby
gem 'virtus`
```
## Creating the Service Object
Let's start by creating a service object that will help us create a campaign. We start by adding a file `/app/services/campaigns/create_campaign.rb` that looks like:
```ruby
class Campaigns::CreateCampaign
  def call

  end
end
```
Note that it's a good practice to name the class in a way that makes it do a single thing and have a single public method such as `call` to help comply with the `Single Responsibility Principle`.
We can then integrate with Virtus to accept different attributes for the service objects as in:
```ruby
class Campaigns::CreateCampaign
  include Virtus.model

  attribute :user,     User
  attribute :params,   Hash
  attribute :campaign, Campaign

  def call

  end
end
```
This way we can create the service object as in:
```ruby
service = Campaigns::CreateCampaign.new(user: current_user, params: campaign_params)
```
Note that the type passed above such as `User`, `Campaign` and `Hash` is mostly for the developer to know what to put in there. We can then implement the `call` method:
```ruby
def call
  @campaign      = Campaign.new params
  @campaign.user = user
  @campaign.save
end
```
We made it so the `call` method returns `true/false` similar to ActiveRecord objects. So we can use it in our controller as in:
```ruby
def create
  service = Campaigns::CreateCampaign.new(user: current_user, params: campaign_params)
  if service.call
    redirect_to campaign_path(service.campaign), notice: "Campaign created!"
  else
    @campaign = service.campaign
    render :new
  end
end
```
This way if more logic is added to the way we create the campaign, it will be encapsulated in the service object, keeping our controller thin.
