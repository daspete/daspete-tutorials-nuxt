<template>
    <div class="home">
        <top-bar></top-bar>
    </div>
</template>

<script>
import AppLink from '~/components/atoms/AppLink.vue'
import TopBar from '~/components/organisms/TopBar.vue'


export default {


    // Define the current page layout here
    layout: 'master',


    // Set the meta data of the current page here
    head(){
        return {
            title: this.$store.getters['page/Meta'].title,
            meta: this.$store.getters['page/Meta'].meta
        }   
    },


    // before a page is rendered, we can create middleware functions
    // to check, if a user can view this page
    middleware: [
        'auth'
    ],

    // we have to register our page components here
    components: {
        AppLink,
        TopBar
    },



    async asyncData({ store }){
        // here we are preloading all the datas, we need to have before rendering (for seo, and so on)
        await store.dispatch('page/fetchMeta');
        await store.dispatch('page/fetchTopmenu');
        
        // return datas here
        return {

        }
    }

}
</script>