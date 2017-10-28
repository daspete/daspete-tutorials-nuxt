<template>
    <div class="home">
        <top-bar></top-bar>
    </div>
</template>

<script>

import TopBar from '~/components/organisms/TopBar.vue'

export default {

    layout: 'master',

    middleware: [
        'auth'
    ],

    components: {
        TopBar
    },

    asyncData(){
        return {}
    },

    mounted(){
        
    },

    methods: {
        checkLogin(){
            console.log(this.$store.getters['auth/Datas']);
        },

        onLoggedIn(){
            console.log('auth', this.$store.state.auth);
            console.log('auth getter', this.$store.getters['auth/Datas']);
        },

        onLoggedOut(){
            console.log('auth', this.$store.state.auth);
            console.log('auth getter', this.$store.getters['auth/Datas']);
        }

        
    }

}
</script>