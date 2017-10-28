export default {
    state(){
        return {
            data: null
        }
    },

    getters: {
        Datas(state){
            return state.data;
        }
    },

    actions: {
        async fetch({ commit }){
            try{
                const data = await this.$axios.$get(process.env.api.tutorials);
                
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