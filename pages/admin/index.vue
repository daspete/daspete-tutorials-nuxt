<template>
    <div class="admin">
        Welcome to the admin<br>
        <logout-button></logout-button>
    </div>
</template>

<script>
import AppLink from '~/components/atoms/AppLink.vue'
import LogoutButton from '~/components/atoms/LogoutButton.vue'


export default {


    // Define the current page layout here
    layout: 'master',


    // Set the meta data of the current page here
    head: {
        title: 'Admin'
    },


    // before a page is rendered, we can create middleware functions
    // to check, if a user can view this page
    middleware: [
        'auth',
        'isLoggedOut'
    ],

    // we have to register our page components here
    components: {
        AppLink,
        LogoutButton
    },


    // here we are preloading all the datas, we need to have before rendering (for seo, and so on)
    async asyncData(context){
        // return datas here
        return {

        }
    }

}
</script>