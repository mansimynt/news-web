<template>
    <nav class="navigation-Bar ">
		<ul>
			<router-link to="/dashboard" tag="li"  active-class="active-Tab" ><a>Summary</a></router-link>
			<router-link to="/Details" tag="li" active-class="active-Tab" ><a >Details</a></router-link>
				
		</ul>

    </nav>
</template>
<script>
export default {

    
}
</script>
<style scoped>

ul{
	list-style: none;
	height: 60px;
	margin-top: 0px;
	padding-left: 0px;
}
li a{
	text-align: center;
	padding: 24px;
	text-decoration: none;
	color: #1A1A1A;

}
li{
	height: 54px;
	padding-top: 6px;
	border-right:1px solid #F2F2F2; 
	font-size: 16px;
	line-height: 175%;
	float: left;
	
}
.navigation-Bar{
	font-family: Open sans;
	height: 60px;
	background: #FFFFFF;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
	border-radius: 12px;
	display: flex;
	margin: 0px 24px 0px 24px;
	
}
.active-Tab{
	font-weight: bold;  
	font-size: 16px;
	color: #1A1A1A;
	border-top: 3px solid #e8544b;
}
.navigation1{
	
	width: 125px;
	height: 60px;
	border-right:1px solid #F2F2F2; 
	 border-top: 3px solid #e8544b;
     border-top-left-radius: 9px;
	
}
.summaryTab{
	
	
	margin-top: 0px;
	padding-top: 16px;
	padding-left: 24px;
	padding-right: 24px;
}


.navigation2{
	padding-right: 25px;
	 border-right:1px solid #F2F2F2; ;
}
.detailsTab{ 
	font-weight: normal;
	font-size: 16px;
	line-height: 175%;
	margin-top: 16px;
	margin-left: 24px;
}

</style>