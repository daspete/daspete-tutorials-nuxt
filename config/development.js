const APIBASEURL = 'http://api.dev/api/';

const environment = {
    app: {
        name: 'DP Development'
    },
    
    api: {
        auth: {
            login: `${APIBASEURL}auth/login`,
            logout: `${APIBASEURL}auth/logout`
        },

        page: {
            topmenu: `${APIBASEURL}topmenu`,
            meta: `${APIBASEURL}meta`,
        },
        

        tutorials: {
            standard: `${APIBASEURL}tutorials`,
            premium: `${APIBASEURL}tutorials/premium`
        },

    }

}

module.exports = {
    environment: environment
}