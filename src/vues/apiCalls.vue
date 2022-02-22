<script>
import axious from "axios";
import { eventBus } from "../main";
export default {
    
  mounted() {

    eventBus.$on("getapidata",()=>{

      this.$http.get(this.$site_url+"allservices").then(response=>{
			return response.json();
			})
			.then(data=> data);
       this.$emit('allServices',data);


    });



    eventBus.$on("login", (enteredEmail, enteredPassword) => {
    
      axious
        .get(this.$site_url + "users")
        .then((res) => {
          const data = res.data;
          const allusers = [];
          for (let key in data) {
            const user = data[key];
           
            allusers.push(user);
           
            if (
              allusers[key].email === enteredEmail &&
              allusers[key].password === enteredPassword
            ) { 
              
              this.$router.push("/dashboard");
            }
            else{
            
              let result=this.invalidPassword=true;
            this.$emit('invalid_Error',result);
            }
            
          }
        })
        .catch((error) => console.log(error));
    });


  }

  }
</script>