import _axios from '~/plugins/axios.js'
import Config from '~/config/global.js'

import { SetJWT, UnsetJWT } from '~/utils/auth.js'


export default {
    state(){
        return {
            data: null
        }
    },

    getters: {
        IsAuthenticated(state){
            return state.data !== null;
        },
    
        Datas(state){
            return state.data;
        }
    },

    actions: {
        // login routine
        async login({ commit }, credentials){
            try{
                // just wait for the login process to complete
                let axios = _axios.create();
                const { data } = await axios.post(Config.api.auth.login, credentials);
                
                // commit the response with our SETJWT mutation function
                commit('SETJWT', data);
            }catch(err){
                throw err;
            }
        },
    
    
        async logout({ commit, state }){
            try{
                // Let's logout from our api
                let axios = _axios.create(state.data.access_token);
                await axios.post(Config.api.auth.logout);
            
                // commit, that we set our JWT object to null
                commit('SETJWT', null);
            }catch(err){
                throw err;
            }
        }
    },

    mutations: {
        SETJWT(state, data){
            state.data = data || null;

            if(state.data === null){
                UnsetJWT();
                return;
            }

            if(typeof data !== 'undefined' && typeof data.access_token !== 'undefined'){
                SetJWT(data);
            }
        }
    }
    
}