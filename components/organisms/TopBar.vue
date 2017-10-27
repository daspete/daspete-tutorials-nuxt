<template>
    <div class="user-actions">
        <login-button v-if="!$store.getters['auth/IsAuthenticated']" v-on:login-success="OnLogin"></login-button>
        <logout-button v-if="$store.getters['auth/IsAuthenticated']" v-on:logout-success="OnLogout"></logout-button>
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

    methods: {
        OnLogin(){
            console.log('auth datas', this.$store.getters['auth/Datas']);
        },

        OnLogout(){
            console.log('logged out');
        }
    }

}
</script>