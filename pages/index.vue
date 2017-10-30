<template>
    <div class="home">
        <top-bar></top-bar>
        <tutorial-list></tutorial-list>
    </div>
</template>

<script>

import TopBar from '~/components/organisms/TopBar.vue'
import TutorialList from '~/components/organisms/TutorialList.vue'

export default {

    layout: 'master',

    head: {
        title: 'Home'
    },

    components: {
        TopBar,
        TutorialList
    },

    middleware: [
        'auth'
    ],

    mounted(){
        // manually login for now.... till there is a middleware working on the generated stack
        if(typeof window.localStorage.jwt !== 'undefined'){
            let jwt = JSON.parse(window.localStorage.jwt);

            this.$store.commit('auth/UPDATE', jwt);
        }
    },

    async asyncData({ store }){
        // here we are preloading all the datas, we need to have before rendering (for seo, and so on)
        if(store.getters['auth/IsAuthenticated'] === true){
            await store.dispatch('tutorials/fetch_premium');
        }else{
            await store.dispatch('tutorials/fetch');
        }
        
        // return datas here
        return {

        }
    }

}
</script>