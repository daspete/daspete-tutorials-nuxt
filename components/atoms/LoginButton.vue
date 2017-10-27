<template>
    <div class="login-button">
        <button v-on:click="Login({ email: 'user@api.dev', password: '123456' })">Login</button>
    </div>
</template>

<script>

export default {

    methods: {
        async Login(credentials){
            this.$root.$loading.start();
            try{
                await this.$store.dispatch('auth/login', credentials);
                
                this.$emit('login-success');

                this.$root.$loading.stop();
            }catch(err){
                this.$root.$loading.fail();

                throw err;
            }
        }
    }

}

</script>