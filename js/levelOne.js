
BasicGame.levelOne = function (game) {


    var bear;
	var dudes;
	var player;
	var health;
	var cop1;
	var map;
	var tiles;
	var layer;
	var music;
	var restart;
	var nextLevel;
	var healthBar;
	var amount;
	var finish;
	var left;
	var right;

};
 
BasicGame.levelOne.prototype = {
 
    create: function() {
		this.world.setBounds(0, 0, 3200, 1600);
		this.stage.backgroundColor = '#001f00';
		map = this.add.sprite(0,0,'roadOne');
		
		finish = this.add.sprite(3008,0,'finish');
		tiles = this.add.tilemap('mapOne');
		
		tiles.addTilesetImage('treetiles');
		tiles.addTilesetImage('town');
		tiles.addTilesetImage('invisible');
		tiles.addTilesetImage('fence');
		
		/* SOME GUYS TO RUN OVER*/
		dudes = this.add.group();
		this.addDudes();
		this.time.events.loop(this.rnd.integerInRange(500,1500), this.addDudes, this);
		
		tiles.setCollisionByExclusion([0]);
		layer = tiles.createLayer('Tile Layer 1');
		console.log("here?");
		music = this.add.audio('music');
		music.play();
		
		player = this.add.sprite(300,250,'car');
		this.camera.follow(player);
		this.physics.velocityFromRotation(player.rotation, 400, player.body.velocity);
		player.anchor.setTo(0.5, 0.5);
		player.body.collideWorldBounds = true;
		player.body.bounce.setTo(1,1);
		health = 100;

		cop1 = this.add.sprite(200, 250, 'police');
		cop1.anchor.setTo(.5,.5);
		cop1.body.collideWorldBounds = true;
		this.physics.velocityFromRotation(cop1.rotation, 300, cop1.body.velocity);
		
		bear = this.add.sprite(872, 504, 'bear');
		bear.animations.add('left', [1], 10, true);
		bear.animations.add('right', [2], 10, true);
		bear.animations.add('straight', [0], 10, true);
		bear.fixedToCamera = true;
		//bear.addChild(text);
		left = this.add.sprite(10, 10, 'leftButton');
		left.fixedToCamera = true;
		left.animations.add('unclicked', [0], 10, true);
		left.animations.add('clicked', [1], 10, true);
		left.inputEnabled = true;
		right = this.add.sprite(880,10, 'rightButton');
		right.animations.add('unclicked', [0], 10, true);
		right.animations.add('clicked', [1], 10, true);
		right.fixedToCamera = true;
		right.inputEnabled = true;
		
		amount = 504;
		healthBar = this.add.sprite(1000, amount, 'bar');
		healthBar.fixedToCamera = true;
		
		this.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR, Phaser.Keyboard.DOWN, Phaser.Keyboard.UP ]);
    },
    
    update: function() {
		 this.physics.collide(player, layer, this.collisionHandler, null, this);
		 this.physics.collide(cop1, layer);
		 this.physics.collide(player, cop1, this.collisionHandler, null, this);
		 this.physics.collide(player, finish, this.nextLevel, null, this);
		 //if (health <= 0){ player.kill();}

		if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT) || left.input.pointerDown()){
			bear.animations.play('left');
			left.animations.play('clicked');
			right.animations.play('unclicked');
			player.angle -= (Math.random() * 10);
			this.physics.velocityFromRotation(player.rotation, 400, player.body.velocity);
			
		}else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || right.input.pointerDown()){
			bear.animations.play('right');
			right.animations.play('clicked');
			left.animations.play('unclicked');
			player.angle += (Math.random() * 10);
			this.physics.velocityFromRotation(player.rotation, 400, player.body.velocity);

		}else {
			bear.animations.play('straight');
			right.animations.play('unclicked');
			left.animations.play('unclicked');
			player.body.angularVelocity = 0;
		}
		//Cops!!
		cop1.rotation = this.physics.moveToObject(cop1, player, 300, 300, 300);
		
    },
	collisionHandler: function(){
		health -= 1;
		healthBar.cameraOffset.y += .96;
		/*amount += .96;
		healthBar = this.add.sprite(1000, amount, 'bar');
		healthBar.fixedToCamera = true;
*/
		if (health <= 0) {
			player.kill();
			restart = this.add.button(500, 300, 'restart', this.restartFunc, this, 1, 0);
			restart.fixedToCamera = true;
		}
	},
	restartFunc: function(){
		console.log("restartFunc");
		music.stop();
		this.game.state.start('levelOne');
	},
	
	leftFunc: function(){
		bear.animations.play('left');
		player.angle -= (Math.random() * 10);
		this.physics.velocityFromRotation(player.rotation, 400, player.body.velocity);
	},
	rightFunc: function(){
		bear.animations.play('right');
		player.angle += (Math.random() * 10);
		this.physics.velocityFromRotation(player.rotation, 400, player.body.velocity);
	},
	
	nextLevel: function(){
		nextLevel = this.add.button(500, 300, 'nextButton', this.goLevel, this, 1, 0);
		nextLevel.fixedToCamera = true;
		music.stop();
		player.kill();
	},
	goLevel: function(){
		this.game.state.start('levelTwo');
	},
	addDudes: function(){
		var xPos = Math.random()*this.world.width;
		var yPos = Math.random()*this.world.height;
		if ((xPos, yPos) overlaps map){
			generate sprite
		}
};
