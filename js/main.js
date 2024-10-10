let classState;
let date = document.getElementById("date");
let time = document.getElementById("time");
let schedule=document.getElementById("schedulecontainer"); 
let noClass=document.getElementById("noClass");
let weekDay=document.getElementById("weekDay")



let classOne= document.getElementsByClassName("classOne")
let activeTimeOne = document.getElementsByClassName("activeTimeOne");

let classTwo = document.getElementsByClassName("classTwo");
let activeTimeTwo = document.getElementsByClassName("activeTimeTwo");

let classThree = document.getElementsByClassName("classThree");
let activeTimeThree = document.getElementsByClassName("activeTimeThree");

let classFour = document.getElementsByClassName("classFour");
let activeTimeFour = document.getElementsByClassName("activeTimeFour");

let classFive = document.getElementsByClassName("classFive");
let activeTimeFive = document.getElementsByClassName("activeTimeFive");

fetch('https://shiksha-aa.vercel.app/api/class/')
.then(response => response.json())
.then(data => {
  classState=data.class_state
console.log(classState)

if(data.class_state==="CLASSDAY"){
weekDay.style.display="flex"
}
else{
  weekDay.style.display=""
}

})

function updateTime() {

  const mydate = new Date();
  let hours = mydate.getHours();
  const minutes = mydate.getMinutes();
  const seconds = mydate.getSeconds();
  const cdate = mydate.getDate();
  const week = mydate.getDay();
  const month = mydate.getMonth();
  const year = mydate.getFullYear();
  
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[mydate.getDay()];         
  document.getElementById('day-name').textContent = dayName;

  let twelvehours = hours;

  if (hours > 12) {
    twelvehours = hours - 12;
  }

  time.innerHTML = `${twelvehours}:${minutes}:${seconds}`;
  date.innerHTML = `${cdate} / 0${month+1} /${year}`; // set date


// class time 

  // 1st class time set
  if (hours === 13 && minutes===45 ) { for (let i = 0; i < classOne.length; i++) {classOne[i].style.backgroundColor = "rgb(95, 182, 99)"; }
  for (let i = 0; i < activeTimeOne.length; i++) {activeTimeOne[i].style.display = "flex";}} 
  else {for (let i = 0; i < classOne.length; i++) {classOne[i].style.backgroundColor = "";}
  for (let i = 0; i < activeTimeOne.length; i++) {activeTimeOne[i].style.display = "";}}

  // 2nd class time set
  if (hours === 14 && minutes===45 ) {for (let i = 0; i < classTwo.length; i++) {classTwo[i].style.backgroundColor = "rgb(95, 182, 99)";}
  for (let i = 0; i < activeTimeTwo.length; i++) { activeTimeTwo[i].style.display = "flex"; }} 
  else {for (let i = 0; i < classTwo.length; i++) {classTwo[i].style.backgroundColor = "";}
  for (let i = 0; i < activeTimeTwo.length; i++) {activeTimeTwo[i].style.display = "";}}

  // 3rd class time set
  if (hours === 15 && minutes===45) {for (let i = 0; i < classThree.length; i++) {classThree[i].style.backgroundColor = "rgb(95, 182, 99)";}
  for (let i = 0; i < activeTimeThree.length; i++) { activeTimeThree[i].style.display = "flex"; }} 
  else {for (let i = 0; i < classThree.length; i++) {classThree[i].style.backgroundColor = "";}
  for (let i = 0; i < activeTimeThree.length; i++) {activeTimeThree[i].style.display = "";}}

  // 4th class time set
  if (hours === 16 && minutes===45) {for (let i = 0; i < classFour.length; i++) {classFour[i].style.backgroundColor = "rgb(95, 182, 99)";}
  for (let i = 0; i < activeTimeFour.length; i++) { activeTimeFour[i].style.display = "flex"; }} 
  else {for (let i = 0; i < classFour.length; i++) {classFour[i].style.backgroundColor = "";}
  for (let i = 0; i < activeTimeFour.length; i++) {activeTimeFour[i].style.display = "";}}

  // 5th class time set
  if (hours === 17 && minutes===45 ) {for (let i = 0; i < classFive.length; i++) {classFive[i].style.backgroundColor = "rgb(95, 182, 99)";}
  for (let i = 0; i < activeTimeFive.length; i++) { activeTimeFive[i].style.display = "flex"; }} 
  else {for (let i = 0; i < classFive.length; i++) {classFive[i].style.backgroundColor = "";}
  for (let i = 0; i < activeTimeFive.length; i++) {activeTimeFive[i].style.display = "";}}





let clsState= classState;

// class end time set

if(hours>23 || week===0 || clsState==="HOLIDAY"){

   schedule.style.display="none" 
   noClass.style.display="flex"
}
else{
  
   schedule.style.display="" 
   noClass.style.display=""
}








}

setInterval(updateTime, 1000);



