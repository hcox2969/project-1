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
let img = "https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg"
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

		const $square = $(`<div data-num-square="${i}" ><img src="https://webstockreview.net/images/1-clipart-duck.jpg" alt="Mother_Duck" width="42" height="42"/></div>`)
     // create one class for mother ducks and the other for little ducks
      if(i % 6 === 0) {
				$square.addClass('mother-duck')
				$square.attr('id', i)
/*assign mother duck image to class mother duck
const imgMotherDuck = $(`<div id = "mother-duck"><img src="https://webstockreview.net/images/1-clipart-duck.jpg" alt="Mother_Duck" width="42" height="42"/></div>`)
$imgMotherDuck.addClass('imgMotherDuck')
$('.mother-duck').append($imgMotherDuck)
*/
				      } else {
		 		$square.addClass('little-duck')
				//set an id
						 $square.attr('id', i)
/* const imgLittleDuck = $(`<div id = "little-duck"><img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/></div>`)
$imgLittleDuck.addClass('imgLittleDuck')
$('.little-duck').append($imgLittleDuck)
*/
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
			const $square = $(`<div data-num-square="${i}" ><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcGBgoHBwgRBgYJDQoHBwYIBw8IDggWFREXIiARHx8YHCggGBoxGx8TITEhJSkrLi4uIx8zODMsNygtLisBCgoKDg0NDw0NFSsZFRkrKysrLSsrLSsrKy0rLTcrKysrKystKysrKysrKysrKysrKysrLSsrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIEBwP/xAA2EAEBAQABAgIFBg8BAAAAAAAAARECUvASQjJRYrHSIYKRocLRIjNBYXFygZKToqPB4eLxA//EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBwX/xAAfEQEBAQABBQEBAQAAAAAAAAAAAREhAhIxQVFhcSL/2gAMAwEAAhEDEQA/APQZz59XvLy59QPm+/r9vIs5cur+dPFz6vei6d1MW3l1X60t59X9RKSHdTF8XPn5i8ufVSJid1Mi+Ln1e9fFz6qzF+k7r9MhOXLqpvLqv1oq91MXeXWeLmmmJ3X6ZDx8zxc+r3oSrOqmN3lz6kvLn1CHd+mL4+fUfh96kKmmL4ufVTxcutIsJaZF8XLqqTlz6kVruv04Ly5k58+oTE7uoyLvP8/8Q3n10sXF6bfqXHTvtUPDw74jv/r6xw5KWg8tdADFCi8UpSJPYCGIqmkF9IkLBSAVcATShE1QkXEqUBYJJ7E/UBVggpraBSKmiVGkJujqDB6GHHVzv/KpK87ZISigSoqIEKFN4DFSKqlQkPOmgqpa1EExbUYVUVIdURcABBplqjRiKsEwhYMXgAFg6dF+d7h6WHIRajzNroQNEi1YU/ozKWqlRSFAFAX+oU0NKCQVIphDSLcqADKmKlLGoi6JhjUqFgtSMVQ0VZCukT5e/wDiu+ObliVqpHCugJVsAKRQTEWCZ9E1U1WgJQQBZEWi1MWRAKLEYoEFICFGtCgq5oJFRKLhDCrB05+kB6N/GHNEXEeZsqosiyCYp4QgmmriGCKCZ7BU0TQikRr0KlXPZSMixFN8ZYJFQZVQHRBYiyrESkgM3yoBF6fJXT3+QVHoc3Mipa81dFE01RdSxbBQPOham8BTQkAJTSRILIgGis1rvv6UKLKEAQqwQIiwazgIqQi4hE1USqFnkGtTohX38KqPRjm5UXBws4dIkIEqTPYsRTWqiQsVKlnChRUkEKKCQUPQiwqQFSrIi0UCASkDV0EimKhQRiqqxIVrpSuoTfaHpYcwpjzNoYtSrgFpBKonJZDkeggiypERZAFEsUPQikQwXCAAFXSCEWxJVqBFQCmLQEUTSDqEHZlzRUo4NhgurESixNW8kRamlZ9KEMGRbQMXAsDCxRKSmrU8hUWEKEKsS1UA1TFIkIKhCmpWVWVag10JXWA7ubk0IPP+uoAoCIoulNKgFLSVmKLqasq6hhSJVvgAoyLElIhRVRbANRRYCUlNXjBYJSM34CxEJ5K7BjR6XPHPpBMed0WUEWC4QKaBUtOSXwEKip6UVCJBotZLGtQ3vvv5VZWIqxNCl5RaJQ8DVTUVfIYSiQ4FSwKlIC6lqwdQYOzLm1IQcWjT00VVVlplKLqWkpT0LC1mNIIqaQ0XRA0VAsANVIUUSETRaQRYGqi6ACRBSVBqFdujA9Dnjki0o8246Cz00IotSmmAJyWpUAwi1IqRUnff7FEAIQEqlBWVxONWwUqRWeQ1LVTFGqlhIKBQqBDUiyL0+SuvxCZ7I9Dm556HfrSfGDz10P8AzX4fvBYJx8vfqSd/SC1F5M37QM+1Xzk9D9/3AQZvofO+9qAlGjmC9IwvL7X3ABx+0z8QFG+PmUAY/wBP7nH0wA6e/Us/Fggefv1qAJx9Pv1rfjUa6fKV1APSw//Z" alt="yellow" width="42" height="42"/></div>`)
	     // create one class for mother ducks and the other for little ducks
	      if(i % 6 === 0) {
					$square.addClass('mother-duck')
					$square.attr('id',"my-field"+i)
	/*assign mother duck image to class mother duck
	const imgMotherDuck = $(`<div id = "little-duck">
	<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>
	</div>`)
	$imgMotherDuck.addClass('imgMotherDuck')
	$('.mother-duck').append($imgMotherDuck)
	*/
					      } else {
			 		$square.addClass('little-duck')
		//const $square = $('<div>');
		//$square.addClass('square');
// gave each square an id of my-field+ number!
		$square.attr('id', "my-field"+i)
	}
		$square.addClass('square');
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

//document.get ElementById('#1').src="images/13510077-little-duck.jpg"
//$('#1').css('background-image','url(https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg')
//$('#my-field1').css('background-color', 'yellow')
//const $square = $(`<div data-num-square='#1'><img src="images/1351007-little-duck.jpg" width="42" height="42"/></div>`)
//$('#1'){background-image: src="images/13510077-little-duck.jpg"}

// each square has its unique id - like #0
$('#generate').on('click', () => {
	let md_start = document.getElementById("duckAudio7");
	//if isMusicPlaying --  make boolean and write if statement
		// turnes #my-field7 red but only when you click on it
	playAudio(md_start)
})

//Mother duck ids in duckField:
//**********************Mother Duck #0********
$('#0').on('click', (event) => {
	console.log('quack')
	console.log('mother duck picture')
let md0 = document.getElementById("duckAudio");
//if isMusicPlaying --  make boolean and write if statement
	// turnes #my-field7 red but only when you click on it
playAudio(md0)
})
//**********************Mother Duck #6********
$('#6').on('click', (event) => {
	console.log(event.currentTarget)
	console.log('quack')
	//console.log('hides the #11')
let md6 = document.getElementById("duckAudio1");
// select #11 by it's id using jQuery and
$('#11').children("img:first").remove()
$('#my-field7').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
$('#my-field7').children("img:first").hide()
	playAudio(md6)
})
// make little ducks appear in squares
$('#my-field7').on('click', (event) => {
$('#my-field7').children("img:first").remove()
$('#my-field7').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})


//****************Mother Duck #12*********************
$('#12').on('click', (event) => {
 	console.log(event.currentTarget)//console.log('Verse_3.m4a'')
 	console.log('quack')
	//console.log('hides the #16 and #17')
	$('#16').children("img:first").remove()
	$('#17').children("img:first").remove()
	$('#my-field13').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field13').children("img:first").hide()
	$('#my-field14').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field14').children("img:first").hide()

let md12 = document.getElementById("duckAudio2");
playAudio(md12)
})
// make little ducks appear in square
$('#my-field13').on('click', (event) => {
$('#my-field13').children("img:first").remove()
$('#my-field13').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field14').on('click', (event) => {
$('#my-field14').children("img:first").remove()
$('#my-field14').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})

//***********************Mother Duck #18*******
$('#18').on('click', (event) => {
 	console.log(event.currentTarget)//console.log('Verse_4.m4a'')
	console.log('quack')
	//console.log('hides the #21, #22 and #23')
	$('#21').children("img:first").remove()
	$('#22').children("img:first").remove()
	$('#23').children("img:first").remove()
	$('#my-field19').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field19').children("img:first").hide()
	$('#my-field20').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field20').children("img:first").hide()
	$('#my-field21').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field21').children("img:first").hide()
	let md18 = document.getElementById("duckAudio3");
	playAudio(md18)
})
// make little ducks appear in square
$('#my-field19').on('click', (event) => {
$('#my-field19').children("img:first").remove()
$('#my-field19').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field20').on('click', (event) => {
$('#my-field20').children("img:first").remove()
$('#my-field20').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field21').on('click', (event) => {
$('#my-field21').children("img:first").remove()
$('#my-field21').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})

//*************************Mother Duck #24*****
$('#24').on('click', (event) => {
	console.log(event.currentTarget) //console.log('Verse_5.m4a'')
	console.log('quack')
	$('#26').children("img:first").remove()
	$('#27').children("img:first").remove()
	$('#28').children("img:first").remove()
	$('#29').children("img:first").remove()
	$('#my-field25').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field25').children("img:first").hide()
	$('#my-field26').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field26').children("img:first").hide()
	$('#my-field27').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field27').children("img:first").hide()
	$('#my-field28').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field28').children("img:first").hide()
	//console.log('hides the #26, #27, #28 and #29')
	let md24= document.getElementById("duckAudio4");
	playAudio(md24)
})
// make little ducks appear in square
$('#my-field25').on('click', (event) => {
$('#my-field25').children("img:first").remove()
$('#my-field25').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field26').on('click', (event) => {
$('#my-field26').children("img:first").remove()
$('#my-field26').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field27').on('click', (event) => {
$('#my-field27').children("img:first").remove()
$('#my-field27').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field28').on('click', (event) => {
$('#my-field28').children("img:first").remove()
$('#my-field28').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})

//*****************************Mother Duck #30***
$('#30').on('click', (event) => {
 	console.log(event.currentTarget)//console.log('Verse_6.m4a'')
	console.log('quack')
	$('#31').children("img:first").remove()
	$('#32').children("img:first").remove()
	$('#33').children("img:first").remove()
	$('#34').children("img:first").remove()
	$('#35').children("img:first").remove()
	$('#my-field31').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field31').children("img:first").hide()
	$('#my-field32').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field32').children("img:first").hide()
	$('#my-field33').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field33').children("img:first").hide()
	$('#my-field34').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field34').children("img:first").hide()
	$('#my-field35').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
	$('#my-field35').children("img:first").hide()
	//console.log('hides the #31, #32, #33, #34 and #35')
	let md30= document.getElementById("duckAudio5");
	playAudio(md30)
})
// make little ducks appear in square
$('#my-field31').on('click', (event) => {
$('#my-field31').children("img:first").remove()
$('#my-field31').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field32').on('click', (event) => {
$('#my-field32').children("img:first").remove()
$('#my-field32').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field33').on('click', (event) => {
$('#my-field33').children("img:first").remove()
$('#my-field33').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field34').on('click', (event) => {
$('#my-field34').children("img:first").remove()
$('#my-field34').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
// make little ducks appear in squares
$('#my-field35').on('click', (event) => {
$('#my-field35').children("img:first").remove()
$('#my-field35').prepend('<img src="https://previews.123rf.com/images/ynmcreations/ynmcreations1205/ynmcreations120500009/13510077-little-duck.jpg" alt="Little_Duck" width="42" height="42"/>')
})
//****************************Mother Duck #36****
$('#36').on('click', (event) => {
 	console.log(event.currentTarget)//console.log('End_of_song.m4a'')
 // should have 37-41
	console.log('quack')

	alert("You Won!")
//#37, #38, #39, #40 and #41 are hidden
	//console.log('un-hides the #37, #38, #39, #40 and #41')
	let md36 = document.getElementById("duckAudio6");
	playAudio(md36)
})
//************************



//$(() => {
	//const $btn = $('#btn')
///document.getElementById("#btn").addEventListener("click", function() {
//  alert("Hello World!");
//});
//CLOSE button
/*const resetGame = () => {
	$('myField').append("Start the game over")
}

const changeClass = () => {
	$('body').toggleClass('yellow')
}

$(() => {
	const$btn = $('#btn')
})

$( "#btn" ).on( "click", function() {
   changeClass()*/
