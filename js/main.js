let classState;
let noClass = document.getElementById("noClass");
let weekDay=document.getElementById("weekDay")
let schedualTextBox=document.getElementById("schedualTextBox")

// Fetch the class state from API
fetch('https://shiksha-aa.vercel.app/api/class/')
    .then(response => response.json())
    .then(data => {
        classState = data.class_state;
        console.log(classState);
localStorage.setItem("classState",classState );
    });



// Update the time and manage class schedule


let A1= document.getElementById("a1")
let A2= document.getElementById("a2")
let B1 = document.getElementById("b1");
let B2 = document.getElementById("b2");
let C1 = document.getElementById("c1");


A1.addEventListener("click", function() {
    localStorage.setItem("selectedSection", "A1");
    window.location.reload();
});

A2.addEventListener("click",function(){
    localStorage.setItem("selectedSection" ,"A2")
    window.location.reload();
})

B1.addEventListener("click", function() {
    localStorage.setItem("selectedSection", "B1");
    window.location.reload();

});


B2.addEventListener("click", function() {
    localStorage.setItem("selectedSection", "B2");
    window.location.reload();

});

C1.addEventListener("click", function() {
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

