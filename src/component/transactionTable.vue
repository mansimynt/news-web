<template>
    <div class="table-Container">
        <table>
            <tr class="table-Headings">
                <th>Transaction ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <tr v-for="i in this.data" :key="i.Date">
                <td>{{ i.Transactionid}}</td>
                <td>{{ i.Date}}</td>
                <td>{{ i.Amount}}</td>
                <td :class="[i.status==='Approved' ? 'Approved':'rejected']" >{{ i.status}}</td>
                   <td><img src="src\assets\images\viewIcon.svg"/>
                <img class="downloadIcon" src="src\assets\images\downloadIcon.svg"/></td>
              
            </tr>
        </table>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            data:[
                {'Transactionid':"2011002039111",
                'Date':"22-09-2021",
                "Amount":"1,780",
                "status":"Approved"
                },
                 {'Transactionid':"2011002039112",
                'Date':"19-09-2021",
                "Amount":"1,890",
                "status":"Approved"
                },
                 {'Transactionid':"2011002039113",
                'Date':"20-08-2021",
                "Amount":"5,550",
                "status":"Rejected"
                },
                 {'Transactionid':"2011002039114",
                'Date':"12-07-2021",
                "Amount":"2,590",
                "status":"Approved"
                },
                 {'Transactionid':"2011002039113",
                'Date':"08-07-2021",
                "Amount":"2,800",
                "status":"Rejected"
                }
            ]
        }
    }
}
</script>
<style scoped>
.Approved{
    color: #008000;
}
.rejected{
    color: #FF0000;
}

img{
    display: inline;
}
.table-Container{
  margin: 12px 24px 350px 24px;
height: 300px;
background: #FFFFFF;
box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
border-radius: 12px;
padding: 28px;
display: flex;


}
.downloadIcon{
    padding-left: 20px;
    padding-right: 170px;
}
th{
    font-weight: bold;
font-size: 17px;
line-height: 157%;
color: #828282;
padding-right: 200px;
}
tr{ width: 100%;
    height: 46px;
    background: rgba(244, 245, 253, 0.5);
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px 4px 0px 0px;
   

}

.table-Headings{
    background: #FFFFFF;
   
}

</style>