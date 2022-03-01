<template>
  <div class="available-services-card ">
        <p class="available-services-heading">Available Services</p>
        <div class="available-Sevice-Flexbox">
          <table class="currentservice" >
       <tr >
        <th v-for="img in serviceImages" :key="img.id"><img  :src="img.imageUrl" ></th></tr>
       <tr><td v-for=" i in servicename"  :key="i"> {{i.servicename}}</td>
       </tr>

      </table>
        </div>
  </div>        

    
</template>
<script>
import wallet from "../assets/images/Wallet.svg"
import taxPayment from "../assets/images/Taxpayment.svg"
import investments from "../assets/images/Investments.svg"
import loans from "../assets/images/Loans.svg"
export default {
  data() {
    return {
      
    serviceImages:[],
    servicename:[]
    };
  },
  created() {
    this.serviceImages.push({"id": 1, "imageUrl":wallet},
    {"id": 2, "imageUrl":taxPayment},
    {"id": 3, "imageUrl":investments},
    {"id":4,"imgUrl":loans});
    
    this.servicename.push({"id": 1, "servicename":"Wallet"},
    {"id": 2, "servicename":"TaxPayment"},
    {"id": 3, "servicename":"Investments"},
    {"id":4,"servicename":"Loans"});
  },
}
</script>
<style >
th{
  padding-right: 200px;
}
.available-services-card{
	height: 311px;
	background: #FFFFFF;
	margin: 24px 24px 0px 24px;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
border-radius: 12px;
padding-bottom: 10px;
}
.availableservice{
	width: 130px;
	height: 95px;
	margin-top: 24px;
	margin-left: 24px;
}
.available-services-heading{
	margin-left: 24px;
	padding-top: 24px;
	font-size: 18px;
	font-weight: bold;
	height: 25px;
	
}
.available-Sevice-Flexbox
{
	display: flex;
	flex-wrap: wrap;
}
@media screen and ( min-width: 482px){

  div.available-services-card {
  height: 288px;

}}
@media screen and ( min-width: 644px){
	div.available-services-card {
    height: 192px;

} 
}
@media screen and (min-width: 973px) {
  div.availableservice {
    width: 218px;
    height: 123px;
  }
  img.serviceimg{
	margin-left: 84px;
}
p.servicename{
  margin-bottom: 25px;
	text-align: center;
}

}
</style>