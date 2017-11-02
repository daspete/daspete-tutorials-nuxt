export default {
    state(){
        return {
            meta: null,
            topmenu: null
        }
    },

    getters: {
        Topmenu(state){
            return state.topmenu;
        },
        Meta(state){
            return state.meta;
        }
    },

    actions: {
        async fetchTopmenu({ commit }){
            try{
                const data = await this.$axios.$get(process.env.api.page.topmenu);
                
                commit('SET_TOPMENU', data);
            }catch(err){
                throw err;
            }
        },

        async fetchMeta({ commit }){
            try{
                const data = await this.$axios.$get(process.env.api.page.meta);
                
                commit('SET_META', data);
            }catch(err){
                throw err;
            }
        }

    },

    mutations: {
        SET_TOPMENU(state, data){
            state.topmenu = data || null;
        },
        SET_META(state, data){
            state.meta = data || null;
        },
        
    }
    
}