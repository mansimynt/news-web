<template>
<div>
<page-heading></page-heading>
<h1 class="heading-Edit-Profile">Edit Profile</h1>
<div class="edit-Profile-Wrapper">

    <div class="browse-image-wrapper">
        <div class="imgae-Area"><img class="bg-Image" src="src\assets\images\bg-image-icon.jpg"></div>
        <input  type="file" id="fileDialoge">
        <button class="browse-Image">Browse Image</button> 
    </div>
    <p class="formLabel">Company Name</p>
    <input
          type="text"
          class="input-Box page-Text"
        />
    <p class="formLabel">Email Address</p>
    <input type="text" class="input-Box page-Text"/>
    <p class="formLabel">Old Password</p>
     <input type="password" class="input-Box page-Text"/>
    <p class="formLabel">New Password</p>
     <input type="password" class="input-Box page-Text"/>
    <p class="formLabel">Confirm Password</p>
     <input type="password" class="input-Box page-Text"/>
       <button class="loginBtn" @click="submit()">Update</button>
       <page-footer></page-footer>
     </div>
</div>   
</template>

<script>
import PageFooter from '../component/pageFooter.vue'
import pageHeading from '../component/pageHeading.vue'
export default {
  components: { pageHeading, PageFooter },
    data(){
        return{
                 click: document.getElementsByClassName('browse-Image'),
                 dialog :document.getElementById('fileDialoge'),
                 
        }
    }
  ,

}
</script>
 
 <style scoped>
 .heading-Edit-Profile{
     margin: 32px 0px 24px 24px;
 }
 .bg-Image{
     margin: 70px;
 }
 .loginBtn {
  width: 361px;
  height: 58px;
  color: #ffffff;
  font-size: 25px;
  background: #d90429;
  margin-left: 24px;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 24px;
}
 .browse-Image{
     width: 180px;
     height: 25px;
     border: 1px solid #E0E0E0;
  box-sizing: border-box;
   border-radius: 12px;
   text-align: center;
 }
 .input-Box {
  width: 320px;
  height: 50px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
  margin: 0px 0px 0px 24px;
  display: block;
}
 .imgae-Area{
     width: 180px;
     margin: 10px;
     height: 180px;
     background: #F2F2F2;
    border: 1px dashed #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    align-content: center;
   
 }
 p{
     margin: 0px;
 }
 .edit-Profile-Wrapper{
     height: 885px;
     margin-left: 24px;
     margin-right: 24px;
     background: #FFFFFF;
     box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2);
     border-radius: 12px;
     padding-top: 24px;
 }
 .browse-image-wrapper{
     width: 200px;
     height: 235px;
     border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 24px 0px 0px 24px;
 }
 .formLabel{
     font-size: 14px;
     font-weight: bold;
     margin :24px 0px 8px 24px
 }
 
 </style>