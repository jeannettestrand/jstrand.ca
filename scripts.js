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
function bannerRotate(increment, sourcePage) {
	if (sourcePage == 'Home'){
		var bannerSentences = [
			"Jeannette is a confident full-stack developer with a creative background and solid technical skills.",
			"She has a Bachelor of Fine Arts degree from University of Victoria...",
			"and an Associate degree in Information & Computer Systems from Camosun College.",
			"She is driven to create smart, elegant, and robust solutions and engaging user interface designs"]; 
		var picture = "homePic.jpg";
	} else if (sourcePage == 'Portfolio'){
		var bannerSentences = ["Check out some of Jeannette's projects, ranging from web development, algorithm challenges, to open-source database systems."] 
	} else if( sourcePage=='About'){
		var bannerSentences = ["Jeannette has a wide range of professional experience, and solid technical skills.",
			"She is experienced with object-oriented programming, algorithms and data structures, code optimization, testing, and documentation.", 
			 "Her solid technical capabilities, creative background, and highly-developed communication skills make her a valuable asset to your organization."
			]; 
	} else { return; }
		
	var parentElemID = "bannerTextDiv" + sourcePage;	
	var elemID = "bannerText" + sourcePage;
	
	var parent = document.getElementById(parentElemID);	
	var currentSentence =  document.getElementById(elemID);
	var sentence = currentSentence.innerHTML;
	var incrementedIndex = bannerSentences.indexOf(sentence);
	incrementedIndex = (incrementedIndex + increment) % bannerSentences.length;

	currentSentence.innerHTML = bannerSentences[incrementedIndex];
}


