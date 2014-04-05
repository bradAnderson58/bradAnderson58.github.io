
BasicGame.preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
	
};

BasicGame.preloader.prototype = {
	preload: function() {
		
		this.background = '#001f00';
		this.preloadBar = this.add.sprite(0,0, 'bearBar');
		
		this.load.setPreloadSprite(this.preloadBar);
		
		this.load.image('title', 'ART/title.png');
		this.load.tilemap('mapOne', 'Tiles/tileOne.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('map1', 'ART/mapTiled.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('mapTwo', 'Tiles/tileTwo.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('mapFour', 'Tiles/canadaOne.json', null, Phaser.Tilemap.TILED_JSON);
		
		this.load.image('houses', 'ART/houses.png');
		this.load.image('town', 'ART/town.png');
		this.load.image('invisible', 'ART/invisible.png');
		this.load.image('fence', 'fence.png');
		this.load.image('treetiles', 'ART/treetiles.png');
		this.load.image('roadOne', 'Tiles/roadOne.png');
		this.load.image('roadTwo', 'Tiles/roadTwo.png');
		this.load.image('roadFour', 'Tiles/canadaroad.png');
		this.load.image('road', 'ART/mapTiled.png');
		
		this.load.spritesheet('bear', 'ART/bearDrive1.png', 128, 96);
		this.load.image('car','ART/car.png');
		this.load.image('police','ART/police.png');
		
		this.load.audio('music', ['bear.mp4','bear.ogg']);
		
		this.load.spritesheet('restart', 'ART/buttonSprite.png', 306, 120);
		this.load.spritesheet('nextButton', 'ART/nextSprite.png', 306, 120);
		this.load.spritesheet('leftButton', 'ART/leftButton.png', 128, 128);
		this.load.spritesheet('rightButton', 'ART/rightButton.png', 128,128);
		this.load.image('bar', 'bar.png');
		this.load.image('finish', 'ART/finish.png');
		
		this.load.image('end', 'ART/win.png');
		this.load.audio('song', ['anthem.mp4', 'anthem.ogg']);
		//this.load.audio('sing', ['singing.mp4', 'singing.ogg']);

	},

	create: function() {
	
		this.preloadBar.cropEnabled = false;
	},
	
	update: function(){
	
		if (this.ready == false){
			this.ready = true;
			this.game.state.start('intro');
		}
	}
	
};