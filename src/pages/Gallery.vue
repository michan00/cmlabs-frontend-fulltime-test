<template>
    <div class="container">
        <div class="header">
        <div class="title">Recipe</div>
        <div class="input-wrapper">
            <input type="text" value="search">
        </div>
    </div>
    <div class="list">
        <RecipieCard v-for="recipe in Recipes" :detail="recipe"/>
        <RecipieCard />
    </div>
</div>
</template>
<script setup>
    import RecipieCard from '../components/RecipieCard.vue';
    import http from '../httpCommon';
    import{ref, onMounted } from "vue";

    const Recipes = ref([]);
    onMounted(()=>{
        http.get('/filter.php?a=Canadian').then(res=>{
            Recipes.value =res.data.meals;
        })
    })
</script>

<style scoped>

.header{
    padding: 10px; 
    display: flex;
}
.title{
    flex: 1;
   
}
.input-wrapper{
    border:2px solid gray;
    border-radius: 5px; 
}
.input-wrapper input{
    outline: none;
    border: none;
}

.list {
    min-height: 95vh;
    flex: 1;
    background: #2980B9;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding-top: 60px;
    padding-left: 50px;
    padding-right: 50px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,1fr);
}
</style>