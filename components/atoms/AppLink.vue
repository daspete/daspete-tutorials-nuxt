<template>
    <a :href="href" v-on:click.prevent="OnClick"><slot></slot></a>
</template>

<script>
export default {
    props: [
        'href'
    ],

    methods: {
        OnClick(e){
            this.$router.push(this.href);
        }
    }
}
</script>