var block1 = createSprite(randomNumber(-200, -600), randomNumber(50, 350));
block1.setAnimation("block");
block1.setCollider("circle");
block1.velocityX = 3;
block1.scale = block1.velocityX / 45;
var block2 = createSprite(randomNumber(-300, -700), randomNumber(50, 350));
block2.setAnimation("block");
block2.setCollider("circle");
block2.velocityX = 4;
block2.scale = block2.velocityX / 45;
var block3 = createSprite(randomNumber(-400, -800), randomNumber(50, 350));
block3.setAnimation("block");
block3.setCollider("circle");
block3.velocityX = 5;
block3.scale = block3.velocityX / 45;
var block4 = createSprite(randomNumber(-400, -1000), randomNumber(50, 350));
block4.setAnimation("block");
block4.setCollider("circle");
block4.velocityX = 6;
block4.scale = block4.velocityX / 45;
var block5 = createSprite(randomNumber(-400, -1200), randomNumber(50, 350));
block5.setAnimation("block");
block5.setCollider("circle");
block5.velocityX = 7;
block5.scale = block5.velocityX / 45;

var player = createSprite(300, 200);
player.setAnimation("player");
player.setCollider("circle");
player.scale = 1.25;
player.visible = false;
var col = 300;
var loc = 200;
var alive = true;
var score = 0;
var game = false;
var won = false;
fill(rgb(0, 255, 255));
textAlign(CENTER, CENTER);
playSound("sound://category_hits/puzzle_game_magic_item_unlock_4.mp3");
function draw() {
  background(rgb(score / 5, 0, score / 10));
  textSize(100);
  if (game == false) {
    alive = true;
    loop();
    drawSprites();
    text("1000", 200, 200);
    textSize(17);
    if (score > 0) {
      score = score - 1;
    }
    if (won == false) {
      text("PRESS SPACE TO START", 200, 250);
      if (keyWentDown("space")) {
        col = 300;
        loc = 200;
        score = 0;
        block1.x = randomNumber(-200, -600);
        block2.x = randomNumber(-300, -700);
        block3.x = randomNumber(-400, -800);
        block4.x = randomNumber(-400, -1000);
        block5.x = randomNumber(-400, -1200);
        stopSound("sound://category_background/eerie_beginnings.mp3");
        game = true;
        playSound("sound://category_background/eerie_beginnings.mp3", false);
      }
    } else {
      text("CLICK TO PLAY", 200, 250);
      if (mouseWentDown("leftButton")) {
        col = 300;
        loc = 200;
        score = 0;
        block1.x = randomNumber(-200, -600);
        block2.x = randomNumber(-300, -700);
        block3.x = randomNumber(-400, -800);
        block4.x = randomNumber(-400, -1000);
        block5.x = randomNumber(-400, -1200);
        stopSound("sound://category_background/eerie_beginnings.mp3");
        game = true;
        playSound("sound://category_background/eerie_beginnings.mp3", false);
      }
    }
  } else {
    if (alive == true) {
      if (Math.round(score) == 1000) {
        playSound("sound://category_hits/puzzle_game_magic_item_unlock_4.mp3");
        game = false;
        score = 1000;
        won = true;
      }
      var ball = createSprite(col, loc - 50);
      ball.setAnimation("ball");
      ball.setCollider("circle");
      ball.velocityX = 7;
      ball.lifetime = 30;
      ball.scale = 1.25;
      ball.rotationSpeed = 7;
      if (keyDown("space")) {
        loc = loc - 5;
      } else {
        loc = loc + 5;
      }
      if (keyWentDown("space")) {
        playSound("sound://category_app/app_interface_click_2.mp3", false);
      }
      if (keyWentUp("space")) {
        playSound("sound://category_app/app_interface_click_2.mp3", false);
      }
      loop();
      player.y = ball.y;
      player.x = col;
      text(Math.round(score), 200 + randomNumber(-Math.round(score) / 100, Math.round(score) / 100), 200);
      text(Math.round(score), 200 + randomNumber(-Math.round(score) / 200, Math.round(score) / 200), 200);
      drawSprites();
      score = score + 0.20;
      if (col > 160) {
        col = col - 0.1;
      }
      if (player.isTouching(block1) || player.isTouching(block2) || player.isTouching(block3) || player.isTouching(block4) || player.isTouching(block5) || player.y > 400 || player.y < 0) {
        playSound("sound://category_explosion/destruction_5.mp3", false);
        alive = false;
      }
    } else {
      stopSound("sound://category_background/eerie_beginnings.mp3");
      if (mouseWentDown("leftButton")) {
        playSound("sound://category_background/eerie_beginnings.mp3", false);
        alive = true;
        col = 300;
        loc = 200;
        score = 0;
        block1.x = randomNumber(-200, -600);
        block2.x = randomNumber(-300, -700);
        block3.x = randomNumber(-400, -800);
        block4.x = randomNumber(-400, -1000);
        block5.x = randomNumber(-400, -1200);
      }
      loop();
      drawSprites();
      text(Math.round(score), 200 + randomNumber(-Math.round(score) / 100, Math.round(score) / 100), 200);
      text(Math.round(score), 200 + randomNumber(-Math.round(score) / 200, Math.round(score) / 200), 200);
      textSize(17);
      text("CLICK TO PLAY", 200, 250);
    }
  }
}
function loop() {
  if (block1.x > 450) {
                block1.x = randomNumber(-20,-200);
                block1.y = randomNumber(50,350);
              }
  if (block2.x > 450) {
                block2.x = randomNumber(-20,-400);
                block2.y = randomNumber(50,350);
              }
  if (block3.x > 450) {
                block3.x = randomNumber(-20,-600);
                block3.y = randomNumber(50,350);
              }
  if (block4.x > 450) {
                block4.x = randomNumber(-20,-600);
                block4.y = randomNumber(50,350);
              }
  if (block5.x > 450) {
                block5.x = randomNumber(-20,-600);
                block5.y = randomNumber(50,350);
              }
}
