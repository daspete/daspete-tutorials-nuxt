<template>
    <div class="tutorials">
        <div class="tutorial" v-for="(tutorial, index) in $store.getters['tutorials/Datas']" :key="index">
            {{ tutorial.title }}
        </div>
    </div>
</template>

<script>
export default {
    created(){
        // add our global event listeners for store changes
        this.$store.$bus.$on('login', this.OnLoggedIn);
        this.$store.$bus.$on('logout', this.OnLoggedOut);
    },

    methods: {
        OnLoggedOut(){
            this.$store.dispatch('tutorials/fetch');
        },
        OnLoggedIn(){
            this.$store.dispatch('tutorials/fetch_premium');
        }
    }


}
</script>