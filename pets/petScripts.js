//swimmingFish moves an element leftwards on the viewport
function swimmingFish(fishID, speed, xPos) {
	var intViewportWidth = window.innerWidth  + 200;
	var fish = document.getElementById(fishID);
	var xTransform = xPos;
	var id = setInterval(move, speed);
	function move() {
		if (xTransform == intViewportWidth){
			xTransform = -200;
			move();
		} else {
			xTransform++;
			fish.style.right = xTransform + 'px';
			intViewportWidth = window.innerWidth  + 200;
		}
   }
}

//mobileNavElem activates the hamburger navigation icon for mobile
function mobileNavToggle() {
    var x = document.getElementById("headerNav");
	var y = document.getElementById("headerMenu");
    if (x.className === "topNav") {
        x.className += ".responsive";
	} else {
		x.className = "topNav";
    }
}

//bannerRotate displays sentences for the banner element
function bannerRotate(increment) {
	
	var bannerSentences = ["Make your pet into a work of art", 
			"From photographs of your pet, I can create an expressive life-like portrait", 
			"Pet Portraits are an unforgettable and treasured gift"]; 
	var imageList = ["brilloNBrillo.jpg",
			"edisonNEdison.jpg",
			"solNSolcopy.jpg"];
			
	var textDisplay = document.getElementsByClassName(bannerText);
	var currentSentence = textDisplay.innerHTML;
	console.log(currentSentence);
	var currentIndex = bannerSentences.indexOf(currentSentence);
		
	currentIndex += increment;
	console.log(currentIndex);
	if (currentIndex > bannerSentences.length-1){
		currentIndex = 0;
	}
	if ( currentIndex < 0 ){
		currentIndex = bannerSentences.length-1;
	}
	
	var nextSentence = bannerSentences[currentIndex];
	
	textDisplay.innerHTML = nextSentence;
}

// if (sourcePage == 'Home'){
		 
		// var picture = "homePic.jpg";
	// } else if (sourcePage == 'Portfolio'){
		// var 
	// } else if( sourcePage=='About'){
		// var bannerSentences = ["Want to know more? Check out my resume, and click through for more info.", 
			// "I got into computer studies through working with and training folks to use financial software and processes. I found the complex software fascinating, and knew I wanted to build amazing software systems.", 
			// "In my bachelor's degree, I learned to research, coordinate, and conceptually develop projects. The skills I developed have made me very focused on projects and process optimization, which has been a natural translation to the world of programming."]; 
	// } else { return; }

