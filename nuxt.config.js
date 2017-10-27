module.exports = {

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
                maxAge: 1000 * 60 * 15
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
        '~/assets/css/ui.less',
        '~/assets/css/main.scss'
    ],


    build: {

        extractCSS: true,
        
        vendor: [
            // Let's use axios as our XHR tool
            'axios',

            // We use iview as our ui library for now
            //'iview'
        ]

    },

    plugins: [
        //'~/plugins/iview.js'
    ]

}