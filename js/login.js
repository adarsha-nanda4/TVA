const userName = document.getElementById("userName");
const password = document.getElementById("password");
const btn = document.getElementById("loginBtn");


userName.value=""
password.value=""

const emailid= "abcd"
const pass="abcd"


btn.addEventListener("click",function(){
  
    if(userName.value===emailid && password.value===pass){
      btn.innerHTML="please wait..."
   
      setTimeout(function() {
       window.location=("//www.adarshananda.com/.app")
      },1000);
   }
})
