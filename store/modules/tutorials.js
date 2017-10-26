import axios from 'axios'
import Config from '~/config/global.js'

export default {
    state(){
        return {
            data: null
        }
    },

    actions: {
        async fetch({ commit }){
            try{
                const { data } = await axios.get(Config.api.tutorials);
                
                commit('SETTUTORIALS', data);

            }catch(err){
                throw err;
            }
        }
    },

    mutations: {
        SETTUTORIALS(state, data){
            state.data = data || null;
        }
    }
    
}