// Cereated elements in HTML:
/*
<button id="generate">START!</button>

<div id="container">
  <!-- created two dives that match css:-->
  <div id="duck-field"></div>
  <div id="my-field"></div>

  </div>
<button id="generate">CLOSE</button>*/
//Grabed the HTML elemets with jQuery:

const $duckField = $('#duck-field');
const $myField = $('#my-field');
const $generate = $('#generate');

// add color handler for myField

//const makeSquare = (number) => {
    //const $square = $('<div>').addClass('square')
  //$square.css('background-color', yellow())
//  $square.text(number)
  //$square.attr('id', 'square' + number)
  //  $('.container').append($square)
  //}
	//const duckFieldArray = [
		//{motherDuck: 'mother duck', image: './img-project.littleDuck.jpg', verse: './first.verse.mp3',},
		//{littleDuck: 'little duck', image: './img-project.littleDuck.jpg',}
//]

const duckField = () => {
	for(let i = 0; i < 42; i++){

		//const $divSquare = $('<div id="square"></div>')

		const $square = $(`<div data-num-square="${i}" ></div>`)
     // create one class for mother ducks and the other for little ducks
      if(i % 6 === 0) {
				$square.addClass('mother-duck')
				$square.css('background', "url(https://webstockreview.net/images/1-clipart-duck.jpg)")
//add an id for each square id = "${i}"
				//$square.attr('id', i)
				      } else {
		 		$square.addClass('little-duck')
				$square.css('background', "url(https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg)")
				      }
//set an id
		$square.attr('id', i)
		 $square.addClass('square');
		 $duckField.append($square);

//let x = document.createElement('')
//$('.mother-duck').css()
	}
}
duckField()

const myField = () => {
	for(let i = 0; i < 42; i++){
		const $square = $('<div>');
		$square.addClass('square');
// gave each square an id of my-field+ number!
		$square.attr('id', "my-field"+i)
		$myField.append($square);
	}
	//$('#square').on('click', (event) => {
		//console.log('Plays verse 1 of the song')// to make sure that my event listener is working
}
myField()

//const playMusic = () => {

//}// Function to play music; also corrections to HTML file for each

let isMusicPlaying = false

function playAudio(duckAudio) {
	console.log("Play audio")
duckAudio.play();
}
function pauseAudio(duckAudio) {
duckAudio.pause();
}

// each square has its unique id - like #0
$('#generate').on('click', () => {
	let md_start = document.getElementById("duckAudio7");
	//if isMusicPlaying --  make boolean and write if statement
		// turnes #my-field7 red but only when you click on it
	playAudio(md_start)
})

//Mother duck ids in duckField:
$('#0').on('click', (event) => {
 	console.log('quack')
	console.log('mother duck picture')
let md0 = document.getElementById("duckAudio");
//if isMusicPlaying --  make boolean and write if statement
	// turnes #my-field7 red but only when you click on it
playAudio(md0)
})

$('#6').on('click', (event) => {
	console.log('quack')
	//console.log('hides the #11')
let md6 = document.getElementById("duckAudio1");
// select #11 by it's id using jQuery and
$('#11').css('border', 'white')
// hide this element using jquery
// select my-field7 square by id
//use jQuery to change the background color of this div.
		// turnes #my-field7 red but only when you click on it
	playAudio(md6)
})

$('#12').on('click', (event) => {
 //console.log('Verse_3.m4a'')
	console.log('quack')
	//console.log('hides the #16 and #17')
	$('#16').css('border', 'white')
	$('#17').css('border', 'white')
let md12 = document.getElementById("duckAudio2");
playAudio(md12)
})

$('#18').on('click', (event) => {
 //console.log('Verse_4.m4a'')
	console.log('quack')
	//console.log('hides the #21, #22 and #23')
	$('#21').css('border', 'white')
	$('#22').css('border', 'white')
	$('#23').css('border', 'white')
	let md18 = document.getElementById("duckAudio3");
	playAudio(md18)
})

$('#24').on('click', (event) => {
 //console.log('Verse_5.m4a'')
	console.log('quack')
	$('#26').css('border', 'white')
	$('#27').css('border', 'white')
	$('#28').css('border', 'white')
	$('#29').css('border', 'white')
	//console.log('hides the #26, #27, #28 and #29')
	let md24= document.getElementById("duckAudio4");
	playAudio(md24)
})

$('#30').on('click', (event) => {
 //console.log('Verse_6.m4a'')
	console.log('quack')
	$('#31').css('border', 'white')
	$('#32').css('border', 'white')
	$('#33').css('border', 'white')
	$('#34').css('border', 'white')
	$('#35').css('border', 'white')
	//console.log('hides the #31, #32, #33, #34 and #35')
	let md30= document.getElementById("duckAudio5");
	playAudio(md30)
})

$('#36').on('click', (event) => {
 //console.log('End_of_song.m4a'')
 // should have 37-41
	console.log('quack')
	//$('#37').css('border', 'white')
	//$('#38').css('border', 'white')
//	$('#39').css('border', 'white')
	//$('#40').css('border', 'white')
	//$('#41').css('border', 'white')
	alert("You Won!")
//#37, #38, #39, #40 and #41 are hidden
	//console.log('un-hides the #37, #38, #39, #40 and #41')
	let md36 = document.getElementById("duckAudio6");
	playAudio(md36)
})
