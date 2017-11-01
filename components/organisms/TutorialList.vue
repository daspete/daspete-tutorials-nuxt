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
        // this.$store.$bus.$once('login', this.OnLoggedIn);
        // this.$store.$bus.$once('logout', this.OnLoggedOut);
    },

    methods: {
        
    }


}
</script>