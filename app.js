//This is a class that takes a callback in its constructor. It can observe multiple elements or entries at the same time.
const observer = new IntersectionObserver((entries) => {
  //This function will run any time the visibility of any of the elements within showcase-col1,2,3 changes.
  entries.forEach((entry) => {
    console.log(entry);
    //Checks if the entry is intersecting with the view port or not.
    if (entry.isIntersecting) {
      //If it is intersecting, it will show.
      entry.target.classList.add("show");
      //Allows for the visibility to be changed multiple times.
    } else {
      entry.target.classList.remove("show");
    }


    
  });
});
//Identifies the element in the HTML that is being hidden than animated.
const hiddenElements = document.querySelectorAll(".hidden, .hidden2, .hidden3");
// This tells the observer to observe all of the hidden elements.
hiddenElements.forEach((el) => observer.observe(el));
