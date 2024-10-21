// Get the current day of the week

const mydate = new Date();
const week = mydate.getDay(); // 0 for Sunday, 1 for Monday, etc.

// Create a mapping of days to API endpoints
const dayMapping = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
};

// Get the correct day name from the mapping
const dayName = dayMapping[week];
console.log(dayName);

// Retrieve the selected section from localStorage
const sec = localStorage.getItem("selectedSection");
let secName=document.getElementById("secName")
secName.innerHTML=(sec)


if (sec) {
    
    // Build the API URL dynamically based on the current day and section
    const apiUrl = `https://shiksha-aa.vercel.app/api/routine/${sec}/${dayName}`;

    // Fetch the routine for the specific day and section
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const routineData = data['Routine/'];

            console.log(routineData) 
            
            document.getElementById("classnameOne").innerHTML = routineData[0].sub;
            document.getElementById("techerOne").innerHTML = routineData[0].teacher;
    
            document.getElementById("classnameTwo").innerHTML = routineData[1].sub;
            document.getElementById("techerTwo").innerHTML = routineData[1].teacher;
    
            document.getElementById("classnameThree").innerHTML = routineData[2].sub;
            document.getElementById("techerThree").innerHTML = routineData[2].teacher;
    
            document.getElementById("classnameFour").innerHTML = routineData[3].sub;
            document.getElementById("techerFour").innerHTML = routineData[3].teacher;
    
            document.getElementById("classnameFive").innerHTML = routineData[4].sub;
            document.getElementById("techerFive").innerHTML = routineData[4].teacher;

            document.getElementById("classnameSix").innerHTML = routineData[5].sub;
            document.getElementById("techerSix").innerHTML = routineData[5].teacher;

            document.getElementById("classnameSeven").innerHTML = routineData[6].sub;
            document.getElementById("techerSeven").innerHTML = routineData[6].teacher;

            document.getElementById("classnameEight").innerHTML = routineData[7].sub;
            document.getElementById("techerEight").innerHTML = routineData[7].teacher;

            document.getElementById("classnameNine").innerHTML = routineData[8].sub;
            document.getElementById("techerNine").innerHTML = routineData[8].teacher;

            document.getElementById("classnameTen").innerHTML = routineData[9].sub;
            document.getElementById("techerTen").innerHTML = routineData[9].teacher;
        })
        .catch(error => console.error('Error fetching data:', error));
} else {
    console.error('No section selected');
}
