# Mailers in Rails Summary Notes
Rails comes with a built-in mailer system using the `ActionMailer` gem. You don't need to install the gem as it's already included as a dependency with the Rails gem.

## Configuring ActionMailer
Sending email requires that you do this through a specialized email server that will take care of sending the email, likely using the `SMTP` protocol. You will need to configure `ActionMailer` to connect to the server. Create a file `/config/initializers/setup_mail.rb` with a code like this:
```ruby
ActionMailer::Base.smtp_settings = {
  address:              "smtp.gmail.com",
  port:                 "587",
  enable_starttls_auto: true,
  authentication:       :plain,
  user_name:            ENV["email_user_name"],
  password:             ENV["email_password"]
}
```
This is an initializer file which means it only runs once when you start the server. This means that you will have to restart the server if you have it running for this file to take effect.

Note from the above that we used `ENV["email_user_name"]` and `ENV["email_password"]` instead of using the cleartext username and password. This is to avoid having our username and password shared with everyone who has access to the repo, which could be everyone, if you put your project on a public Github repo.

To set those up, you can use another initializer file after adding it to the `.gitignore`, so if we decide on a file name such as `app_keys.rb`. We can add the following line to our `.gitignore` file:
```
/config/initializers/app_keys.rb
```
And then create the file `/config/initializers/app_keys.rb`:
```ruby
ENV["email_user_name"] = "yourusername"
ENV["email_password"]  = "supersecret"
```
It may be a good idea to create a file `/config/initializers/app_keys.rb.example` that has the structure of the file above but not the actual username and password for future developers to easily create the file on their computers, the file may looks like:
```text
ENV["email_user_name"] = "PUT USER NAME HERE"
ENV["email_password"]  = "PUT PASSWORD HERE"
```

## Creating a Mailer File
Your mailers will go into `app/mailers` folder. To create a mailer it's best to use the generator:
```shell
rails g mailer answers_mailer
```
note that mailers share the save `views` folder as controllers so it's best to append mailers name with `_mailer` to avoid possible conflicts of sharing folders. This will generate a file that looks like:
```ruby
class AnswersMailer < ApplicationMailer

end
```
If this is the first mailer you generate, it will also generate a file `/app/mailers/appliaction_mailer.rb` that looks like:
```ruby
class ApplicationMailer < ActionMailer::Base
  default from: "answerawesome@gmail.com"
  layout 'mailer'
end
```
You sets the default `from` address and the default layout file. You will notice that there are two layout files created. One is `/app/views/layouts/mailer.html.erb`:
```
<html>
  <body>
    <%= yield %>
  </body>
</html>
```
and the other is `/app/views/layouts/mailer.text.erb`:
```
<%= yield %>
```
They behave a lot like the `application.html.erb` layout. We have two of them because emails can support both `html` and `text` formats. You should at least send `html` emails but you may want to send `text` format as well depending on your audience, you can see a good discussion on [StackOverFlow question here](http://webmasters.stackexchange.com/questions/21367/plain-text-email-support-is-it-still-needed-in-2011).

## Defining Email Methods
If you need to create an email, you will need to create a method within your mailer. Let's say we want to send an email to the question owner when someone answers their question, we can start by adding a method to the `AnswersMailer`:
```ruby
class AnswersMailer < ApplicationMailer

  def notify_question_owner(answer)
    @answer   = answer
    @question = answer.question
    @owner    = @question.user
    mail(to: @owner.email, subject: "You got a new answer!")
  end

end
```
Note in the example above that you will need to call the `mail` method to invoke sending which will render the view file. The view files follow the same naming convention as the controller actions. So we will need to create `/app/views/answers_mailer/notify_question_owner.html.erb` and/or `/app/views/answers_mailer/notify_question_owner.text.erb` which can look like the following for the `notify_question_owner.html.erb` file:
```html
<p>Hello <%= @owner.full_name %>,</p>
<p>You've Received an answer to your question.</p>
<p>Question title: <%= @question.title %></p>
<p>Answer: <%= @answer.body %></p>
<p>Regards,</p>
<p>Awesome Answers Team</p>
```
and the following for the `notify_question_owner.text.erb` file:
```text
Hello <%= @owner.full_name %>,
You've Received an answer to your question.
Question title: <%= @question.title %>
Answer: <%= @answer.body %>
Regards,
Awesome Answers Team
```
Note that we can use instance variables in the mail view files the same way we do in the controller and views.

## Sending Emails
To send emails we can invoke the methods in the controller as follows:
```ruby
AnswersMailer.notify_question_owner(@answer).deliver_now
```
Note that if we use `deliver_now` it will send the message immediately (foreground) and you can also do:
```ruby
AnswersMailer.notify_question_owner(@answer).deliver_later
```
To send the email in the background. For that you need to have `ActiveJob` set up with a background processing system such as `DelayedJob`.

## Emails in Production
When you take your appliation live in production you may need to consider alternative to simple Gmail accounts for sending emails such as [http://sendgrid.com/](http://sendgrid.com/) and [https://www.mandrill.com/](https://www.mandrill.com/). They give you better way to handle unsubscribes. They also give you nice features such as analytics and group emailing. The only thing you will have to change in your Rails application is the configuration in your `setup_mail.rb` file.

Make sure to user the `_url` version of all of the URLs in emails because they will be accessed from different email clients. For instance, make sure to use `questions_url` instead of `questions_path`. For that to work, make sure to configure Rails with the right host in your `/config/environments/production.rb` as in:
```ruby
Rails.application.configure do
  # ...
  config.action_mailer.default_url_options = { host: 'awesomeanswers.co' }
end
```

## Styling Emails
Making emails look consistent is challenging because there are many clients and website that support email out there. Here are two tips that can help out:
### Use Inline Styling
It's generally not recommended that you use inline styling in CSS, the only exception is emails. Using inline styling with email can help because some email clients may strip the `<head>` and other style tags of the HTML email. If you find it tedious to use inline styling you can consider gems like Premailer: [https://github.com/premailer/premailer](https://github.com/premailer/premailer)

### Use Table for Layouts
Using tables to build layouts is also highly discouraged for styling web pages. The exception here again is emails. Using tables for layouts seems to provide more consistent-looking emails across platforms.