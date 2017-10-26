# DasPeTeTutorials WEB

This is a testproject to check if nuxt.js is ready for use in production (at least for me ;))



## Setup

- Get nodejs >= 8.6 (use [nvm](https://github.com/creationix/nvm))
- run ```npm install```



## NPM tasks

### ```npm run dev```

Starts a web server at [http://localhost:3000](http://localhost:3000) and starts the watcher, which listens to file changes to recompile



### ``` npm run generate ```

Compiles the complete source package to a ready ² use package into the folder ``` /dist ```





## Config

Configure your api endpoints at the file ``` /config/global.js ```



## Data store

There is a global vuex data store located at the file ``` /store/index.js ```

This store has modules included, which are located at the folder ``` /store/modules ```

Each of these modules has their own actions, mutations and getters, but all of them can be used globally in your application by the ``` this.$store ``` object, which is available in every component.



## Pages 

Pages are the entrypoint of each site, for example, when you surf to http://localhost/testing, the page file has to be located at ``` /pages/testing.vue ```



