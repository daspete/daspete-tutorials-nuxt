<template>
    <div class="top-bar">
        <div v-for="menuItem in $store.getters['page/Topmenu']">
            {{ menuItem.name }}
        </div>
    </div>
</template>

<script>
export default {



}
</script>