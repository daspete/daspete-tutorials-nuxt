const APIBASEURL = 'http://api.dev/api/';

module.exports = {

    api: {

        auth: {
            login: `${APIBASEURL}auth/login`,
            logout: `${APIBASEURL}auth/logout`
        },



        tutorials: `${APIBASEURL}tutorials`
    }

}