const url = 'https://shiksha-aa.vercel.app/api/class/'; // Replace with your API endpoint
let btn = document.getElementById("btn");
let inputdata = document.getElementsByName("class_state");
let stateInfo = document.getElementById("state-info")

fetch('https://shiksha-aa.vercel.app/api/class/')
.then(response => response.json())
.then(data => {
let class_state=data.class_state

console.log(class_state)

stateInfo.innerHTML=(class_state)
})

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

    fetch(url, {method: 'POST',
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
setTimeout(function(){
  window.location.reload();
},700)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    stateInfo.innerHTML=("Please select a class state before submitting.");
  }
});
