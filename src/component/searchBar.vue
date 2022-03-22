<template>
<div>
  <div class="search-bar">
    <select class="drop-down-box" v-model="selectedCountry">
      <option value="">Select Country</option>
      <option
        v-for="country in allCountries"
        :key="country.name"
        :value="country.value"
      >{{country.name}}</option>
    </select>
    <select class="drop-down-box" v-model="selectedCategoury">
      <option value="">Select Categories</option>
      <option
        v-for="category in allCategories"
        :key="category.name"
        :value="category.value"
      >{{category.name}}</option>
    </select>
    <input type="text" placeholder="Keyword" class="keyword-text-box" v-model="keyword">
    <button class="search-bar-buttons" @click="enterdvalue">
        <img  class="search-icon"  :src="searchIcon ">
    </button>
     <button class="search-bar-buttons">
        <img  class="search-icon"  :src="listIcon ">
    </button>
  </div>
  <p class="result-count">
  {{getTotalResults}} News Results(s)
  </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import countryData from "../jsonData/country.json";
import  categoryData from "../jsonData/categories.json"
import searchIcon from "../assets/search-icon.png" 
import listIcon from "../assets/list.png"
export default {
  data: function() {
    return {
      allCountries: countryData,
      allCategories: categoryData,
      searchIcon: searchIcon,
      listIcon: listIcon,
      selectedCountry:"",
      selectedCategoury:"",
      keyword:"",
    };
  },
  computed:{
        ...mapGetters(["getTotalResults"]),
  },
  methods:{
    enterdvalue(){
      this.$store.state.countrySearch=this.selectedCountry,
      this.$store.state.categorySearch=this.selectedCategoury,
      this.$store.state.keywordSearch=this.keyword
      let searchFilter={
        category:this.selectedCategoury,
        country:this.selectedCountry,
        keyword:this.keyword
      }
     this.$store.dispatch("getFilteredResult",searchFilter)
    }
  }
};
</script>

<style>
.result-count{
  text-align: center;
  font-size: x-large;
}
.search-bar {
  overflow: hidden;
  background-color: hsl(0deg 0% 66%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 15px;
}
.drop-down-box {
  width: 250px;
  height: 40px;
  border-radius: 6px;
  margin: 5px;
  text-align: center;
  border: none;
}
.keyword-text-box{
    width: 250px;
    height: 40px;
    margin: 5px;
    border-radius: 6px;
    border: none;
}
.search-icon{
    width: 25px;
    height: 25px;
}
.search-bar-buttons{
    margin-left: 1%;
    width: 50px;
    height: 40px;
    margin: 2px;
   background-color: hsl(210deg 10% 23%);
    border-radius: 10px;
    border: none;
    cursor: pointer;

}
@media screen and (min-width: 460px) {
  /*  */
  .drop-down-box {
    width: 250px;
    margin: 10px;
  }
  .keyword-text-box{
    width: 250px;
  }
}
@media screen and (min-width: 800px){
.search-bar {
    flex-direction: row;
  }
   .drop-down-box {
    width: 360px;
    margin: 16px;
    height: 46px;
  }
  
}
</style>
