<template>
    <div>
        <NotFound v-if="error.statusCode" />
    </div>
</template>

<script setup>
const props = defineProps(['error'])

</script>

<style lang="scss" scoped>

</style>