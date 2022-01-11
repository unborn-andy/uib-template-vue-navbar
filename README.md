## Node-Red Uibuilder Vue Navbar

This is an external template for **node-red-contrib-uibuilder**.<br>
( It uses Vue 2, bootstrap-vue and vue-router for the navigation between pages )

Each page is a seperate .vue component file (Single File Component) that loads in the parent **App.vue**<br> using vue-router. We use a SFC for each page to seperate and make the design cleaner with its own code and functionality.<br>

Because we are using .vue files and modern javascript syntax in our application, we'll need a bundler to build/translate that code into plain javascript so the browser can understand. In this project we use **parcel-bundler**.

You dont have to worry about installing or configuring anything with parcel-bundler, it gets installed when you run `npm install` as it is in `package.json` devDependencies, along with two script commands `npm run build` to build your app and `npm run watch` to build and continue watching for any file changes, which makes re-building much faster during development.

Enough with the intro .. lets get coding.

<br>

## How to install

1. Configure a uibuilder node on your Node-Red flow with the URL set to e.g. : `navbar` 
2. In Template Settings, select `Load an external template using Degit` and load the template from<br> `unborn-andy/uib-template-vue-navbar`
3. In Advanced settings, set it to serve files from the `/dist` folder.
4. From `~/.node-red/uibuilder/navbar` run `npm install` to install all the dependencies of the app based on the package.json file.
5. Run `npm run build` so parcel-bundler will build the app into the `/dist` folder.
6. Browse to `http://<nodered-ip>:1880/navbar`

<br>

#### Example of a working project :

![Energy-Monitor](https://github.com/unborn-andy/nodered-monitor/blob/master/Energy%20Monitoring.png)



