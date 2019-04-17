# Deploy the app

## Prepare to deploy

Before deploying the portfolio app run the app and check for errors

no errors... proceed...

Build the project

```bash
npm run build
```

This will return a message that gives a url to place in your package.json to build the app for deployment on github with your repo

```bash
yarn workspace portfolio run build
```

Returns...

```bash
The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  https://bit.ly/CRA-deploy
```

Test the build

Add the serve package

```bash
  yarn global add serve
```

And serve

@ portfolio

```bash
serve -s build
```



## Create a githhub repo for the project

So commit your project to a repo on github and using the url to th project update the package json...

```bash
"homepage" : "http://myname.github.io/myapp"
```

(add your name and the project name to the url)

Now run build again

And you get a different message...  This time asking you to add scripts for "redeploy" and "deploy" to the app `package.json` 

Now your ready to run deploy

@ portfolio

```bash
npm run deploy
```

