import Vue from 'vue'
import axios from 'axios'

export const Ajax = {
    $ref: axios,
    get: axios.get,
    post: axios.post,
    SetToken: (data) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${ data.access_token }`;
    }
};


export default ({ app }, inject) => {
    app.$axios = {
        $ref: axios,
        get: axios.get,
        post: axios.post,
        SetToken: (data) => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${ data.access_token }`;
        }
    }

    return app.$axios;
}