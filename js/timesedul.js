
let date = document.getElementById("date");
let time = document.getElementById("time");
let schedule = document.getElementById("schedulecontainer");
let noClass = document.getElementById("noClass");
let weekDay = document.getElementById("weekDay");

let classOne = document.getElementsByClassName("classOne");
let activeTimeOne = document.getElementsByClassName("activeTimeOne");

let classTwo = document.getElementsByClassName("classTwo");
let activeTimeTwo = document.getElementsByClassName("activeTimeTwo");

let classThree = document.getElementsByClassName("classThree");
let activeTimeThree = document.getElementsByClassName("activeTimeThree");

let classFour = document.getElementsByClassName("classFour");
let activeTimeFour = document.getElementsByClassName("activeTimeFour");

let classFive = document.getElementsByClassName("classFive");
let activeTimeFive = document.getElementsByClassName("activeTimeFive");



// Update the time and manage class schedule
function updateTime() {
    const myDate = new Date();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();
    const seconds = myDate.getSeconds();
    const cDate = myDate.getDate();
    const week = myDate.getDay();
    const month = myDate.getMonth();
    const year = myDate.getFullYear();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[myDate.getDay()];
    document.getElementById('day-name').textContent = dayName;


    // Reset all classes initially
    resetClasses();

    // Check class times and update styles accordingly
    if      (hours === 13 && minutes >= 45) {setActiveClass(classOne, activeTimeOne);} 
    else if (hours === 14 && minutes < 45)  {setActiveClass(classOne, activeTimeOne);}
    else if (hours === 14 && minutes >= 45) {setActiveClass(classTwo, activeTimeTwo);} 
    else if (hours === 15 && minutes < 45) {setActiveClass(classTwo, activeTimeTwo);} 
    else if (hours === 15 && minutes >= 45) {setActiveClass(classThree, activeTimeThree);} 
    else if (hours === 16 && minutes < 45) {setActiveClass(classThree, activeTimeThree);} 
    else if (hours === 16 && minutes >= 45) {setActiveClass(classFour, activeTimeFour);}
    else if (hours === 17 && minutes < 45) {setActiveClass(classFour, activeTimeFour);}
    else if (hours === 17 && minutes >= 45) {setActiveClass(classFive, activeTimeFive);}
    else if (hours === 18 && minutes < 45) { setActiveClass(classFive, activeTimeFive);
    }
}

function resetClasses() {
    resetClass(classOne, activeTimeOne);
    resetClass(classTwo, activeTimeTwo);
    resetClass(classThree, activeTimeThree);
    resetClass(classFour, activeTimeFour);
    resetClass(classFive, activeTimeFive);
}

function resetClass(classElements, activeTimeElements) {
    for (let i = 0; i < classElements.length; i++) {
        classElements[i].style.backgroundColor = "";
    }
    for (let i = 0; i < activeTimeElements.length; i++) {
        activeTimeElements[i].style.display = "";
    }
}

function setActiveClass(classElements, activeTimeElements) {
    for (let i = 0; i < classElements.length; i++) {
        classElements[i].style.backgroundColor = "rgb(95, 182, 99)";
    }
    for (let i = 0; i < activeTimeElements.length; i++) {
        activeTimeElements[i].style.display = "flex";
    }
}

// Class end time check logic
function checkClassEndTime(clsState) {
    const myDate = new Date();
    const hours = myDate.getHours();
    const week = myDate.getDay();
}

// Call updateTime every second to keep the time and class schedule updated
setInterval(updateTime, 1000);
