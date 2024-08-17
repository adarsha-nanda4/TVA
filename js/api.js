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








    // pwa



    self.addEventListener('install', (event) => {
      event.waitUntil(
          caches.open('my-cache').then((cache) => {
              return cache.addAll([
                  '/',
                  '/index.html',
                  '/styles.css',
                  '/script.js',
                  '/offline.html', // Cache the offline page
                  '/manifest.json',
                  '/icon-192x192.png',
                  '/icon-512x512.png'
              ]);
          })
      );
  });
  
  self.addEventListener('fetch', (event) => {
      event.respondWith(
          fetch(event.request).catch(() => {
              return caches.match('/offline.html'); // Return the offline page if the user is offline
          })
      );
  });
  
      // if ('serviceWorker' in navigator) {
      //   window.addEventListener('load', () => {
      //     navigator.serviceWorker.register('/service-worker.js')
      //     .then(registration => {
      //       console.log('Service Worker registered with scope:', registration.scope);
      //     })
      //     .catch(error => {
      //       console.log('Service Worker registration failed:', error);
      //     });
      //   });
      // }
      let deferredPrompt;
      // Variable to store the event

      const installButton = document.getElementById('installButton');
      
      // Listen for the 'beforeinstallprompt' event
      window.addEventListener('beforeinstallprompt', (event) => {
          // Prevent the mini-infobar from appearing on mobile
          event.preventDefault();
          // Stash the event so it can be triggered later.
          deferredPrompt = event;
          // Update UI to notify the user they can install the PWA
          installButton.style.display = 'block';
      
          installButton.addEventListener('click', () => {
              // Show the install prompt
              deferredPrompt.prompt();
              // Wait for the user to respond to the prompt
              deferredPrompt.userChoice.then((choiceResult) => {
                  if (choiceResult.outcome === 'accepted') {
                      console.log('User accepted the install prompt');
                  } else {
                      console.log('User dismissed the install prompt');
                  }
                  deferredPrompt = null;
              });
          });
      });
      
      // Optional: Hide the install button if the app is already installed
      window.addEventListener('appinstalled', () => {
          console.log('PWA was installed');
          installButton.style.display = 'none';
      });
      