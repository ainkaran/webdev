good morning 19s!

# Display

block - element that occupies the entire horizontal space

```css
  div {
    display: block;
  }
```

some more examples are: h1-6, p, hr

inline - element will share the horizontal space. it keeps the flow of the document.

```css
  span {
    display: inline;
  }
```
some more examples are: a, img

inline-block - this is a combination of the two above. elements can sit next to eachother, however, we can control the width, height, padding, margin (box model).

```css
  button {
    display: inline-block;
  }
```

none - hides the element from the documents.

```css
  title {
    display: none;
  }
```

# Float

making an element come up to the surface. it also changes the inherant behaviour of the element. if it is block, it starts to act like inline-block, but better (ie. 50% test).

inline elements that are floated create wrapping (ie. text wrapping around an image).

```css
  div {
    float: left;
  }
```

```css
  img {
    float: left;
  }
```

clear-fix
```css
  div {
    clear: both;
  }
```

# Position

an example of using position is for a fixed navigation at the top of your page.

```html
  <nav></nav>
```

```css
  nav {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: teal;
  }
```

# NEW DISPLAY PROPERIES!!!

there purpose is to make your life easier.

```html
<div class='container'>
  <div class='item'></div>
  <div class='item'></div>
  <div class='item'></div>
</div>
```

```css
  .container {
    display: flex;
    justify-content: center;
  }
  .item {
    flex-shrink: 0;
  }
```
you will see this again, when you learn react.

```css
  #garden {
    display: grid;
    grid-columns: 20% 20% 20%;
    grid-rows: 20% 20% 20%;
  }
  .tile {
    grid-col-start: 2;
    grid-row-start: 2;
  }
  ```

  # relative units
  rem - root emphircal unit (vw)
  em - emphrical unit (%)

  usually used with font size

  px - pixel
  % - relative to container
  vh, vw, vmin, vmax - viewport relative units of measurements
  








<!--  -->
