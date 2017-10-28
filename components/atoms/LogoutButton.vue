<template>
    <div class="logout-button">
        <button v-on:click="Logout">Logout</button>
    </div>
</template>

<script>

export default {

    methods: {
        async Logout(){
            this.$root.$loading.start();

            try{
                await this.$store.dispatch('auth/logout');

                this.$root.$loading.stop();
            }catch(err){
                this.$root.$loading.fail();

                throw err;
            }
        }
    }

}

</script>