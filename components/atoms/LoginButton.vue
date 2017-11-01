<template>
    <div class="login-button">
        <button v-on:click="Login({ email: 'user@api.dev', password: '123456' })">Login</button>
    </div>
</template>

<script>

export default {

    methods: {
        async Login(credentials){
            try{
                await this.$store.dispatch('auth/login', credentials);
            }catch(err){
                throw err;
            }
        }
    }

}

</script>