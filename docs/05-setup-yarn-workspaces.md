# Setup yarn workspaces

Lets setup a some workspaces so that we can conveniently develop our app while at the same time developing a theme module.  

Eventually the theme can be hosted on NPM as a separate module and pulled into any react project where it will make available some components and some design tokens.

But before we have the theme hosted on NPM we'll use "yarn workspaces" to allow us to pull it into our project locally.

Create a folder to hold the entire project.  I'm calling the folder: "workspace-cra-theme-module".

Place the `portfolio` React app inside it.

Run `npm init` in the `project` folder and accept the defaults.

@ package.json, edit to contain only the following entries:

```json
{
  "private": "true",
  "name": "workspace-cra-theme-module",
  "version": "1.0.0",
  "workspaces": [
    "portfolio",
    "packages/*"
  ]
}
```

We have now defined two workspaces.  One is the React app, the second is a folder to hold the NPM modules we will develop for the app, one of which will be our theme.  

Create the packages folder

```bash
mkdir packages
```

In `packages` lets create our module called "theme":  `mkdir theme`. 

Run `npm init` inside the theme folder

Note we are declaring `index.js` as the entry point for the module.  NPM requires an entry point and we will also need the index file to export things from our theme module.

@ theme

```bash
touch index.js
```

Now lets add the theme in the packages folder as a dependancy of the react-app

@ `portfolio/package.json`

```json
  "dependencies": {
    Other stuff...
      
    "webpack-manifest-plugin": "2.0.4",
    "workbox-webpack-plugin": "3.6.3",
    "theme": "*"
  },
```



Because we have set up the two workspaces yarn will be aware of the `packages` folder as a   place it should look for NPM modules and it will find the `theme` because all yarn needs to recognize on npm module is an `index.js` file which we have put in `theme`.

Before going any further lets run yarn in the `project` root

@ `project`

```bash
yarn
```

This will link the workspaces up...

We can check the workspace setup with:

```bash
yarn workspaces info
```

Let's try running the app

```bash
yarn workspace portofolio start
```



> To get this working I had to delete the `node-modules` folder in the app and then run `yarn install` in the app.
>
> I have a feeling this is because I didn't start at the beginning running `create-react-app` through the workspace.  Next time I'll set up the workspace at the beginning.



