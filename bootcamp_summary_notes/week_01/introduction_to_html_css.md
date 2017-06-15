# Introduction to HTML & CSS Summary Notes

## What is HTML?
HTML stands for Hypertext Markup Language.  It is an interpreted, computer language created by Tim Berners Lee for CERN in 1990 to help researchers use and share documents.

## W3C
W3C stands for World Wide Web Consortium.  It is a standards organization founded by Tim Berners Lee in 1994.  The W3C seeks to promote standards for the evolution of the Web and interoperability between WWW products by producing specifications and reference software.

## HTML5
Here is a sample HTML5 webpage:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Exercise 1 - HTML Basics</title>
</head>
<body>
  Hello World!
</body>
</html>
```

### Poem Example
In the body tag, we can put the following HTML.  This is a good example of giving sections of the page meaning through tags:
```html
<h1>Roses Are Red</h1>
    <em>by Anonymous</em>

    <p>roses are #FF0000</p>
    <p>violets are #0000FF</p>
    <p>all my base</p>
    <p>are belong to you</p>

    <hr>

    <div>
      <h1>Roses Are Red</h1>
      <p><em>by Anonymous</em></p>

      roses are #FF0000<br>
      violets are #0000FF<br>
      all my base<br>
      are belong to you<br>
    </div>
```
### Recipe Example
A recipe page is a great way to illustrate ordered lists, unordered lists and tables:
```html
    <h1>Make a chocolate chip cookie in three steps</h1>
    <ol>
      <li><a href="#step1">Step 1</a></li>
      <li><a href="#step2">Step 2</a></li>
      <li><a href="#step3">Step 3</a></li>
    </ol>

    <img src="images/cookie.jpg">

    <h2>Ingredients</h2>

    <ul>
      <li>2 1/4 cups all-purpose flour</li>
      <li>1/2 teaspoon baking soda</li>
      <li>1 cup (2 sticks) unsalted butter, room temperature</li>
      <li>1/2 cup granulated sugar</li>
      <li>1 cup packed light-brown sugar</li>
      <li>1 teaspoon salt</li>
      <li>2 teaspoons pure vanilla extract</li>
      <li>2 large eggs</li>
      <li>2 cups (about 12 ounces) semisweet and/or milk chocolate chips</li>
    </ul>

    <h2>Directions</h2>
    <h3 id="step1">Step 1</h3>
    <p>
      Preheat oven to 350 degrees. In a small bowl, whisk together the flour and baking soda; set aside. In the bowl of an electric mixer fitted with the paddle attachment, combine the butter with both sugars; beat on medium speed until light and fluffy. Reduce speed to low; add the salt, vanilla, and eggs. Beat until well mixed, about 1 minute. Add flour mixture; mix until just combined. Stir in the chocolate chips.
    </p>

    <h3 id="step2">Step 2</h3>
    <p id="step2">
      Drop heaping tablespoon-size balls of dough about 2 inches apart on baking sheets lined with parchment paper.
    </p>

    <h3 id="step3">Step 3</h3>
    <p id="step3">
      Bake until cookies are golden around the edges, but still soft in the center, 8 to 10 minutes. Remove from oven, and let cool on baking sheet 1 to 2 minutes. Transfer to a wire rack, and let cool completely. Store cookies in an airtight container at room temperature up to 1 week.
    </p>

    <h2>Nutritional Facts</h2>
    <p>Serving Size - 12 g</p>
    <table border="10">
      <tr>
        <th></th>
        <th>% Daily Value</th>
        <th>mg Daily Value</th>
      </tr>
      <tr>
        <td>Total Fat - 3g</td>
        <td>4%</td>
        <td>4mg</td>
      </tr>
      <tr>
        <td>Cholestrol - 0mg</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Sodium - 36mg</td>
        <td>1%</td>
      </tr>
      <tr>
        <td>Carbohydrates - 3g</td>
        <td>3%</td>
      </tr>
      <tr>
        <td>Protein - 1g</td>
        <td></td>
      </tr>
      <tr>
        <td>Vitamin A</td>
        <td>0%</td>
      </tr>
      <tr>
        <td>Vitamin C</td>
        <td>0%</td>
      </tr>

      <tr>
        <td>Vitamin D</td>
        <td>50%</td>
      </tr>
    </table>
```
### Form Example
Form elements are how we can receive information from our user:
```HTML
    <form action="" method="">
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="e.g. John Smith">
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" type="password">
      </div>

      <div>
        <input id="urgent" type="checkbox">
        <label for="urgent">Urgent?</label>
      </div>

      <div>
        <label for="email">Email</label>
        <input id="email" type="email">
      </div>

      <div>
        <input id="sales" type="radio" name="department">
        <label for="sales">Sales</label>
        <input id="technical" type="radio" name="department">
        <label for="technical">Technical</label>
        <input id="marketing" type="radio" name="department">
        <label for="marketing">Marketing</label>
      </div>

      <div>
        <label for="category">Category</label>
        <select id="category">
          <option>Art</option>
          <option>Sports</option>
          <option>Cats</option>
          <option selected>Penguins</option>
        </select>
      </div>

      <div>
          <label for="message">Message</label>
          <textarea id="message"></textarea>
      </div>

      <div>
        <input type="submit" value="Contact Us">
      </div>
    </form>
```

## CSS
CSS stands for Cascading Style Sheets. It is used for describing the visual presentation of a document written in a HTML.

### CSS Example
```css
      body {
        margin: 0;
        padding: 0;
      }
      .container {
        background: url("images/landscape.jpg") no-repeat;
        min-height: 600px;
        background-size: 100%;
      }
      .text-container {
        width: 100%;
        background-color: rgba(255,0,0,0.5);
        text-align: center;
        min-height: 100px;
      }
      .text-container p {
        margin-left: auto;
        margin-right: auto;
        color: #fff;
        font-size: 36px;
        width: 40%;
      }
```