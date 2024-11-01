let date = document.getElementById("date");
let time = document.getElementById("time");

let schedule = document.getElementById("schedulecontainer");
// let noClass = document.getElementById("noClass");
// let weekDay = document.getElementById("weekDay");

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

let classSix = document.getElementsByClassName("classSix");
let activeTimeSix = document.getElementsByClassName("activeTimeSix");

let classSeven = document.getElementsByClassName("classSeven");
let activeTimeSeven = document.getElementsByClassName("activeTimeSeven");

let classEight = document.getElementsByClassName("classEight");
let activeTimeEight = document.getElementsByClassName("activeTimeEight");

let classNine = document.getElementsByClassName("classNine");
let activeTimeNine = document.getElementsByClassName("activeTimeNine");

let classTen = document.getElementsByClassName("classTen");
let activeTimeTen = document.getElementsByClassName("activeTimeTen");

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


    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][myDate.getDay()];
    document.getElementById('day-name').textContent = dayName;



    let twelveHours = hours;

    if (hours > 12) {
        twelveHours = hours - 12;
    }

    time.innerHTML = `${twelveHours}:${minutes}:${seconds}`;
    date.innerHTML = `${cDate} / ${month + 1} / ${year}`; // set date


    // Reset all classes initially
    resetClasses();

    // Check class times and update styles accordingly
    if (hours === 8) { setActiveClass(classOne, activeTimeOne); }
    else if (hours === 9) { setActiveClass(classTwo, activeTimeTwo); }
    else if (hours === 10) { setActiveClass(classThree, activeTimeThree); }
    else if (hours === 23) { setActiveClass(classFour, activeTimeFour); }
    else if (hours === 12) { setActiveClass(classFive, activeTimeFive); }
    else if (hours === 13) { setActiveClass(classSix, activeTimeSix); }
    else if (hours === 14) { setActiveClass(classSeven, activeTimeSeven); }
    else if (hours === 15) { setActiveClass(classEight, activeTimeEight); }
    else if (hours === 16) { setActiveClass(classNine, activeTimeNine); }
    else if (hours === 17) { setActiveClass(classTen, activeTimeTen); }
}

function resetClasses() {
    resetClass(classOne, activeTimeOne);
    resetClass(classTwo, activeTimeTwo);
    resetClass(classThree, activeTimeThree);
    resetClass(classFour, activeTimeFour);
    resetClass(classFive, activeTimeFive);
    resetClass(classSix, activeTimeSix);
    resetClass(classSeven, activeTimeSeven);
    resetClass(classEight, activeTimeEight);
    resetClass(classNine, activeTimeNine);
    resetClass(classTen, activeTimeTen);
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

// Call updateTime every second to keep the time and class schedule updated
setInterval(updateTime, 1000);
