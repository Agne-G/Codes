var x = -15;
var y = 25;
var xpos = 5;
var ypos = 5;
var width = 5;
var height = 5;
var tipHidden = false;
setNumber("boxWidth", 5);
setNumber("boxHeight", 5);
for (var r = 0; r < 20; r++) {
  for (var c = 0; c < 15; c++) {
    x += 20;
    var id = "r" + (r + ("c" + c));
    button(id, "");
    setSize(id, 10, 10);
    setPosition(id, x, y);
    setProperty(id, "background-color", "skyblue");
    setProperty(id, "border-width", 1);
  }
  x = -15;
  y += 15;
}
draw();
function draw() {
  for (var r = ypos; r < ypos + height; r++) {
    for (var c = xpos; c < xpos + width; c++) {
      if (c > 14 || c < 0) {
        continue;
      }
      if (r > 19 || r < 0) {
        continue;
      }
      var id = "r" + (r + ("c" + c));
      setProperty(id, "background-color", "dodgerblue");
    }
  }
}
function resetSq() {
  for (var r = ypos; r < ypos + height; r++) {
    for (var c = xpos; c < xpos + width; c++) {
      if (c > 14 || c < 0) {
        continue;
      }
      if (r > 19 || r < 0) {
        continue;
      }
      var id = "r" + (r + ("c" + c));
      setProperty(id, "background-color", "skyblue");
    }
  }
}
onEvent("screen", "keydown", function(event) {
  if (event.key == "Left") {
    resetSq();
    xpos--;
    draw();
    checkTipHidden();
  } else if (event.key == "Right") {
    resetSq();
    xpos++;
    draw();
    checkTipHidden();
  } else if (event.key == "Up") {
    resetSq();
    ypos--;
draw();
checkTipHidden();
  } else if (event.key == "Down") {
    resetSq();
    ypos++;
draw();
checkTipHidden();
  }
});
function checkTipHidden() {
  if (!tipHidden) {
    tipHidden = true;
    setTimeout(function() {
      deleteElement("tip");
    }, 1500);
  }
}
function reset() {
  for (var r = 0; r < 20; r++) {
    for (var c = 0; c < 15; c++) {
      var id = "r" + (r + ("c" + c));
      setProperty(id, "background-color", "skyblue");
    }
  }
}
onEvent("boxWidth", "input", function( ) {
  width = getNumber("boxWidth");
  reset();
  draw();
});
onEvent("boxHeight", "input", function( ) {
  height = getNumber("boxHeight");
  reset();
  draw();
});
