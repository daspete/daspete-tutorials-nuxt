const   config = require('config'),
        environment = config.get('environment');

module.exports = {

    env: environment,

    loading: '~/components/molecules/Loading.vue',

    // set the global title, meta tags and styles
    head: {
        titleTemplate: '%s | APP NAME',
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

        extractCSS: true,
        
        vendor: [
            // We use iview as our ui library for now
            //'iview'
        ]

    },

    
    modules: [
        // we use the nuxtjs axios module for now
        '@nuxtjs/axios',
    ],

    plugins: [
        //'~/plugins/iview.js'
    ],

    axios: {
        requestInterceptor: (config, { store }) => {
            const data = store.getters['auth/Datas'];

            const token = data !== null ? data.access_token : '';

            if(store.state.data){
                config.headers.common['Authorization'] = `Bearer ${token}`;
            }

            return config;
        }
    }

}