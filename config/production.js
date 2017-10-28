const APIBASEURL = 'http://api-production.dev/api/';

const environment = {
    app: {
        name: 'DP Production'
    },
    
    api: {
        auth: {
            login: `${APIBASEURL}auth/login`,
            logout: `${APIBASEURL}auth/logout`
        },

        tutorials: `${APIBASEURL}tutorials`
    }

}

module.exports = {
    environment: environment
}