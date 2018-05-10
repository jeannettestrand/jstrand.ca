
<!doctype html>
	<html lang="eng" id="indexBackground" >
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Jeannette Strand</title>
			<link rel="stylesheet" href="styles.css"/>
			<link rel="stylesheet" href="mobileStyles.css"/>
			<link rel="stylesheet" href="animationStyles.css"/>
			<script src="scripts.js"> </script>
			<link href="https://fonts.googleapis.com/css?family=Poiret+One|Raleway" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"> 
			<script>
			console.log("got here")
	  			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	 			 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	 			 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
				  ga('create', 'UA-103973291-1', 'auto');
				  ga('send', 'pageview');
	
			</script>
	   </head>
<?php 

$pw = filter_input(INPUT_GET, 'password', FILTER_SANITIZE_SPECIAL_CHARS);
echo $pw;
$password = "jeannette";
if (strcmp($pw, $password) !== 0){ ?>
	console.log("pw ok")
	<body id="indexBackground" >
		<div class ="swimmingPool" onload="swimmingFish()">
		   <div id="indexLabel">
		   <form name="login" action="validate.php" method="get" accept-charset="utf-8">
			<h1 class ="indexName" for="password">Sorry, Wrong Password, Please Try Again: </h1>
			<div id="indexLogin"><input type="password" name="password" placeholder="type password here" required></div >
			<div id="indexLogin"><input id="indexButton" type="submit" value="Login"> </div >
			<!-- <a href="home.html" id="indexButtonText"> enter</a></div> -->
		</div>
	</div>
</body>		
<script>
/*
This code generates fish sprites used for animation. The fishStock array contains nested arrays, each of which describe variables required for image instantiation in the DOM. 
			
*/	
var fishStock = [];
var yPos = 50;
var xPos = -200;
var speed = 10;
for (i = 1; i < 11; i++){
	if (xPos < -500){
		xPos = -200;
	}
	if (speed > 20){
		speed = 10;
	}
	fishStock[i] = ['fish' + i + '', yPos, xPos, speed] 
	yPos += 50;
	xPos -= 100;
	speed += 2;
}
for (i = 1; i < fishStock.length; i++){
	var newFish = document.createElement("IMG");
	newFish.src = "fish/" + fishStock[i][0] + ".png";
	newFish.className = "fish";
	newFish.id = fishStock[i];
	newFish.style.top = fishStock[i][1] + "px";
	newFish.style.right = fishStock[i][2] + "px";

	document.body.appendChild(newFish);
	newFish.onload = swimmingFish(fishStock[i], fishStock[i][3], fishStock[i][2]);
}
				
	</script>
	</div>
	<script src="scripts.js"> </script>	 
</body> 	   
<?php  
} else {
	require 'home.html';
?>
console.log("wrongpassword")
