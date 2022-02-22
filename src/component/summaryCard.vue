<template>
    <div class="summary-Card ">
        <h1 class=" summary-Card-Heading">Summary</h1>
        <div class="summary-Card-Flex">
            <div class="summary-Info-Block">
                <h1 class="summary-Card-Label">Account Number</h1>
                <p class="summary-Card-Number">67238744</p>
            </div>
            <div class="summary-Info-Block">
                <h1 class="summary-Card-Label">Income</h1>
                <p class="summary-Card-Number">$20,00,000</p>
            </div>
            <div class="summary-Info-Block">
                <h1 class="summary-Card-Label">Spends</h1>
                <p class="summary-Card-Number">$11,00,000</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
.summary-Card{
	margin: 12px 24px 0px 24px;
	height: 269px;
	background: #FFF0F3;
	border: 1px solid rgba(217, 4, 41, 0.2);
	box-sizing: border-box;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
	border-radius: 12px;
	display: block;
}
.summary-Card-Heading{
	margin-left: 24px;
	margin-top: 24px;
	font-weight: bold;
	margin-bottom: 24px;
font-size: 18px;
line-height: 25px;
}
.summary-Card-Flex{
	display: flex;
	flex-wrap: wrap;
}
.summary-Info-Block{
	width: 288px;
	height: 48px;
	margin-left: 24px;
	margin-bottom: 14px;
}
.summary-Card-Label{
	font-size: 12px;
	line-height: 12px;
	letter-spacing: 0.15px;
	color: rgba(0, 0, 0, 0.38);
	margin-top: 0px;
	margin-left: 0px;
	margin-bottom: 9.5px;

}
.summary-Card-Number{ font-weight: bold;
	margin-top: 0px;
	margin-bottom: 0px;
}
@media screen and ( min-width: 644px){
	div.summary-Card{
		height: 258px;
	}
}
@media screen and  (min-width: 711px){

	div.summary-Card{
		height: 210px;
	}
}
@media screen and ( min-width: 954px){
	div.summary-Card{
		height: 187px;
	}
} 
@media(min-width: 1024px)
{ div.summary-Card{
		height: 145px;
}
}
</style>