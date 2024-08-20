let classnameOne = document.getElementById("classnameOne");
let techerOne = document.getElementById("techerOne");

let classnameTwo = document.getElementById("classnameTwo");
let techerTwo = document.getElementById("techerTwo");

let classnameThree = document.getElementById("classnameThree");
let techerThree = document.getElementById("techerThree");

let classnameFour = document.getElementById("classnameFour");
let techerFour = document.getElementById("techerFour");

let classnameFive = document.getElementById("classnameFive");
let techerFive = document.getElementById("techerFive");

const mydate = new Date();
const week = mydate.getDay();

fetch('https://shiksha-aa.vercel.app/api/routine/')
.then(response => response.json())
.then(data => {
        let Routine;

        if (week === 1) {
            Routine = data["Routine :"].filter(item => item.weekday === 'MONDAY');
        }
        else if (week === 2) {
            Routine = data["Routine :"].filter(item => item.weekday === 'TUESDAY');
        }
        else if (week === 3) {
            Routine = data["Routine :"].filter(item => item.weekday === 'WEDNESDAY');
        }
        else if (week === 4) {
            Routine = data["Routine :"].filter(item => item.weekday === 'THURSDAY');
        }
        else if (week === 5) {
            Routine = data["Routine :"].filter(item => item.weekday === 'FRIDAY');
            console.log(Routine);
        }
        
        else if (week === 6) {
            Routine = data["Routine :"].filter(item => item.weekday === 'SATURDAY');
        }

        if (Routine && Routine.length >= 5) {
            
            classnameOne.innerHTML = Routine[0].sub;
            techerOne.innerHTML = Routine[0].teacher;

            classnameTwo.innerHTML = Routine[1].sub;
            techerTwo.innerHTML = Routine[1].teacher;

            classnameThree.innerHTML = Routine[2].sub;
            techerThree.innerHTML = Routine[2].teacher;

            classnameFour.innerHTML = Routine[3].sub;
            techerFour.innerHTML = Routine[3].teacher;

            classnameFive.innerHTML = Routine[4].sub;
            techerFive.innerHTML = Routine[4].teacher;

        } else {
        console.error('Insufficient data received or incorrect weekday filtering.');
        }
    })
    .catch(error => console.error('Error fetching data:', error)); 