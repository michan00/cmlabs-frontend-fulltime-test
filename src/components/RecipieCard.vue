<template>
    <div class="card">
        <img :src="detail.strMealThumb" alt="" srcset="" class="thumbnail"> -->
        <div>{{ detail.strMeal }}</div>
    </div>
 </template>

<script setup>
const props = defineProps({
    detail: {}
})

</script>

<style scoped>
.card{
    min-height: 270px;
    max-height: 320px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
}

.thumbnail{
    height: 220px;
    width: 100%;
    object-fit: cover;
}
</style>