let me = document.getElementById("me")

let timeTabel= document.getElementById("timeTabel");
let liveClass= document.getElementById("liveClass")
let notes = document.getElementById("notes")

let attendance = document.getElementById("attendance")
let notification = document.getElementById("notification")
let mark = document.getElementById("mark")
let boxC= document.getElementById("box1");
let boxPy= document.getElementById("box2");
let boxMth=document.getElementById("box3");
let boxLog=document.getElementById("box4");
let boxCom=document.getElementById("box5");

// let B1=document.getElementById("b1")
// let C1=document.getElementById("c1")


liveClass.addEventListener("click",function(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scroll
    });
})

me.addEventListener("click",function(){
    window.location.href="https://www.adarshananda.com/"
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

boxC.addEventListener("click",function(){
    window.location.href='page/C.html'
})
boxPy.addEventListener("click",function(){
    window.location.href='page/python.html'
})
boxMth.addEventListener("click",function(){
        window.location.href='page/math.html'
})
boxLog.addEventListener("click",function(){
    window.location.href='page/logic.html'
})
boxCom.addEventListener("click",function(){
    window.location.href='page/communication.html'
})


// B1.addEventListener("click",function(){
//    window.location.href='page/b1.html'
// })
// C1.addEventListener("click",function(){
//     window.location.href='page/c1.html'
//  })
