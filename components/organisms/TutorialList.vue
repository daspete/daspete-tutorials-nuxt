<template>
    <div class="tutorials">
        <div class="tutorial" v-for="(tutorial, index) in $store.getters['tutorials/Datas']" :key="index">
            {{ tutorial.title }}
        </div>
    </div>
</template>
