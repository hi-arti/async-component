This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [How to start](#how-to-start)
- [Routes](#routes)
- [Tabs](#tabs)
- [Async Tab Component](#async-tab-component)


## How to start
First need install dependencies.
### `npm install ` or `yarn install`

After this you may to:
### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


## Routes
All routes located in `./src/components/Routes.jsx`.<br>
\* Component `Switch` used for correct redirect.<br>
Paths for routes is loading and sorting in the `App` component (` ./src / App.js`).

## Tabs
### Load tabs
Tabs is loading as
```js
// ./src/api/tabs.js
function loadTabs() {
  return import('./path/to/tabs.json');
}
```
\* If need isolation this file, then will change to load as http request, and move this file to public path. Like this:
```js
function loadTabs() {
  return fetch('http://example.com/path/to/tabs.json');
}
```

## Async Tab Component
### How to make async tab component
You may use helper function `asyncComponent`, which load and render component when needed.

### Code:
```js
// ./src/components/asyncComponent.jsx
export default function asyncComponent(importFunction) {
  return class AsyncComponent extends Component {
    ...
  };
}
```

### Params function
| Prop | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| importFunction | function | ✓ | Function that load component.<br> Is called when `component did mount` (componentDidMount)

### TODO
* Add callbacks: onError, onLoaded.
* Add components: Loading, Error
* Or one Default component which change to Error|Loading|Other after callbacks

### Example:
```js
function loadComponentFunction(){
  return import('./path/to/component');
}
const AsyncComponent = asyncComponent(loadComponentFunction);
```