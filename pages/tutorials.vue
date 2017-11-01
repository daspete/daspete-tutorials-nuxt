<template>
    <div class="home">
        <top-bar></top-bar>
        <tutorial-list></tutorial-list>
        go back to <app-link href="/">index</app-link>
    </div>
</template>

<script>
import authCheck from '~/middleware/authCheck.js'
import AppLink from '~/components/atoms/AppLink.vue'
import TopBar from '~/components/organisms/TopBar.vue'
import TutorialList from '~/components/organisms/TutorialList.vue'

export default {


    // Define the current page layout here
    layout: 'master',


    // Set our meta data here
    head: {
        title: 'Tutorials'
    },


    // before a page is rendered, we can create middleware functions
    // to check, if a user can view this page
    middleware: [
        'auth'
    ],


    // we have to register our page components here
    components: {
        AppLink,
        TopBar,
        TutorialList
    },
    

    // here we are preloading all the datas, we need to have before rendering (for seo, and so on)
    async asyncData({ store }){
        if(store.getters['auth/IsAuthenticated'] === true){
            await store.dispatch('tutorials/fetch_premium');
        }else{
            await store.dispatch('tutorials/fetch');
        }
        
        // return datas here
        return {

        }
    },


    mounted(){
        // when the page is created, we add our store event listeners
        this.$store.$bus.$on('login', this.OnLoggedIn);
        this.$store.$bus.$on('logout', this.OnLoggedOut);

        // let's call our middlewares here, when we want to create a pre rendered package
        authCheck(this);
    },

    // when we leave the page, we remove our store event listeners
    beforeDestroy(){
        this.$store.$bus.$off('login', this.OnLoggedIn);
        this.$store.$bus.$off('logout', this.OnLoggedOut);
    },


    methods: {
        OnLoggedOut(){
            console.log('logout');
            this.$store.dispatch('tutorials/fetch');
        },
        OnLoggedIn(){
            console.log('login');
            this.$store.dispatch('tutorials/fetch_premium');
        }
    }

}
</script>