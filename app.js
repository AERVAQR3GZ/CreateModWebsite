//This entire file is made to check when containers are being observed and when they are, apply a class to them, then when they are unobserved, remove that class.

//This is a class that takes a callback in its constructor. It can observe multiple elements or entries at the same time.
const observer = new IntersectionObserver((entries) => {
	//This function will run any time the visibility of any of the elements within hidden1 through 3 changes.
	entries.forEach((entry) => {
		console.log(entry);
		//Checks if the entry is intersecting with the view port or not.
		if (entry.isIntersecting) {
			//If it is intersecting, it will add class "show".
			entry.target.classList.add("show");
			//Allows for the visibility to be changed multiple times (Removes class if not visible).
		} else {
			entry.target.classList.remove("show");
		}
	});
});
//Identifies the element in the HTML that is being hidden amd applies the class show to it, allowing it to be animated.
const hiddenElements = document.querySelectorAll(".hidden, .hidden2, .hidden3");
// This tells the observer to observe all of the hidden elements.
hiddenElements.forEach((el) => observer.observe(el));
