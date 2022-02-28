//import { component } from "vue/types/umd"
import loginForm from "./vues/loginForm.vue"
import createAccountForm from "./vues/createAccountForm.vue"
import dashBoard from './vues/dashBoard.vue'
import detailsTab from './vues/detailsTab.vue'
import editProfile from './vues/editProfile.vue'
import VueRouter from 'vue-router';


 const routes =[
    { path : '', component: loginForm},
    { path : '/Login', component: loginForm},

    { path : '/createAccount', component: createAccountForm},
    {path :'/dashboard' , component: dashBoard },
    {path:'/Details', component: detailsTab },
    {path: '/EditProfile', component: editProfile},
    { path: 'Dashboard', redirect :'/dashboard' },
    
];

 const router = new VueRouter({
    routes,
    base:"",
    mode:'history'
  });
  export  default  router;