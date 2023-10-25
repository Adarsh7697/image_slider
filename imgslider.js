let currentSlide = 0;
const slides = document.querySelectorAll(".slide"); 
const dots = document.querySelectorAll(".dot");

// This function, named init, takes an index n as a parameter. Its purpose is to initialize the slider.
const init = (n) => {
  // It loops through all the slides and hides them by setting their display style to "none"
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    //  It iterates through the navigation dots and removes the "active" class from all of them, effectively deactivating all dots.
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  // It displays the slide with the index n, making it visible.
  slides[n].style.display = "block";
  // : It adds the "active" class to the corresponding navigation dot to indicate the currently active slide.
  dots[n].classList.add("active");
};

// When the DOM is fully loaded, it executes the init function, initializing the slider with the current slide (slide 0) as specified by currentSlide.
document.addEventListener("DOMContentLoaded", init(currentSlide));

// The next function is to move to the next slide. If the current slide is the last one, it wraps back to the first slide (circular behavior).
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

// : The prev function is similar to next, but it goes to the previous slide. If the current slide is the first one, it wraps to the last slide.
const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", prev);

// setInterval(() => {
//   next();
// },3000);

// This loop iterates through the navigation dots and adds click event listeners to each dot. When a dot is clicked, it triggers a function that:

// Logs the current slide index to the console.
// Calls the init function to display the slide associated with the clicked dot.
// Updates the currentSlide variable to reflect the new active slide.
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

