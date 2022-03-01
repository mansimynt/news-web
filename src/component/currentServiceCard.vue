<template>
  <div class="current-services-card">
    <p class="current-services-heading">Current Services</p>
    <div class="current-Services-Flex" id="current-Services-Flex">
      <table class="currentservice" >
       <tr >
        <td v-for="img in serviceImages" :key="img.id"><img  :src="img.imageUrl" ></td></tr>
       <tr><td v-for="i in servicename"  :key="i"> {{i.servicename}}</td>
       </tr>

      </table>
    </div>
  
  </div>
</template>
<script>
import store from "../store/store";
import currentAccount from "../assets/images/CurrentAccount.svg"
import loans from "../assets/images/Loans.svg"
import payroll from "../assets/images/Payroll.svg"
export default {
  components: {  store },
  data:function() {
    return {
      totalServices: [],
      subscribeServices: [],
      availableServices: [],
      result: [],
      userId :null,
      ratings: [],
      userServices:[],
      serviceImages:[],
      servicename:[],
    };
  },
  created(){
    
    this.serviceImages.push({"id": 1, "imageUrl":currentAccount},
    {"id": 2, "imageUrl":loans},{"id": 3, "imageUrl":payroll});
    this.servicename.push({"id": 1, "servicename":"Current Account"},
    {"id": 2, "servicename":"Payroll"},
    {"id": 3, "servicename":"Payments"});
  }
    // this.$store.dispatch("calculateUserServices");
    // this.userServices=this.$store.state.loggedUser[0].services;
    // console.log(this.$store.state.loggedUser[0].services,"current user");
    
  };
//---------------------------------------------------------------------
</script>
<style >
td{
  padding-right: 230px;
  width: 10%;
}
.star1 {
  height: 19px;
  width: 25px;
  background-color: unset;
  border: none;
  font-size: 35px;
  color: #0a8b1f;
}
.serviceimg {
  margin-top: 2.5px;
}
.service-Name {
  margin-left: 5px;
  margin-top: 12px;
  margin-bottom: 0px;
}
.stargroup1 {
  margin-top: 4px;
}
.currentservice {

  height: 148px;
  margin-left: 40px;
}
.current-services-card {
  height: 392px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  margin: 0px 24px 0px 24px;
}
.current-services-heading {
  width: 148px;
  height: 25px;
  padding-top: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
}
.current-Services-Flex {
  display: flex;
  flex-wrap: wrap;
}
@media screen and (min-width: 482px) {
  div.current-services-card {
    height: 250px;
  }
}
@media screen and (min-width: 973px) {
  div.currentservice {
    width: 218px;
    height: 140px;
  }
  img.serviceimg {
    margin-left: 84px;
  }
  div.stargroup1{
    margin-left: 20px;
  }
  p.service-Name {
    text-align: center;
  }
  button.star2,
button.star0,
button.star3,
button.star4,
button.star5,
button.star6, button.star1{

width: 35px;
}

  
}
.star2,
.star0,
.star3,
.star4,
.star5,
.star6, .star1 {
  height: 19px;
  width: 25px;
  background-color: unset;
  border: none;
  font-size: 35px;
  color: #0a8b1f;
}
</style>
