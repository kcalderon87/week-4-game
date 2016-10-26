$(document).ready(funtion() {

var characters = {
	'obiwan': {
			name: "Obi-wan";
			health: 120;
			attack: 8;
			enemyAttack: 15;

		};

		'luke': {
			name: "Luke Skywalker";
			health: 100;
			attack: 14;
			enemyAttack: 5;
		};

		'sidious': {
			name: "Darth Sidious";
			health: 150;
			attack: 8;
			enemyAttack: 20;
		};

		'maul': {
			name: "Darth Maul";
			health: 180;
			attack: 7;
			enemyAttack: 25;
		};
	};


//character selection

	$('.player').on('click', character); 
		$('.player').click(function() {
			$('.player').off('click', character);
	});

//enemy selection

	$('.enemy-selected').on('click', defender);
		$('.enemy-selected').click(function() {

		});

//attack
	$('#attackbutton').on('click', function(){

	});

});

//move to section
function character() {
	$('.rowEnemies').append($('.player'));
		$('.characters').append(this);
}

//enemy to section
function defender(event) {
	$('.defense').append($(event.target).parents('.player'));
}





