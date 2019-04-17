# Build a UI kit with styled-components - Part 2

[Part 1 - Build a UI kit with styled-components](https://www.youtube.com/watch?v=ZwYwSJUuYmY)



Now we have a module that exports some components and a theme object. It is packaged up with a react-app that serves a docs folder where we can show off the components that we build and what effect the variables in the theme have.

Its time to get it ready to ship to NPM.

Hmmm... thinking about this why don't we set up some test apps to import the components and theme we are making...

Since we are using styled-components to build the components and it is platform agnostic, you might think about using `create-react-app` or GatsbyJS or NextJS or VueJS... , to demo the theme...

Users of your NPM UI kit will probably use one these as basis for their application so you can provide some default setup and imports and generate some pages to let them see how everything works.

For now we'll just do `create-react-app`

Lets create a demo folder where we can install a create-react-app app, later we can add gatsby or vue, etc...

@ `src/demo/`

```bash
npx create-react-app cra-demo
```

Before you cd into the app to run it lets add the app to the workspaces 

@ `project/package.json`

```json
{
  "private": "true",
  "name": "project",
  "version": "1.0.0",
  "workspaces": [
    "portfolio",
    "packages/*",
    "packages/theme/demo/cra-demo"
  ]
}
```

Now cd into the app and start it.

@ `cra-demo`

```bash
yarn start
```

Or, use the workspace we set up

```bash
yarn workspace cra-demo start
```

which gives us a demo app running on: http://localhost:3000/

And remember we also have the documentation site, which we can run 

```bash
yarn workspace theme start
```

Which opens up our docs app on: http://localhost:8080/



## Pushing the module to NPM

OK so here's the key.  NPM looks for `index.js` file in the root of the project.  We have actually specified the `index.js` file as the entry point for the module.  If we didn't specify it NPM would look for it by default.

So lets create it

@ `index.js`

```javascript
module.exports = require("./dist")
```

So NPM looks for `index.js` which points ot the `dist` folder which is where webpack will send our bundled code, cleaned up and rendered into vanilla javascript.

So lets build the dist folder

```bash
yarn workspace theme build
```

Now before we send this module up to NPM we could add it to our test app by editing the `package.json` and manually adding it and try to use the components. 

```json
  "dependencies": {
    "react": "^16.8.5",
    "react-dom": "^16.8.5",
    "react-scripts": "2.1.8",
    "theme": "*"
  },
```

 Now we can use the components in `cra-demo` 

@ `App.js`

```jsx
import { H1, Button } from "theme";
```

and use

```jsx
<H1>This is a component from smerththeme</H1>
<Button>Smerth Theme</Button>
```

Start the app

```bash
yarn workspace cra-demo start
```



## A fork in the road

This is the setup we now have:

- We have the main app we are trying to develop called "portfolio".

- "portfolio" uses a theme called "theme".
- The theme contains a webpack build to export the components and theme object to a `dist` folder. That folder is what NPMJS.org makes available as a module.
- The theme also contains a simple react-app called "theme" that serves the docs folder, and pulls our components and the theme from `src.` We can use this app to build document pages to show off the components and theme. 
- The theme also contains a `create-react-app` demo app that imports the theme module from `dist` and just demonstrates that the components and theme are accessible in the app.

These apps are structured in a yarn workspace such that we run everything using workplace commands.

```bash
yarn workspace portfolio start
```

starts the main app we are developing

```
yarn workspace theme start
```

starts the theme documentation website

and most of the time you are just running these two.  

Your workflow:

- write new components in the theme
- build the theme
- the new components and changes and theme object are available in your main site - "portfolio"

Maybe you want to stop here for a while.  Maybe want to commit the entire workspace to github and have two teams download the workspace.  One team can work on the theme and the other one can work on the portfolio.

In fact, for the remaining articles that is what I will do.   As a I continue to refactor "portfolio" its more conventient to leave everything in this workspace.

But at this point you can also just hoist the theme to NPM, remove it from the workspace,... in fact just take the workspace apart,... and just have two repos,... One for the theme and one for the portfolio... and work on each independantly...

That's the fork in the road...  for those who want to post the theme, tear down the workspace and carry on working on two separate repos the next section is about NPM.



## Hoist to NPM

Run build again just to be sure 

```bash
yarn build
```

Publish

```bash
yarn publish
```

You will be prompted for the version number which must increment with each new publication.

And you will be asked for your credentials to login.

Now if you go to [npmjs.org](npmjs.org) and search for the module it should be there.

Now the next time you run `yarn` or `yarn install`  in portfolio it should be pulling the module from NPM.

And if you download the module the docs app should still be displaying components from source while the cra-demo will be pulling the module from NPM.







