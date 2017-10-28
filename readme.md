# DasPeTeTutorials WEB

This is a testproject to check if nuxt.js is ready for use in production (at least for me ;))



## Setup

- Get nodejs >= 8.6 (use [nvm](https://github.com/creationix/nvm))
- run ```npm install```



## NPM tasks

| Command            | Description                                                                                                                                 |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|  npm run dev       | Starts a web server at [http://localhost:3000](http://localhost:3000) and starts the watcher, which listens to file changes to recompile    |
|  npm run generate  | Compiles the complete source package to a ready ² use package into the folder ``` /dist ```                                                 |



## Directories

| Directory   | Description                                                                                                                                                                                       |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /.nuxt      | This directory is used by nuxt.js itself, it contains all the compiled temporary stuff                                                                                                            |
| /assets     | All the asset stuff lies in here, like images, fonts, extra css,...                                                                                                                               |
| /components | Contains all the VUE components, which can be used by pages                                                                                                                                       |
| /config     | Contains the environment configurations, like API endpoints, app settings,...                                                                                                                     |
| /dist       | When you run ``` npm run generate ``` you will get your production package in this folder                                                                                                         |
| /layouts    | Contains all the VUE layouts (which are wrappers for the pages)                                                                                                                                   |
| /middleware | Contains JS middlewares, which can be utilized by the VUE pages (for example an auth middleware)                                                                                                  |
| /pages      | Contains all the VUE pages (which are also the routes for your app -  so if you have a file called hello.vue, you can browse to http://localhost:3000/hello)                                      |
| /plugins    | Contains your JS plugins, for examples you can  instantiate vendor libraries and set standard options for them, like axios or jQuery,...)                                                         |
| /store      | Contains the global store object (index.js) and the modules (which are the data models)                                                                                                           |
| /utils      | If you want to have a functionality between the two stages  (development and production, so a nodejs development server and a production server like apache,...) you can save your functions here |



