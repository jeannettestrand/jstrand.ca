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
			"I'm a computer studies graduate with a background in content creation and design",
			"I want to develop applications that will make life better for users, and hopefully more fun too!"]; 
		var picture = "homePic.jpg";
	} else if (sourcePage == 'Portfolio'){
		var bannerSentences = ["Check out my projects...", 
			"Most of these projects are assignments which I have augmented further", 
			"I've developed GUI and prototype functions to make the applications useful.",
			"Enjoy, and please let me know what you think! "]; 
	} else if( sourcePage=='About'){
		var bannerSentences = ["Want to know more? Check out my resume, and click through for more info.", 
			"I got into computer studies through working with and training folks to use financial software and processes. I found the complex software fascinating, and knew I wanted to build amazing software systems.", 
			"In my bachelor's degree, I learned to research, coordinate, and conceptually develop projects. The skills I developed have made me very focused on projects and process optimization, which has been a natural translation to the world of programming."]; 
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


