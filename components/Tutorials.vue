<template>
    <div class="tutorials">
        <div class="tutorial" v-for="(tutorial, index) in $store.state.tutorials.data" :key="index">
            {{ tutorial.title }}
        </div>
    </div>
</template>

<script>

export default {

    data(){
        return {}
    },

    created(){
        this.Fetch();
    },

    methods: {
        async Fetch(){
            try{
                await this.$store.dispatch('tutorials/fetch');
            }catch(err){
                throw err;
            }
        }
    }

}

</script>