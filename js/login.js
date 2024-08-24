const userName = document.getElementById("userName");
const password = document.getElementById("password");
const btn = document.getElementById("loginBtn");


userName.value=""
password.value=""

const emailid= "smita"
const pass="smita"


btn.addEventListener("click",function(){
  
    if(userName.value===emailid && password.value===pass){
      btn.innerHTML="please wait..."
   
      setTimeout(function() {
       window.location=("https://siksha.vercel.app/page/just.html")
      },1000);
   }
})
