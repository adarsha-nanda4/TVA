
const userName = document.getElementById("userName");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const SignupBtn=document.getElementById("SignupBtn");

const warnig= document.getElementById("warnig");
const gotosignup = document.getElementById("gotosignup");
const gotologin = document.getElementById("gotologin");

const loginform=document.getElementById("loginform");
const signUpForm=document.getElementById("signupform")


const msg=document.getElementById("msg");

let getdata = localStorage.getItem("object")
let getData=JSON.parse(getdata)

console.log(getData)

userName.value=""
password.value=""

const regNo = getData.REGNO.regNo; 
const pass = getData.PASSWORD.password;

console.log(regNo);
console.log(pass);


loginBtn.addEventListener("click",function(){
  
    if(userName.value===regNo && password.value===pass){
        loginBtn.innerHTML="please wait..."
   
      setTimeout(function() {

      window.location=("index.html")

      },1000);
   }

   else if(userName.value!==regNo || password.value!==pass){

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


gotosignup.addEventListener("click",function(){
    loginform.style.display="none"
    console.log("singup");
    signUpForm.style.display="flex"
})



gotologin.addEventListener("click",function(){
    signUpForm.style.display="none"
    console.log("login");
    loginform.style.display="flex"
})


signUpForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get field values
    let namee = document.getElementById('NameSing').value.trim();
    let regNo = document.getElementById('RegNoSing').value.trim();
    let email = document.getElementById('MailSing').value.trim();
    let password = document.getElementById('PasswordSing').value.trim();

    // Validate fields
    if (!namee || !regNo || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

  
    console.log('Form submitted');

    let singupData={
        NAME:{namee},
        REGNO:{regNo},
        EMAIL:{email},
        PASSWORD:{password}
    }
    localStorage.setItem("object" ,JSON.stringify(singupData));
    msg.innerHTML="creted Ac sucssefuly";


  console.log(namee)
    setTimeout(() => {
        window.location.reload();
      }, 2000);

  
  });