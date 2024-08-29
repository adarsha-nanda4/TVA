const url = 'https://shiksha-aa.vercel.app/api/class/'; // Replace with your API endpoint

let btn = document.getElementById("btn");
let inputdata = document.getElementsByName("class_state");

btn.addEventListener("click", function() {
  let state = null;
  
  // Loop through inputdata to find the checked radio button
  for (let i = 0; i < inputdata.length; i++) {
    if (inputdata[i].checked) {
      state = inputdata[i].value;
      break;
    }
  }

  if (state) {
    const data = {
      class_state: state
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    alert("Please select a class state before submitting.");
  }
});
