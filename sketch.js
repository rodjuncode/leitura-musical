let config = {
  btnWidth : 36,
  btnHeight : 36,
  btnMargin : 6.7,
  pentagramMargin: 12,
  pentagramSpaceHeight: 15,
  musicalNotes : ["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"],
  gameNotesQty: 6,
}

let game = {
  notes: [],
  guesses: [],
  current: -1,
}

let backgroundColor;

function preload() {
  myFont = loadFont('assets/Ubuntu-Regular.ttf');
}

function setup() {

  createAdaptiveCanvas(300,400);
  
  backgroundColor = color(255);
  initGame();

}

function draw() {
  background(backgroundColor);
  backgroundColor = color(255);
  drawPentagram();
  drawInterface();
  drawNotes();

  // noLoop();

}

function drawPentagram() {
  let margin = config.pentagramMargin;
  let pentagramSpaceHeight = config.pentagramSpaceHeight;
  push();
  strokeCap(PROJECT)
  strokeWeight(1);
      noteHeight = 20;  line(margin,scaler.height()/2-pentagramSpaceHeight*2,scaler.width()-margin,scaler.height()/2-pentagramSpaceHeight*2);
  line(margin,scaler.height()/2-pentagramSpaceHeight,scaler.width()-margin,scaler.height()/2-pentagramSpaceHeight);
  line(margin,scaler.height()/2,scaler.width()-margin,scaler.height()/2);
  line(margin,scaler.height()/2+pentagramSpaceHeight,scaler.width()-margin,scaler.height()/2+pentagramSpaceHeight);
  line(margin,scaler.height()/2+pentagramSpaceHeight*2,scaler.width()-margin,scaler.height()/2+pentagramSpaceHeight*2);
  pop();
}

function drawNotes() {
  for (let i = 0; i < game.notes.length; i++) {
    let noteHeight, noteDirUp, noteTransparency;
    if (game.guesses.length > i) {
      noteTransparency = 80;
    } else {
      noteTransparency = 255;
    }
    let note = game.notes[i];
    if (note == "Dó1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*3;
      drawLedgerLineDown1(25+config.pentagramMargin + i*45);
      noteDirUp = true;
    } else if (note == "Dó2") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight/2;
      noteDirUp = false;
    } else if (note == "Dó3") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight*4;
      drawLedgerLineUp1(25+config.pentagramMargin + i*45);
      drawLedgerLineUp2(25+config.pentagramMargin + i*45);
      noteDirUp = false;
    } else if (note == "Ré1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*2.5;
      noteDirUp = true;
    } else if (note == "Ré2") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight;
      noteDirUp = false;
    } else if (note == "Mi1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*2;
      noteDirUp = true;
    } else if (note == "Mi2") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight*1.5;
      noteDirUp = false;
    } else if (note == "Fá1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*1.5;
      noteDirUp = true;
    } else if (note == "Fá2") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight*2;
      noteDirUp = false;
    } else if (note == "Sol1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight;
      noteDirUp = true;
    } else if (note == "Sol2") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight*2.5;
      noteDirUp = false;
    } else if (note == "Lá1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*4;
      drawLedgerLineDown1(25+config.pentagramMargin + i*45);
      drawLedgerLineDown2(25+config.pentagramMargin + i*45);
      noteDirUp = true;
    } else if (note == "Lá2") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*.5;
      noteDirUp = true;
    } else if (note == "Lá3") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight*3;
      drawLedgerLineUp1(25+config.pentagramMargin + i*45);
      noteDirUp = false;
    } else if (note == "Si1") {
      noteHeight = scaler.height()/2 + config.pentagramSpaceHeight*3.5;
      drawLedgerLineDown1(25+config.pentagramMargin + i*45);
      noteDirUp = true;
    } else if (note == "Si2") {
      noteHeight = scaler.height()/2;
      noteDirUp = false;
    } else if (note == "Si3") {
      noteHeight = scaler.height()/2 - config.pentagramSpaceHeight*3.5;
      drawLedgerLineUp1(25+config.pentagramMargin + i*45);
      noteDirUp = false;
    } 
    drawNote(25+config.pentagramMargin + i*45, noteHeight,noteDirUp, noteTransparency);
  }
}

function drawNote(x,y,noteDirUp,noteTransparency) {
  let c = color(0);
  c.setAlpha(noteTransparency)
  push();
  translate(x,y);
  // line(-10,0,+10,0);
  stroke(c);
  if (noteDirUp) {
    line(7.5,-1,7.5,-42);
  } else {
    line(-7.5,1,-7.5,42);
  }
  rotate(radians(60));
  fill(c);
  noStroke();
  ellipse(0,0,12,18);
  pop();
}

function drawLedgerLineUp1(x) {
  push();
  translate(x,scaler.height()/2 - config.pentagramSpaceHeight*3);
  noFill();
  stroke(0);
  line(-10,0,+10,0);
  pop();
}

function drawLedgerLineUp2(x) {
  push();
  translate(x,scaler.height()/2 - config.pentagramSpaceHeight*4);
  noFill();
  stroke(0);
  line(-10,0,+10,0);
  pop();
}

function drawLedgerLineDown1(x) {
  push();
  translate(x,scaler.height()/2 + config.pentagramSpaceHeight*3);
  noFill();
  stroke(0);
  line(-10,0,+10,0);
  pop();
}

function drawLedgerLineDown2(x) {
  push();
  translate(x,scaler.height()/2 + config.pentagramSpaceHeight*4);
  noFill();
  stroke(0);
  line(-10,0,+10,0);
  pop();
}

function drawInterface() {
  let btnWidth = config.btnWidth;
  let btnHeight = config.btnHeight;
  let btnMargin = config.btnMargin;
  let musicalNotes = config.musicalNotes;
  push();
  textSize(15);
  textFont(myFont);
  textAlign(CENTER);
  for (let i = 0; i < musicalNotes.length; i++) {
    fill(240);
    stroke(255);
    rect(btnMargin/2+btnWidth*i+btnMargin*i,-btnMargin/2 + scaler.height() - btnHeight, btnWidth, btnHeight);
    fill(0);
    noStroke();
    text(musicalNotes[i], btnMargin/2+btnWidth*i+btnMargin*i+btnWidth/2,-btnMargin/2 + scaler.height() - btnHeight + btnHeight/1.5)
  }
  pop();

}

function initGame() {
  console.log('new game');
  game.guesses = [];
  game.current = 0;
  game.notes = [];
  for (let i = 0; i < config.gameNotesQty; i++) {
    let newNote = config.musicalNotes[floor(random(config.musicalNotes.length))];
    if (["Lá", "Si", "Dó"].includes(newNote)) {
      newNote += round(random(2))+1;
    } else {
      newNote += round(random(1))+1;
    }
    game.notes.push(newNote);

  }
  console.log(game)
}

function mouseClicked() {
  let btnWidth = config.btnWidth;
  let btnHeight = config.btnHeight;
  let btnMargin = config.btnMargin;
  let musicalNotes = config.musicalNotes;
  let buttonHit = false;
  for (let i = 0; i < musicalNotes.length; i++) {
    let bounds = {
      x1 : btnMargin/2+btnWidth*i+btnMargin*i,
      y1 : -btnMargin/2 + scaler.height() - btnHeight,
      x2 : btnMargin/2+btnWidth*i+btnMargin*i + btnWidth,
      y2 : -btnMargin/2 + scaler.height() - btnHeight + btnHeight,
    }
    if (scaler.mouseX() > bounds.x1 && scaler.mouseX() < bounds.x2 && scaler.mouseY() > bounds.y1 && scaler.mouseY() < bounds.y2) {
      buttonHit = true;
      game.guesses.push(musicalNotes[i]);
    }    
  }

  if (!buttonHit) return;

  if (failed()) {
    game.guesses.pop();
    backgroundColor = color('#ff96b8');
  } 

  if (game.guesses.length == game.notes.length) {
    initGame();
  }

  console.log(game)

}

function failed() {
  for (let i = 0; i < game.guesses.length; i++) {
    let note = game.notes[i];
    if (game.guesses[i] != note.substring(0,note.length-1)) 
      return true;
  }
  return false;
}
