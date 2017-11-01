const   config = require('config'),
        environment = config.get('environment');

module.exports = {

    // set our environment, which is located at /config/[environment].js
    env: environment,

    // define a custom component for the global loading animation (especially for the router loading)
    //loading: '~/components/molecules/Loading.vue',

    // set the global title, meta tags and styles
    head: {
        titleTemplate: '%s | ' + environment.app.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
    },


    render: {
        bundleRenderer: {
            // Let's cache our views
            cache: require('lru-cache')({
                max: 1000,
                maxAge: 1000 * 60 * 5
            }),

            // Let's preload scripts, css and fonts
            shouldPreload: (file, type) => {
                return [
                    'script',
                    'style',
                    'font'
                ].includes(type)
            }
        }
    },

    
    // include our global CSS styles
    css: [
        // iview ui library config stylesheet
        '~/assets/css/ui.less',

        // main styles for the web or app
        '~/assets/css/main.scss'
    ],


    build: {
        // we don't want inline css in the html, so we extract it
        extractCSS: true,
        
        vendor: [
            // set our vendor packages, if there are any
        ]

    },

    generate: {
        // Let's define the routes, which are generated in the production package
        // routes: [
        //     '/'
        // ]
    },
    
    modules: [
        // we use the nuxtjs axios module for now
        '@nuxtjs/axios',
    ],

    plugins: [
        // we use iview as our ui library for now
        '~/plugins/iview.js',

        // Let's use our own global event bus
        '~/plugins/eventbus.js'
    ],


    // config for axios
    axios: {
        requestInterceptor: (config, { store }) => {
            // if we have an access token, we set the auth header
            const data = store.getters['auth/Datas'];

            const token = typeof data !== 'undefined' && data !== null ? data.access_token : '';

            if(token){
                config.headers.common['Authorization'] = `Bearer ${token}`;
            }

            return config;
        }
    }

}