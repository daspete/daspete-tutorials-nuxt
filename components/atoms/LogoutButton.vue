<template>
    <div class="logout-button">
        <button v-on:click="Logout">Logout</button>
    </div>
</template>

<script>

export default {

    methods: {
        async Logout(){
            try{
                await this.$store.dispatch('auth/logout');

                this.$router.push('admin/login');
            }catch(err){
                this.$Message.error('Fehler beim Ausloggen');
                throw err;
            }
        }
    }

}

</script>