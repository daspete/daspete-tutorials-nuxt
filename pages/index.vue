<template>
    <div class="container">
        <div class="navi">NAV</div>
        
        <login v-if="!$store.getters['auth/IsAuthenticated']" v-on:login-success="onLoggedIn"></login>
        <logout v-if="$store.getters['auth/IsAuthenticated']" v-on:logout-success="onLoggedOut"></logout>

        <button v-on:click="checkLogin">Testing</button>

        <tutorials></tutorials>
    </div>
</template>

<script>

import Login from '~/components/Login.vue'
import Logout from '~/components/Logout.vue'
import Tutorials from '~/components/Tutorials.vue'

export default {

    layout: 'master',

    middleware: [
        'auth'
    ],

    components: {
        Login,
        Logout,
        Tutorials
    },

    asyncData(){
        return {}
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