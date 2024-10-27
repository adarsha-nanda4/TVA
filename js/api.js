

const mydate = new Date();
const week = mydate.getDay(); 
let ClassState;

ClassState=localStorage.getItem('classState');
console.log(ClassState);


        if (ClassState === "HOLIDAY" || week===0 ) {
            weekDay.style.display = "none";
            noClass.style.display="flex"
        } else {
            weekDay.style.display = "";
        }


const dayMapping = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
};

const numberWords = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

const dayName = dayMapping[week];
console.log(dayName);

const sec = localStorage.getItem("selectedSection");
let secName = document.getElementById("secName");
secName.innerHTML = sec;

if (sec) {
    const apiUrl = `https://shiksha-aa.vercel.app/api/routine/${sec}/${dayName}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const routineData = data['Routine/'] || []; 
            console.log(routineData);

            
            routineData.forEach((period) => {
                const { shift, sub, teacher } = period;

                if (shift && sub && teacher) {
                    const index = shift - 1;

                    if (index >= 0 && index < numberWords.length) {
                        const classElementId = `classname${numberWords[index]}`;
                        const teacherElementId = `techer${numberWords[index]}`;
                        const classElement = document.getElementById(classElementId);
                        const teacherElement = document.getElementById(teacherElementId);

                        if (classElement && teacherElement) {
                            classElement.innerHTML = sub;
                            teacherElement.innerHTML = teacher;
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
} 





