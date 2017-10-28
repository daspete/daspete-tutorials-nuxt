const APIBASEURL = 'http://api.dev/api/';

const environment = {
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