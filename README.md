# CRA workplace with styled-components theme

## What is this

This repo is just a place for me to work through different ways of building an NPM theme module for a react app based on design tokens and styled-components. There were alot of diversions to try out different things so the repo is not a useful working build of anything per se.

However, the docs folder contains notes about the various things I worked through and may be useful to skim through.

This is the setup:

- The main app we are trying to develop is called "portfolio".
- "portfolio" uses a theme called "theme".
- The theme contains a webpack build to export the components and theme object to a `dist` folder. That folder is what NPMJS.org makes available as a module.
- The theme also contains a simple react-app called "theme" that serves the docs folder, and pulls our components and the theme from the theme `src.` We can use this app to build documentation pages to show off the components and theme.
- The theme also contains a `create-react-app` demo app that imports the theme module from `dist` and just demonstrates that the components and theme are accessible in the app.

These apps are structured in a yarn workspace such that we can run everything using workspace commands.

```bash
yarn workspace portfolio start
```

starts the main app we are developing

```
yarn workspace theme start
```

starts the theme documentation website

```
yarn workspace cra-demo start
```

starts the create-react-app demo website

Your workflow:

Most of the time you are just running and working in portfolio and theme.

- write new components in the theme (or build new design tokens for the theme object.)
- build the theme
- the new components and changes to the theme object are available in your main site - "portfolio"

## How to use it

Git clone the repo and run yarn in the root folder to install dependancies.

> Important!
> Before running any of the apps you must build the theme.
>
> ```bash
> yarn workspace theme build
> ```
>
> 

## More info

See the docs folder
