<template>
  <div class="wrap">
    <api-calls></api-calls>
      <form-Design></form-Design>
    <div class="form-Container">
      <div class="create-Account-Heading">Create an Account</div>
      <div class="form">
        <P class="form-Label">Full Name</P>
        <input
          type="text"
          class="input-Box"
          id="fullName"
          v-model="username"
        />

        <P class="form-Label">Date of Incorporation</P>
        <input
          type="date"
          class="input-Box"
          id="dateOfIncorporation"
          v-model="dateOfIncorporation"
        />
        <P class="form-Label">Email</P>
        <input type="email" class="input-Box" id="email" v-model="email" />
        <P class="form-Label">Password</P>
        <input
          type="text"
          class="input-Box"
          id="pass1"
          v-model="password"
        />
        <p id="password-Validation-Msg" style="color: red" v-if="this.invalidPassword">
          {{ this.validationMsg }}
        </p>
        <P class="form-Label">Confirm Password</P>
        <input
          type="password"
          class="input-Box"
          id="pass2"
          v-model="confirmPassword"
        />
        <p id="not-Match" style="color: red" v-if="this.isNotEqual">
          {{ this.notEqualMessage }}
        </p>
        <button class="submitBtn" id="button" type="submit" @click="submit()">
          Create an Account
        </button>
      </div>
      <div class="aleady-Have-Account-Heading">
        Aleady have an account?
         <router-link to='/Login' class="login-Heading"> Login</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import {eventBus} from '../main'
import axious from "axios";
import formDesign from '../component/formDesign.vue';
import ApiCalls from './apiCalls.vue';


export default {
  components: { formDesign, ApiCalls },
  data() {
    return {
      componets: {  },
      validationMsg: "",
      notEqualMessage: "",
      invalidPassword: true,
      isNotEqual: false,
      username: "",
      dateOfIncorporation: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {

    submitdemo(){
      eventBus.$emit('fetch_data');
    },




    validate() {
      console.log('validate');
      if (this.password === "") {
        this.invalidPassword = true;
        this.validationMsg = "Please Enter Passwoard!!";
      } else if (this.password.length < 8) {
        
        this.invalidPassword = true;
        this.validationMsg = "password minimum contain 8 charachter!!";
      } else if (this.password.search(/[0-9]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg = "password must have at least one numeric value";
      } else if (this.password.search(/[a-z]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg ="password must have at least one lowerCase character!!";
      } else if (this.password.search(/[A-Z]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg ="password must have at least one uppercase character!!";
      } else if (this.password.search(/[#?!@$%^&*-]/) == -1) {
        this.invalidPassword = true;
        this.validationMsg = "password must have at least one symbol!!";
       
      } else {
             this.invalidPassword = false;
        if (this.password != this.confirmPassword) {
          this.isNotEqual = true;
          this.notEqualMessage = "Password Not Match!!";
        } else {
          return true;
        }
      }
    },
    submit() {
      let result = this.validate();
      if (result) {
        let data = {
          FullName: this.username,
          dateOfIncorporation: this.dateOfIncorporation,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        axious
          .post(this.$site_url + "users"  , data)
          .then((Response) => console.log(Response))
          .catch((error) => console.log(error));
        alert("Account Created Successfully...");
      }
    },
  },
};
</script>

<style scoped >
.wrap {
  display: flex;
  flex-direction: row;
}
.form-Container {
  width: 50%;
  background: #ffffff;
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 13px 19px 2px rgba(0, 0, 0, 0.14),
    0px 40px 40px 40px rgba(0, 0, 0, 0.12);
}
.login-Heading{
  color: #d90429

}

.create-Account-Heading {
 
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 44px;
  color: #1a1a1a;
  margin-left: 330px;
  margin-top: 189px;
}
.form-Label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
  line-height: 19px;
  margin-left: 330px;
  margin-bottom: 10px;
}

.input-Box {
  width: 360px;
  height: 50px;
  margin-left: 330px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
}
.submitBtn {
  width: 360px;
  height: 60px;
  margin-left: 330px;
  margin-top: 20px;
  margin-bottom: 0px;
  background: #d90429;
  box-shadow: 0px 6px 28px 5px rgba(254, 45, 23, 0.3);
  border-radius: 12px;
  color: white;
  font-size: 23px;
}
#not-Match {
  margin-left: 330px;
  
}
#password-Validation-Msg {
  margin-left: 330px;
 
}
.aleady-Have-Account-Heading{
  
  display: flex;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 19px;
  color: #828282;
  margin-left: 340px;
  margin-top: 32px;
}
</style>