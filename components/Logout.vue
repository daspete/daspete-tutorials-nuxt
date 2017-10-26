<template>
    <div class="logout">
        LOGOUT
        <button v-on:click="Logout">Logout</button>
    </div>
</template>

<script>

export default {

    methods: {
        async Logout(){
            try{
                await this.$store.dispatch('auth/logout');
                this.$emit('logout-success');
            }catch(err){
                throw err;
            }
        }
    }

}

</script>