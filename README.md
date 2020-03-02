# cat-fact

A web component that displays a random cat fact from the [Cat Facts API](https://catfact.ninja/).

## Usage

In an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Use a JS module to add the component to your page -->
    <script type="module" src="index.js"></script>

    <!-- Use CSS custom properties to alter styles within the component. -->
    <style>
      :root {
        --cat-fact-bg-color: #ddd;
      }
    </style>
  </head>
  <body>
    <cat-fact></cat-fact>
  </body>
</html>
```

In a JavaScript application:

```
npm install cat-fact-component
```

```js
import 'cat-fact-component';
```

If you are using [webpack](https://webpack.js.org/), you can instead include the component in your entry array:

```js
module.exports = {
  entry: ['cat-fact-component', './index.js']
};
```

## Component properties

The `cat-fact` component has a single configurable property:

**`showButton`**: an _optional_ property that shows a button to allow the user to get a new fact.

```html
<!-- Allows users to get new facts. -->
<cat-fact showButton="true"></cat-fact>
```

## Configurable styles

Use the [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) outlined below to customize the look of the accordion from your stylesheet.

```css
:root {
  --cat-fact-bg-color: transparent;
  --cat-fact-border: 0;
  --cat-fact-border-radius: 0;
  --cat-fact-padding: 0;

  --cat-fact-h2-margin-bottom: 1rem;

  --cat-fact-button-bg-color: inherit;
  --cat-fact-button-border: 0;
  --cat-fact-button-color: inherit;
  --cat-fact-button-font-size: 1rem;
  --cat-fact-button-margin-top: 2rem;
  --cat-fact-button-padding: inherit;
}
```
