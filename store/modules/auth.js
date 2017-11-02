import { SetJWT, UnsetJWT, GetJWTFromLocalStorage } from '~/utils/auth.js'

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
                const data = await this.$axios.$post(process.env.api.auth.login, credentials);
                
                // commit the response with our UPDATE mutation function
                commit('UPDATE', data);
            }catch(err){
                commit('UPDATE', null);

                throw err;
            }
        },
    
        // logout from api and clear the state
        async logout({ commit, state }){
            try{
                // Let's logout from our api
                await this.$axios.$post(process.env.api.auth.logout);

                // commit, that we set our JWT object to null
                commit('UPDATE', null);
            }catch(err){
                commit('UPDATE', null);

                throw err;
            }
        }
    },

    mutations: {
        UPDATE(state, data){
            console.log(data);
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