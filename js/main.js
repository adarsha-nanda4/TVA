let classState;
let date = document.getElementById("date");
let time = document.getElementById("time");
let noClass = document.getElementById("noClass");

// Fetch the class state from API
fetch('https://shiksha-aa.vercel.app/api/class/')
    .then(response => response.json())
    .then(data => {
        classState = data.class_state;
        console.log(classState);

        // Set the visibility of the week day
        if (classState === "CLASSDAY") {
            weekDay.style.display = "flex";
        } else {
            weekDay.style.display = "";
        }

        // Run the class end time logic after fetching classState
        checkClassEndTime(classState);
    });

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


    let twelveHours = hours;

    if (hours > 12) {
        twelveHours = hours - 12;
    }

    time.innerHTML = `${twelveHours}:${minutes}:${seconds}`;
    date.innerHTML = `${cDate} / ${month + 1} / ${year}`; // set date




}




let B1 = document.getElementById("b1");
let C1 = document.getElementById("c1");

B1.addEventListener("click", function() {
    // Save the selected section (B1) to localStorage or sessionStorage
    localStorage.setItem("selectedSection", "B1");
    window.location.href = 'page/rotintest.html';
});

C1.addEventListener("click", function() {
    // Save the selected section (C1) to localStorage or sessionStorage
    localStorage.setItem("selectedSection", "C1");
    window.location.href = 'page/rotintest.html';
});





// Class end time check logic


// Call updateTime every second to keep the time and class schedule updated
setInterval(updateTime, 1000);

// animation js code

const circleButton = document.getElementById('circleButton');
const options = document.getElementById('options');

circleButton.addEventListener('click', function() {
    circleButton.classList.toggle('expand');
});
