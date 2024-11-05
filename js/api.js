const mydate = new Date();
const week = mydate.getDay(); 

let ClassState;

ClassState = localStorage.getItem('classState');
console.log(ClassState);

if (ClassState === "HOLIDAY" || week === 0) {
    weekDay.style.display = "none";
    noClass.style.display = "flex";
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
    const localStorageKey = `routineData_${sec}_${dayName}`;
    const storedRoutineData = localStorage.getItem(localStorageKey);

    if (storedRoutineData) {
        // Use the stored data if available
        displayRoutine(JSON.parse(storedRoutineData));
    } else {
        // Fetch data from the API if not available in localStorage
        const apiUrl = `https://shiksha-aa.vercel.app/api/routine/${sec}/${dayName}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const routineData = data['Routine/'] || [];

                console.log(routineData)
                
                // Store data in localStorage
                localStorage.setItem(localStorageKey, JSON.stringify(routineData));
                
                // Display routine data
                displayRoutine(routineData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
}

// Function to display the routine data
function displayRoutine(routineData) {
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
}


let circleRefresh = document.getElementById("circleRefresh");

circleRefresh.addEventListener("click", function () {
    // Save the value of selectedSection
    const selectedSectionValue = localStorage.getItem("selectedSection");

    // Clear all local storage data
    localStorage.clear();


    // Restore the selectedSection key-value pair
    if (selectedSectionValue !== null) {
        localStorage.setItem("selectedSection", selectedSectionValue);
        window.location.reload();
    }
});
