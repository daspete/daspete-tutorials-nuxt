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

    middleware: [
        'auth'
    ],

    components: {
        TopBar,
        TutorialList
    },

    async asyncData({ store }){
        // here we are preloading all the datas, we need to have before rendering (for seo, and so on)
        if(store.getters['auth/IsAuthenticated'] !== null){
            await store.dispatch('tutorials/fetch_premium');
        }else{
            await store.dispatch('tutorials/fetch');
        }
        

        return {}
    }

}
</script>