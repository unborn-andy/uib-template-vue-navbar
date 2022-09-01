## Node-Red Uibuilder Vue Navbar

This is a top navigation bar template for **node-red-contrib-uibuilder v5.1.1**.<br>
( It uses Vue 2, bootstrap-vue and vue-router for the navigation between pages )

![image](https://user-images.githubusercontent.com/93290787/149122058-2a7d87f0-bd55-4aaf-959a-88e1f457a218.png)


Each page is a seperate .vue component file (Single File Component) that loads in the parent **App.vue**<br> using vue-router. We use a SFC for each page to seperate and make the design cleaner with its own code and functionality.<br>

**Folder structure :**

![image](https://user-images.githubusercontent.com/93290787/149117883-2177d415-8e9b-408a-af84-2f5ad1100e12.png)


Because we are using .vue files and modern javascript syntax in our application, we'll need a bundler to build/translate that code into plain javascript so the browser can understand. In this project we use **Vite**.

You dont have to worry about installing or configuring anything with Vite, it gets installed when you run `npm install` as it is in `package.json` devDependencies, along with two script commands `npm run build` to build your app and `npm run dev` which spins a dev server and watches for any file changes with Hot Module Reloading, which makes development much faster.

Enough with the intro .. lets get coding.

## How to install

1. Configure a uibuilder node on your Node-Red flow with the URL set to e.g. : `navbar` 
2. In Template Settings, select `Load an external template using Degit` and load the template from<br> `unborn-andy/uib-template-vue-navbar`
3. In Advanced settings, set it to serve files from the `/dist` folder.
4. From `~/.node-red/uibuilder/navbar` run `npm install` to install all the dependencies of the app based on the package.json file.
5. Run `npm run build` so Vite will build the app into the `/dist` folder.
6. Run `npm run dev` so Vite will spin up a dev server with Hot Module Reloading.

## Configuration

1. During the installation steps I used as an example the uibuilder url `navbar`.<br>
If you used something else more appropriate for your project, then you have to make some changes for the navigation to work. In `router.js` change `base: "navbar",` and in `app.js` change the ioNamespace subpath of :  

```
uibuilder.start({ ioNamespace: `https://${document.location.hostname}:1880/navbar`, ioPath: "/uibuilder/vendor/socket.io", loadStylesheet: false });
```

2. If you want to rename any of the pages in /components folder to something more descriptive to your project,<br> then rename them and make the relative changes to  the `router.js` and `NavBar.vue` files.   
3. After any change, rebuild the app using `npm run build`


#### Example from a working project :

![Energy-Monitor](https://github.com/unborn-andy/nodered-monitor/blob/master/Energy%20Monitoring.png)



