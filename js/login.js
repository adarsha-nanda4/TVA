const userName = document.getElementById("userName");
const password = document.getElementById("password");
const btn = document.getElementById("loginBtn");
const warnig= document.getElementById("warnig");


userName.value=""
password.value=""

const emailid= "abcd"
const pass="abcd"


btn.addEventListener("click",function(){
  
    if(userName.value===emailid && password.value===pass){
      btn.innerHTML="please wait..."
   
      setTimeout(function() {
       window.location=("https://www.adarshananda.com/")
      },1000);
   }

   else if(userName.value!==emailid || password.value!==pass){

      if(userName.value==="" &&  password.value===""){
         warnig.style.display="flex"
         warnig.innerHTML="Pls Enter your id pass";
     }
 
     password.value="";
     userName.value="";
    warnig.style.display="flex"
     setTimeout(function(){
         warnig.style.display="none"
     },3000)
 } 
 
})
