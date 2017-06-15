# React Native Intro - Summary Notes
You can use React Native to build mobile applications that make use of Native mobile components. Unlike, HTML 5 mobile applications, React Native apps won't use a browser to be run within. Consequently, React Native applications will be very close in performance and responsiveness to applications written in Swift for iOS or Java for Android.

In the instructions below we will be working  on a simple iOS application so make sure you have XCode installed.

## Setting Up
In order to work with React Native you will need to have Node.js installed, if you don't then make sure to run:
```
brew install node
```
Then we need to install `watchman` application that is used by React Native to reload when files are changed:
```
brew install watchman
```
Then we will need to install a module for node that will help us generate React Native applications:
```
npm install -g react-native-cli
```

## Generating the Application
We  can use the command installed from the `react-native-cli` to set up our first React Native application:
```
react-native init timer
```
This will generate a folder called `timer` that will contains the file structure and modules needed. The main portions of your application will go into the `app.js` file in the main directory.

Let's start by removing the default content from `index.ios.js` and re-write it to better understand how things work.

### Requiring React and Supporting Libraries
At the top of file we can start by requiring the React Native module:
```js
var React = require("react-native");
```
then we can require a bunch of other libraries that help us build our first application:
```js
var Text = React.Text;
var View = React.View;
var AppRegistry = React.AppRegistry;
var StyleSheet = React.StyleSheet;
```
or we can re-write the above with ES6 as:
```js
var {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;
```

### Creating The first Component
We then start by creating our first component:
```js
var Timer = React.createClass({
  render: function(){
    return <View>
            <Text>Hello React Native</Text>
           </View>;
  }
});
```
This creates our first main component that will be used as the main display for the application.

Or you can rewrite the above in ES6 as:
```js
class Timer extends Component {
  render() {
    return <View>
            <Text>Hello React Native</Text>
           </View>;
  }
}
```
If you want to use this syntax make sure to import `Component` above as you're importing things like `View` and `Text`.

### Registering the Component
We will then need to register your component in order for it to run:
```js
AppRegistry.registerComponent("timer", function() { return Timer });
```
Or you can rewrite the above with ES6:
```js
AppRegistry.registerComponent("timer", () => Timer );
```

### Styling Components
React Native borrows many of its styling techniques from Flexbox in CSS. We can start by creating a StyleSheet object:
```js
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
```
Then we can style our component using the `style` attribute:
```jsx
    return <View style={styles.container}>
            <Text>Hello React Native</Text>
           </View>;
```