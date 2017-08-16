// Enemies our player must avoid
    var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
     this.sprite = 'images/enemy-bug.png';
     this.x = x;
     this.y = y;
     this.speed = speed;
    };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
            this.x = this.x + this.speed*dt;
    // which will ensure the game runs at the same speed for
    // all computers.
    //check for collision. If collided return to starting point
        if (((this.y > player.y) && (this.y < player.y+30)) && ((this.x > player.x - 60) && (this.x < player.x + 50))){
            player.x = 200;
            player.y = 380;
        }
        if(this.x >= 505){
            this.x = 0;
        }
    };

// Draw the enemy on the screen, required method for game
    Enemy.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

// Now write your own player class
    var Player = function(x, y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/char-cat-girl.png';
    };
// This class requires an update(), render() and
     Player.prototype.update = function(dt){
        if (this.y <= 0){
            player.x = 200;
            player.y = 380;     // return to the initial position when reached the final row
            difficult(score);
            score+=1;           //increase the score and level by 1
            level+=1;
        }
        if (this.y > 375){
            this.y = 375;
        }
        if (this.x < 0){
            this.x = 0;
        }
        if (this.x > 400){
            this.x = 400;
        }

    };
    Player.prototype.render = function(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        scoreLevel(score, level);
    };
// a handleInput() method.
    Player.prototype.handleInput = function(keyPress){
        if(keyPress == 'left'){
            this.x -= 100;
        }
        if(keyPress == 'right'){
            this.x += 100;
        }
        if(keyPress == 'up'){
            this.y -= 83;
        }
        if(keyPress == 'down'){
            this.y += 83;
        }
    };
//display score and level
    var scoreLevel = function(s, l){
        var canvas = document.getElementsByTagName('canvas');
        var firstTag = canvas[0];
        scoreLevelDiv.innerHTML = 'Score:' + s + '/'+ 'Level:' + l; 
        document.body.insertBefore(scoreLevelDiv, firstTag[0]);
    }

    var difficult = function(moreEnemies){

    }
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
    

// Place the player object in a variable called player
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
//input
    var allEnemies = [new Enemy(0, 60, 100), new Enemy(0, 145, 50), new Enemy(0, 230, 50)];
    var player = new Player(200, 380, 50);
    var score=0;
    var level=1;
    var scoreLevelDiv = document.createElement('div');
    document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    });
