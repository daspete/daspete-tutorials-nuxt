<template>
    <div class="user-actions">
        <login-button v-if="!$store.getters['auth/IsAuthenticated']"></login-button>
        <logout-button v-if="$store.getters['auth/IsAuthenticated']"></logout-button>

        <button v-on:click="$store.dispatch('tutorials/fetch_premium')">Premium Tutorials</button>
    </div>
</template>

<script>

import LoginButton from '~/components/atoms/LoginButton'
import LogoutButton from '~/components/atoms/LogoutButton'

export default {

    components: {
        LoginButton,
        LogoutButton
    },

    created(){
        // add our global event listeners for store changes
        this.$store.$bus.$on('login', this.OnLoggedIn);
        this.$store.$bus.$on('logout', this.OnLoggedOut);
    },

    methods: {
        OnLoggedIn(){
            console.log('auth datas', this.$store.getters['auth/Datas']);
        },

        OnLoggedOut(){
            console.log('logged out');
            this.$store.dispatch('tutorials/fetch')
        }
    }

}
</script>