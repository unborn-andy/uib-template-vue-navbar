## Node-Red Uibuilder Vue Navbar

This is an external template for node-red-contrib-uibuilder.<br>
(It uses Vue 2, vue-router and bootstrap-vue for the navigation between pages)

Each page is a seperate .vue component file (Single File Component) that loads in the parent App.vue using vue-router.<br>
We use a SFC for each page to seperate and make the design cleaner with its own code and functionality.<br>

Because we are using .vue files and modern javascript syntax in our application, we'll need a bundler to build/translate that code into plain javascript. In this project I use parcel-bundler.

<br>

## How to use

1. Configure a uibuilder node on your Node-Red flow with the URL set to e.g. : `navbar` 
2. In Advanced settings, set it to serve files from the `/dist` folder.
3. From `~/.node-red/uibuilder/navbar` run `npm install` to install all the dependancies of the app based on the package.json file.
4. Run `npm run build` so parcel-bundler will build the app into the `/dist` folder.
5. Browser to `http://<nodered-ip>:1880/navbar`

<br>

#### Example of a working project :

![Energy-Monitor](https://github.com/unborn-andy/nodered-monitor/blob/master/Energy%20Monitoring.png)



