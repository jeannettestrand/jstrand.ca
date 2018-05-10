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
		var bannerSentences = ["Hi, I'm Jeannette,", 
			"I'm an applications developer, driven by an insatiable curiosity to learn everying.", 
			"Right now I am studying Information and Computer Systems at Camosun College",
			"I have a background in visual arts and design, and have a Bachelor of Fine Arts degree from UVIC.",
			"I am driven to create smart, elegant, and robust solutions that will improve the way systems communicate"]; 
		var picture = "homePic.jpg";
	} else if (sourcePage == 'Portfolio'){
		var bannerSentences = ["Check out my projects...", 
			"These projects are programming assignments from my first year of ICS studies which I have augmented further", 
			"Enjoy, and please let me know what you think! "]; 
	} else if( sourcePage=='About'){
		var bannerSentences = ["Want to know more? Check out my resume, and click through for more info...", 
			"In my bachelor's degree, I studied visual communication, fine art, and design. I love to create stylish, intuitive, and engaging user experiences.",
			"I got into computer studies through educating folks to use financial institution software. I found the complex program and processes fascinating, and knew I wanted to build amazing software systems.", 
			]; 
	} else { return; }
		
	var parentElemID = "bannerTextDiv" + sourcePage;	
	var elemID = "bannerText" + sourcePage;
	
	var parent = document.getElementById(parentElemID);	
	var currentSentence =  document.getElementById(elemID);
	var sentence = currentSentence.innerHTML;
	var incrementedIndex = bannerSentences.indexOf(sentence);
	incrementedIndex += increment;
	
	
	if (incrementedIndex > bannerSentences.length-1){
		incrementedIndex = 0;
	}
	if ( incrementedIndex < 0 ){
		incrementedIndex = bannerSentences.length-1;
	}
	if( incrementedIndex == 0 ){
		if (picture != null){
		var pic = document.createElement("IMG");
		pic.src = picture;
		pic.id = "bannerPic";
		parent.appendChild(pic);
		currentSentence.style.top = "20%";
		} 
	}
	if	((incrementedIndex == 1) || (incrementedIndex==bannerSentences.length-1) ){
		var pic = document.getElementById("bannerPic");
		if (pic != null){
			parent.removeChild(pic);
		}
	}
	if (incrementedIndex != 0 ){
		currentSentence.style.top = "50%";
	}
	currentSentence.innerHTML = bannerSentences[incrementedIndex];
}


