let list = document.querySelector(".list");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");






function toggleMenu() {
    list.classList.toggle("show");
    menu.classList.toggle("dis");
    close.classList.toggle("dis");
}
// toggle menu functon end

// progress bar start
function initializeProgressBar(progressBar, endValue, speed) {
    const valueContainer = progressBar.querySelector('.value-container');
    let progressValue = 0;
  
    const interval = setInterval(() => {
      progressValue++;
      valueContainer.textContent = `${progressValue}%`;
  
      // Update the circular progress bar background
      progressBar.style.background = `conic-gradient(
        #6A5ACD ${progressValue * 3.6}deg,
        #8FBDDF ${progressValue * 3.6}deg
      )`;
  
      // Stop when the progress reaches the end value
      if (progressValue === endValue) {
        clearInterval(interval);
      }
    }, speed);
  }

  // Select all progress bars and initialize them
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach((progressBar) => {
  // Get progress end value from the `data-progress` attribute
  const endValue = parseInt(progressBar.getAttribute('data-progress'), 10) || 0;
  const speed = 50; // Speed for each update (can be adjusted or made dynamic)
  
  // Call the function to initialize the progress bar
  initializeProgressBar(progressBar, endValue, speed);
});



menu.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);


//hire me

let hire = document.querySelector(".btn2");
let hire2 = document.querySelector(".open");
function hireMe(){
  hire2.classList.toggle("open");
  hire2.style.backgroundcolor = "green";
}
hire.addEventListener("click", hireMe);