<template>
    <div :class="`page-loading${loading ? ' page-loading--visible' : ''}`">
        Loading...
    </div>
</template>

<script>
export default {
    data(){
        return {
            loading: false,
            percent: 0
        }
    },

    methods: {
        start(){
            this.percent = 0;
            this.loading = true;
        },

        stop(){
            this.percent = 100;
            this.loading = false;
        },

        fail(){
            this.loading = false;
        },

        increase(percent){
            this.percent = percent;
        }
    }
}
</script>