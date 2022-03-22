<template>
  <div>
    <news-heading></news-heading>
    <search-bar></search-bar>
    <news-card></news-card>
    </div>
</template>

<script>
import newsHeading from "../component/newsHeading.vue";
import searchBar from "../component/searchBar.vue";
import newsCard from "../component/newsCard.vue"
export default {
  components: { newsHeading, searchBar ,newsCard}
};
</script>

<style>


</style>
