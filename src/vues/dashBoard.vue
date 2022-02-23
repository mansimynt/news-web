<template>
<div>
    <page-heading></page-heading>
    <h1 class="dashboard">Dashboard</h1>
    <navigation-bar> </navigation-bar>
    <summary-card  ></summary-card>
    <div class="bank-Service-Message">
        <p class="services-Word">Services</p>
        <p class="services-For-You-Message">Micro bank services for you</p>
    </div>
    <current-Service-Card></current-Service-Card>
    <available-Services-Card> </available-Services-Card>
    <footer-bar></footer-bar>
    
</div>    
</template>
<script>
import transactionTable from '../component/transactionTable.vue'
import availableServicesCard from '../component/availableServicesCard.vue'
import currentServiceCard from '../component/currentServiceCard.vue'
import footerBar from '../component/pageFooter.vue'
import pageHeading from '../component/pageHeading.vue'
import NavigationBar from '../component/navigationBar.vue'
import SummaryCard from '../component/summaryCard.vue'
import {eventBus} from '../main'
import ApiCalls from './apiCalls.vue'


export default {
    props:["isActive","display","name"],
  components: { pageHeading, NavigationBar, SummaryCard, currentServiceCard, availableServicesCard, footerBar,transactionTable, ApiCalls },
  methods:{

      hello(){
          console.log('this is hello method from parent dashboard componnet');
      }
  }
    
}
</script>
<style scoped>
.dashboard{
	font-family: Open Sans;
	font-weight: bold;
	font-size: 24px;
	line-height: 33px;
    margin-top: 32px;
    margin-left: 24px;
    margin-bottom: 24px;
}
.bank-Service-Message{
	display: flex;
	width: 248px;
	height: 19px;
	font-size: 14px;
	line-height: 19px;
    margin: 32px 24px 12px 24px;

}
.services-Word{
	
	font-weight: bold;
	margin-right: 8px;
	margin-top: 0px;
    display: inline;
}
.services-For-You-Message{
	font-style: italic;
}
p{
    display: inline;
    margin: 0px;
}
</style>