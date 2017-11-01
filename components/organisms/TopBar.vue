<template>
    <div class="user-actions">
        <login-button v-if="!$store.getters['auth/IsAuthenticated']"></login-button>
        <logout-button v-if="$store.getters['auth/IsAuthenticated']"></logout-button>
    </div>
</template>

<script>

import LoginButton from '~/components/atoms/LoginButton'
import LogoutButton from '~/components/atoms/LogoutButton'

export default {

    components: {
        LoginButton,
        LogoutButton
    }

}
</script>