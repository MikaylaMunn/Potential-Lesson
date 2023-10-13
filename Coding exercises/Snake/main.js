let game = {
  tickNumber: 0,
  timer: null,
  score: 0,
  board: [
    "#####################",
    "#              ##   #",
    "#                   #",
    "#                   #",
    "#      ##           #",
    "#      ##           #",
    "#                   #",
    "#                   #",
    "######################",
  ],
  fruit: [{ x: 1, y: 1 }],
  tick: function () {
    window.clearTimeout(game.timer);
    game.tickNumber++;
    if (game.tickNumber % 10 === 0) {
      game.addRandomFruit();
    }
    let result = snake.move();
    if (result === "gameover") {
      alert("Game over! Player scored: " + game.score);
      return;
    }
    graphics.drawGame();
    game.timer = window.setTimeout(game.tick, 500); // Updated this line as well
  },

  addRandomFruit: function () {
    let randomY = Math.floor(Math.random() * game.board.length);
    let randomX = Math.floor(Math.random() * game.board[0].length); // Fixed the index here
    let randomLocation = { x: randomX, y: randomY };
    if (game.isEmpty(randomLocation) && !game.isFruit(randomLocation)) {
      game.fruit.push(randomLocation);
    }
  },
  isEmpty: function (location) {
    return game.board[location.y][location.x] === " ";
  },
  isWall: function (location) {
    return game.board[location.y][location.x] === "#";
  },
  isFruit: function (location) {
    for (let i = 0; i < game.fruit.length; i++) {
      let fruit = game.fruit[i];
      if (location.x === fruit.x && location.y === fruit.y) {
        game.fruit.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  isSnake: function (location) {
    for (let snakePart = 0; snakePart < snake.parts.length; snakePart++) {
      let part = snake.parts[snakePart];
      if (location.x === part.x && location.y === part.y) {
        return true;
      }
    }
    return false;
  },
};

let snake = {
  parts: [
    { x: 4, y: 2 },
    { x: 3, y: 2 },
    { x: 2, y: 2 },
  ],
  facing: "E",
  nextLocation: function () {
    let snakeHead = snake.parts[0];
    let targetX = snakeHead.x;
    let targetY = snakeHead.y;
    targetY = snake.facing === "N" ? targetY - 1 : targetY;
    targetY = snake.facing === "S" ? targetY + 1 : targetY; // Fixed the direction
    targetX = snake.facing === "W" ? targetX - 1 : targetX;
    targetX = snake.facing === "E" ? targetX + 1 : targetX; // Fixed the direction
    return { x: targetX, y: targetY };
  },
  move: function () {
    let location = snake.nextLocation();
    if (game.isWall(location) || game.isSnake(location)) {
      return "gameover";
    }
    if (game.isEmpty(location)) {
      snake.parts.unshift(location);
      snake.parts.pop();
    }
    if (game.isFruit(location)) {
      snake.parts.unshift(location);
      game.score++;
    }
  },
};

let graphics = {
  canvas: document.getElementById("canvas"),
  squareSize: 30,
  drawBoard: function (ctx) {
    let currentYoffset = 0;
    game.board.forEach(function checkline(line) {
      line = line.split("");
      let currentXoffset = 0;
      line.forEach(function checkCharacter(character) {
        if (character === "#") {
          ctx.fillStyle = "black";
          ctx.fillRect(
            currentXoffset,
            currentYoffset,
            graphics.squareSize,
            graphics.squareSize
          );
        }
        currentXoffset += graphics.squareSize;
      });
      currentYoffset += graphics.squareSize;
    });
  },
  draw: function (ctx, source, color) {
    source.forEach(function (part) {
      let partXlocation = part.x * graphics.squareSize;
      let partYlocation = part.y * graphics.squareSize;
      ctx.fillStyle = color;
      ctx.fillRect(
        partXlocation,
        partYlocation,
        graphics.squareSize,
        graphics.squareSize
      );
    });
  },
  drawGame: function () {
    let ctx = graphics.canvas.getContext("2d");
    ctx.clearRect(0, 0, graphics.canvas.width, graphics.canvas.height);
    graphics.drawBoard(ctx);
    graphics.draw(ctx, game.fruit, "red");
    graphics.draw(ctx, snake.parts, "green");
  },
};

let gameControl = {
  processInput: function (event) {
    let key = event.key.toLowerCase();
    let targetDirection = snake.facing;
    if (key === "w" && snake.facing !== "S") targetDirection = "N";
    if (key === "a" && snake.facing !== "E") targetDirection = "W";
    if (key === "s" && snake.facing !== "N") targetDirection = "S";
    if (key === "d" && snake.facing !== "W") targetDirection = "E";
    snake.facing = targetDirection;
  },
  startGame: function () {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    window.addEventListener("keydown", gameControl.processInput, false);
    game.tick();
  },
};

gameControl.startGame();
