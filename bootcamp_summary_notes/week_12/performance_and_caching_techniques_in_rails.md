# Performance and Caching Techniques in Rails
Once your application grows and you get more users you will may need to look into its performance and scalability. Be careful to to over-optimize you application early on, it can consume a lot of time and can possibly cause you some troubles.
There are many techniques for Rails to improve its performance, here are few:
## Eager Loading
In some scenarios it's normal to do this in the controller `campaigns_controller.rb`:
```ruby
def index
  @campaigns = Campaign.all
end
```
And in the view file `index.html.erb`:
```erb
<% @campaign.each do |campaign| %>
  <%= campaign.title %>
  <%= campaign.comments.count %>
<% end %>
```
The code above will have to make a query for every `campaign` record to figure our the number of comments. This is called `n+1` query problem. You can solve it using `includes`:
```ruby
def index
  @campaigns = Campaign.includes(:comments)
end
```
The code above will execute two queries only, only to fetch all the campaigns and other is to fetch all the comments for all the comments for the fetched campaigns. Certainly better than `n+1` queries. You can also use `includes` with `references`:
```ruby
def index
  @campaigns = Campaign.includes(:comments).references(:comments)
end
```
This will execute a single query that includes a `join` statement which will fetch the comments along with the campaigns.
## Fragment Caching
Views especially when generating `html` tend to take a considerable amount of the request time. In some cases it takes most the request's total time so it's very important to cache view files whenever you can.
Caching view fragments means that you pre-generate the HTML from `erb` templates or any other templating system you use. You can simply do this in Rails by using the `cache` help method in the views:
```erb
<% cache question do %>
  <%= link_to question.title, question_path(question) %>
  (<%= pluralize question.answers.size, "answer" %>)
  <hr>
<% end %>
```
Note that it's important to pass something to the `cache` method in order for Rails to know when to expire the fragment.
### Expiring fragments
As you could tell from the example above that if the question title has changed and you're pre-generated the HTML then the title will be the old one and not the new one. Indeed, this can be a very challenging problem to solve in web application so this is why you should only caching when you have to and you should be careful and think of all possible ways that the the cache becomes invalid. Rails provides many techniques that helps in expiring the cache.
For instance in the example above we used `cache question` which uses `cache_key` method in ActiveRecord:
```ruby
q = Question.last
puts q.cache_key # questions/1044-20160914190029244645
```
As you note from the above Rails uses a cache key that combines the question id and the `updated_at` date which means if the gets updated the cache key will change when the question is updated which means if the question gets updated the cache becomes invalid and Rails will regenerate the HTML.
#### Auto-Expiring associated records
Note in the example:
```erb
<% cache question do %>
  <%= link_to question.title, question_path(question) %>
  (<%= pluralize question.answers.size, "answer" %>)
  <hr>
<% end %>
```
If we add a new answer to the question the number of answers will change which means the cache will become invalid but we're using the question `cache_key` in here which uses the `updated_at` field in the question which didn't change so Rails will still use the old fragment.
One solution to this is to have Rails change the `updated_at` when a new answer is added which be done using `touch` in the `belongs_to` association:
```ruby
class Question < ActiveRecord::Base
  has_many :answers, dependent: :destroy
end

class Answer < ActiveRecord::Base
  belongs_to :question, touch: true
end
```
### Other techniques for expiring fragments
Rails provides other techniques for expiring fragements for instance if you used a string to generate the fragment:
```erb
<% cache "abc" do %>
  ...
<% end %>
```
You can expire this manually in your code (such as controllers):
```ruby
expire_fragment "abc"
```
You may also use more complex ways to generate the cache key by passing an array to the `cache` helper method:
```erb
<% cache [@question, current_user, "home_page_cache"] do %>
  ...
<% end %>
```

## Front-end Performance 
An important part of every web application is the front-end. The performance of the front-end certainly impacts the experience of your users. Here are a few tips to keep in mind when optimizing the front end:
- Minimize HTTP requests: Rails help with that using the assets pipeline and you should be mindful by how many external and internal Javascript and CSS files you load in your application.
- Use CDN: this is important if you have international audience. 
- Minimize the amount of JS you're loading: If you're using some external JS libraries only on certain pages, it may be a better idea to have different layout files to only load those JS libraries on the pages that you need them in.
- Scale use-uploaded photos: Make sure you don't just resize photos with CSS but also store scaled-down version of user-uploaded photos. Gems like `CarrierWave` and `PaperClip` can be easily set up for that.

## Tools
Before you try to implement any performance technique, you must measure the performance of your application to ensure that you're improving the right things and that you're techniques have works. Here are a few tools:
### New Relic
You can find this tool [https://newrelic.com/](https://newrelic.com/). New Relic is an excellent tool for dissecting your Rails application performance by telling you about the slowest part of your applications you can focus on the particular actions and on particular layer within your actions. They have a free tier which you can start with.

### YSlow
You can find this tools here [http://yslow.org/](http://yslow.org/). YSlow help you find the slowest parts of your front end code which is important for any web application.

### Bullet
Bullet is a gem that helps detecting `N+1` queries. Here is a link for it [https://github.com/flyerhzm/bullet](https://github.com/flyerhzm/bullet)
