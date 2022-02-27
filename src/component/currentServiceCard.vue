<template>
  <div class="current-services-card">
    <p class="current-services-heading">Current Services</p>
    <div class="current-Services-Flex" id="current-Services-Flex"></div>
  
  </div>
</template>
<script>
import store from "../store/store";
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
    };
  },
  created() {
    // //this.fetchdata();
    // this.userId=this.$store.state.userId;
    // console.log(this.userId);
    // //this.getData();
    this.$store.dispatch("calculateUserServices");
  },
  methods: {
    
    getData: function () {
      
      this.$http
        .get(this.$site_url + "allservices")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (
            let i = 0;
            i < data.length;
            i++ //calculate total services
          ) {
            let j = data[i].service;
            this.totalServices.push(j);
          }

          this.$http
            .get(this.$site_url + "users")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              for (
                let i = 0;
                i < data[this.userId].services.length;
                i++ //Calulating subsribe service by user
              ) {
                let j = data[this.userId].services[i].servicename;
                this.result = this.subscribeServices.push(j);
                let s = data[this.userId].services[i].rating;
                this.ratings.push(s);
              }

              this.availableServices = this.totalServices; //assigning total services to available services
              // console.info(
              //   "availableservice before camparing",
              //   this.availableServices
              // );

              for (let i = 0; i < this.availableServices.length; i++) {
                for (let j = 0; j < this.subscribeServices.length; j++) {
                  if (this.availableServices[i] === this.subscribeServices[j]) {
                    this.availableServices.splice(i, 1);
                  }
                }
              }
              // console.info(
              //   "remaining available services",
              //   this.availableServices
              // );

              for (let i = 0; i < this.subscribeServices.length; i++) {
                var currentFlex = document.getElementById("current-Services-Flex");

                let div1 = document.createElement("div");
                div1.className = "currentservice";

                let img = document.createElement("img");
                let src =
                  "src/assets/images/" + this.subscribeServices[i] + ".svg";
                img.src = src;
                img.className = "serviceimg";
                div1.appendChild(img);

                let p = document.createElement("p");
                p.innerHTML = this.subscribeServices[i];
                p.className = "service-Name";
                div1.appendChild(p);

                let starcontainer = document.createElement("div");
                starcontainer.className = "stargroup1";
                let button;
                for (let k = 0; k < 5; k++) {
                  button = document.createElement("button");
                  button.className = "star" + i;
                  button.innerHTML = "&#9733";
                  starcontainer.appendChild(button);
                  div1.appendChild(starcontainer);
                  if (k >= this.ratings[i]) button.innerHTML = "&#9734";
                }
                currentFlex.appendChild(div1);
                for (let k = 0; k < this.subscribeServices.length; k++) {
                  const allstars = document.querySelectorAll(".star" + k);
                  allstars.forEach((star, z) => {
                    star.onclick = function () {
                      let a = "current_star_level" + k;
                      a = z + 1;
                      allstars.forEach((button, j) => {
                        if (a >= j + 1) {
                          button.innerHTML = "&#9733";
                        } else {
                          button.innerHTML = "&#9734";
                        }
                        console.info("rating of" + k + "is" + a);
                      });
                    };
                  });
                }
              }
            });
        }); //
    },
  },
};
//---------------------------------------------------------------------
</script>
<style>
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
  width: 128px;
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
