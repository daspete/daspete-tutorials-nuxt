import axios from 'axios'

let options = {};

let instance = {
    options,
    create: (access_token) => {
        options.headers = {
            Authorization: `Bearer ${access_token}`
        };

        return axios.create(instance.options);
    }
}

export default instance;