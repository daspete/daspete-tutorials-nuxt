import { Ajax } from '~/plugins/axios.js'

import { SetJWT, UnsetJWT } from '~/utils/auth.js'


const axios = Ajax;

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
                const { data } = await axios.post(process.env.api.auth.login, credentials);
                
                // commit the response with our UPDATEJWT mutation function
                commit('UPDATEJWT', data);
            }catch(err){
                throw err;
            }
        },
    
    
        async logout({ commit, state }){
            try{
                // Let's logout from our api
                axios.SetToken(state.data);

                await axios.post(process.env.api.auth.logout);

                // commit, that we set our JWT object to null
                commit('UPDATEJWT', null);
            }catch(err){
                commit('UPDATEJWT', null);

                throw err;
            }
        }
    },

    mutations: {
        UPDATEJWT(state, data){
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