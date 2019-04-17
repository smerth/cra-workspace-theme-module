# Setup react-hot-loader

Follow these links for details

- [gaearon/react-hot-loader](https://github.com/gaearon/react-hot-loader#recipes)
- Migrating from [create-react-app](https://github.com/facebookincubator/create-react-app)



1. Run `npm run eject`
2. Install React Hot Loader: `npm install --save-dev react-hot-loader`
3. In `config/webpack.config.dev.js`, add `'react-hot-loader/babel'` to Babel loader configuration. The loader should now look like:

```jsx
  {
    test: /\.(js|jsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
      plugins: ['react-hot-loader/babel'],
    },
  }
```

1. Mark your App (`src/App.js`) as *hot-exported*:

```jsx
// ./containers/App.js
import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => <div>Hello World!</div>

export default hot(module)(App)
```



> Issues - I found that after running eject I needed to install these:
>
> ```bash
> yarn add @babel/plugin-transform-react-jsx @babel/plugin-transform-react-jsx-source @babel/plugin-transform-react-jsx-self
> ```



### Test state

When you make changes to the code base the app should hot reload in the browser but the state should be maintained...

To test this we need a component that uses state.

@ `components/pages/Home.js`

add

```jsx
  constructor(props) {
    super(props);

    this.state = {
      data: 0
    };
    console.log("constructor data: " + this.state.data);
  }

  increment() {
    this.setState({
      data: this.state.data + 1
    });
    console.log("increment data: " + this.state.data);
  }
```

and add

```jsx
<p>{this.state.data}</p>
<button onClick={this.increment.bind(this)}>Increment</button>
```

The incrementer works and with each click of the button the browser updates with the new data **without a page re-fresh**

Also!!!

Check that editing the HTML causes a hot reload but…  does not destroy the state...  

