# One to Many Associations in Rails Summary Notes
You're likely to need to build many `one to many` associations in a Rails application in order to make them functional.

## Deciding on the Models
Let's say we have a `Question` model in the database with `title` and `description` fields. And we would like to add an `Answer` model. The association we want here is one to many so one question has many answers. This way when we create an `Answer` record, it's created for a specific question.

## Creating the `Answer` Model
We create the answer model by running the generator:
```shell
rails g model answer body:text question:references
```
The generated migration will contain a piece of code like this:
```ruby
create_table :answers do |t|
  t.text :body
  t.references :question, foreign_key: true

  t.timestamps null: false
end
```
Notice that the question references above will create an `integer` field called `question_id` as per Rails convention.

The `foreign_key: true` option adds a foreign key constraint to the `answers` table on the `question_id` field. This does the following:
- Prevents you from adding an answer whose `question_id` doesn't exist
- Prevents you from deleting questions that are references by answers. For instance if you have answers with `question_id` 10 then you can't delete the question with id 10.

You can also add `index: true` option will create an index on the `question_id` field because we're likely to run queries like:
```sql
SELECT * FROM answers WHERE question_id=10;
```
So having an index on `question_id` speeds up queries like the one above.

Note that you can set up Postgres a constraint `ON DELETE CASCADE` option to automatically delete answers if the question they're associated with gets deleted. Rails doesn't set up the constraint that way. You can choose, as we will see later, what to do when a question with associated answers gets deleted.

## Setting Up ActiveRecord Associations
From the command we ran above we get an `Answer` model that looks like:
```ruby
class Answer < ActiveRecord::Base
  belongs_to :question
end
```
Rails generator automatically adds a `belongs_to` statement in the model. This will help us later work with associated records. Now we need to set up the association from the `Question` model:
```ruby
class Question < ActiveRecord::Base
  has_many :answers, dependent: :destroy
end
```
Setting up the association above with `has_many` enables us to easily work with associations as we will see in the next section.

The `dependent` option is very important for data consistency. The most popular options are `:destroy` and `:nullify`. If you have answers associated with a question and you delete the questions this is what will happen:
- If you have set the `dependent` option to `:destroy` it will delete all the answers whose `question_id` is the id of the question you just deleted (answers associated with that question).
- If you have set the `dependent` option to `:nullify` it will keep all the answers  whose `question_id` is the id of the question you just deleted (answers associated with that question) but it will update their `question_id` to become `NULL`.

## Working with Associations
Once you've set up the associations you can now easily create associated records, here are a few ways:
```ruby
q = Question.find 10
a = Answer.new(body: 'My Awesome Answer')
a.question = q
a.save
```
In the code above the answer `a` will have a `question_id` of `10`.

You can also do:
```ruby
q = Question.find 10
a = q.answers.new(body: 'My Awesome Answer')
a.save
```
or
```ruby
q = Question.find 10
a = q.answers.create(body: 'My Awesome Answer')
```
You can also do:
```ruby
q = Question.find 10
a = Answer.create(body: 'My Awesome Answer', question: q)
```
If you want to query for answers you can do:
```ruby
q = Question.find 10
q.answers
```
`q.answers` will fetch all the questions whose `question_id` is `10`.

## Associations in Rails Controllers
Now that we've set up associations with the models we will need to create or modify our controller to support creating associated records. The convention in Rails is to use RESTful routes that includes the child record's parameters and the parent record's id. We will be using this convention with our controller.

### Setting Up the Routes
We start by setting up the routes to enable having the id of the question handy when creating an answer:
```ruby
# in config/routes.rb
resources :questions do
  resources :answers, only: [:create, :destroy]
end
```
The above will generate the following two routes for answers:
```
question_answers POST       /questions/:question_id/answers(.:format)          answers#create
question_answer  DELETE     /questions/:question_id/answers/:id(.:format)      answers#destroy
```
We note that now the `answers` routes have `:question_id` as part of the url. This way if we're creating an answer, we can simply get that id to find the question and associate it with the answer we're about to create.

### Setting Up the Form
In the question's show page which is `/app/views/questions/show.html.erb` we we build the form that we need to create the answer, we start by instantiating an instance variable in the question's `show` action:
```ruby
def show
  @question = Question.find params[:id]
  @answer   = Answer.new
end
```
Then we can use that instance variable to generate the form with:
```erb
<%# inside `/app/views/questions/show.html.erb` %>
<%= form_for [@question, @answer] do |f| %>
  <%= f.text_area :body %>
  <%= f.submit %>
<% end %>
```
The `form_for` helper method can take an array of ActiveRecord variables.  So then it will automatically generate the nested resource route. Note that if `@answer` is not persisted to the database, the url will be `question_answers_path(@question)` and the form method will be `POST`. If `@answer` is persisted then the form path will be `question_answer_path(@question, @answer)` and the form method will be `PATCH` (by using the `_method` hidden field technique).

### Setting Up the Answers Controller
Now we need to capture the answer's params and save the answer. We start by generating the controller:
```shell
rails g controller answers
```
Then we set up the `create` action:
```ruby
class AnswersController < ApplicationController
  def create
    @question = Question.find params[:question_id]
    answer_params = params.require(:answer).permit(:body)
    @answer   = Answer.new answer_params
    @answer.question = @question
    @answer.save
    redirect_to question_path(@question), notice: 'Answer created!'
  end
end
```
The above code will create an answer record associated with the question whose page we were on. It will then redirect back to the question's show page.

#### Handling errors
If we add validation to the `Answer` model such as:
```ruby
# in /app/models/answer.rb
validates :body, presence: true
```
Then we must handle situations like this which we can do by re-rendering the show page, let's do that in the `AnswersController`:
```ruby
class AnswersController < ApplicationController
  def create
    @question     = Question.find params[:question_id]
    answer_params = params.require(:answer).permit(:body)
    @answer       = Answer.new answer_params
    if @answer.save
      redirect_to question_path(@question), notice: 'Answer created!'
    else
      render '/questions/show'
    end
  end
end
```
We also need to modify the form to display errors:
```erb
<%# inside `/app/views/questions/show.html.erb` %>
<%= @answer.errors.full_messages.join(', ') %>
<%= form_for [@question, @answer] do |f| %>
  <%= f.text_area :body %>
  <%= f.submit %>
<% end %>
```

### Listing Answers
Let's start by listing answers in the question show page:
```erb
<% @question.answers.each do |ans| %>
  <%= ans.body %>
  <hr>
<% end %>
```

### Deleting Answers
To delete answers, we first need to add a link to delete the answer, we can do so using `link_to`:
```erb
<% @question.answers.each do |ans| %>
  <%= ans.body %>
  <%= link_to 'Delete Answer', [@question, ans],
              method: :delete, data: { confirm: 'Are you sure?' } %>
  <hr>
<% end %>
```
Then in your controller you can write:
```ruby
def destroy
  @question = Question.find params[:question_id]
  @answer = Answer.find params[:id]
  @answer.destroy
  redirect_to question_path(@question), notice: 'Question Deleted'
end
```
