let timeTabel= document.getElementById("timeTabel");
let liveClass= document.getElementById("liveClass")
let notes = document.getElementById("notes")

let attendance = document.getElementById("attendance")
let notification = document.getElementById("notification")
let mark = document.getElementById("mark")


liveClass.addEventListener("click",function(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scroll
    });
})

timeTabel.addEventListener("click",function(){
      window.location.href = 'page/underwork.html'; // Replace with the URL of the target page

})
notes.addEventListener("click",function(){
    window.location.href = 'page/underwork.html'; // Replace with the URL of the target page

})
attendance.addEventListener("click",function(){
    window.location.href = 'page/underwork.html'; // Replace with the URL of the target page

})
notification.addEventListener("click",function(){
    window.location.href = 'page/underwork.html'; // Replace with the URL of the target page

})
mark.addEventListener("click",function(){
    window.location.href = 'page/underwork.html'; // Replace with the URL of the target page

})


let loginIcon = document.getElementById("loginIcon");


loginIcon.addEventListener("click",function(){
    window.location.href = 'page/login.html'; // Replace with the URL of the target page

})
