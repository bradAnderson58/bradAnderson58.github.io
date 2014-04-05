
BasicGame.end = function (game) {
	var song;
	var singer;
	var welcome;
};

BasicGame.end.prototype = {

	create: function() {
		song = this.add.audio('song');
		song.play();
		welcome = this.add.sprite(this.world.centerX,this.world.centerY,'end');
		welcome.fixedToScreen = true;
		this.camera.follow(welcome);
		welcome.anchor.setTo(0.5, 0.5);
		welcome.inputEnabled = true;
		welcome.events.onInputDown.add(this.startGame, this);
		//this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
		//song = this.add.audio('song');
		//song.play();
		//singer = this.add.audio('sing');
		//singer.play();
	},
	
	update: function() {
		if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			console.log("pressed?");
			this.startGame();
		}
	},
	
	startGame: function() {
		song.stop();
		//singer.stop();
		this.game.state.start('levelFour');
	}
};