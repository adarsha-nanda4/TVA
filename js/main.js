let classState;
// let noClass = document.getElementById("noClass");
// let weekDay=document.getElementById("weekDay")
let schedualTextBox=document.getElementById("schedualTextBox")

// Fetch the class state from API
// fetch('https://shiksha-aa.vercel.app/api/class/')
//     .then(response => response.json())
//     .then(data => {
//         classState = data.class_state;
//         console.log(classState);

//         // Set the visibility of the week day
//         if (classState === "CLASSDAY") {
//             weekDay.style.display = "flex";
//         } else {
//             weekDay.style.display = "";
//         }

//         // Run the class end time logic after fetching classState
//         checkClassEndTime(classState);
//     });



// Update the time and manage class schedule



let B1 = document.getElementById("b1");
let C1 = document.getElementById("c1");

B1.addEventListener("click", function() {
    // Save the selected section (B1) to localStorage or sessionStorage
    localStorage.setItem("selectedSection", "B1");
    window.location.reload();
    // window.location.href = 'page/rotintest.html';
});

C1.addEventListener("click", function() {
    // Save the selected section (C1) to localStorage or sessionStorage
    localStorage.setItem("selectedSection", "C1");
    window.location.reload();
});





// Class end time check logic


// Call updateTime every second to keep the time and class schedule updated
// setInterval(updateTime, 1000);

// animation js code

const circleButton = document.getElementById('circleButton');
const options = document.getElementById('options');

circleButton.addEventListener('click', function() {
    circleButton.classList.toggle('expand');
});


const secData = localStorage.getItem("selectedSection");
console.log(secData);

if(secData===null){
   weekDay.style.display="none"
   schedualTextBox.style.display="none"
}
else{
  weekDay.style.display=""
    schedualTextBox.style.display=""
}

