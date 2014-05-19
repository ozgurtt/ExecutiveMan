var halfwayPointReached = false;
function HalfwayPoint(stage, basicCollision, x) {

	var droppingPlatformSpriteSheet = new createjs.SpriteSheet({
		"images": [loader.getResult("door")],
		"frames": {
			"width": 1, "height": 1, "count": 1
		},
		"animations": {
			"still": {
				"frames" : [0],
				"next" : "still"
			}
		}
	}); // new createjs.Bitmap("images/businessmanspritesheet.png");

	this.damage           = 0;
	this.basicCollision   = basicCollision;
	this.stage            = stage;
	this.animations       = new createjs.Sprite(droppingPlatformSpriteSheet, "still");
	this.x                = x;// - 32;
	this.ySpeed           = 0;
	this.activated        = false;
	this.hardshell        = true;
	this.watchedElements  = [];
	this.animations.x = this.x - mapper.completedMapsWidthOffset;
	this.animations.y = 0;

	this.animations.play();
	this.stage.addChild(this.animations);

	this.tickActions = function() {
		if (halfwayPointReached) {
			return;
		} else {
			halfwayPointReached = true;
		}
	};

	this.playerCollisionActions = function() {

	};
}