/*(function () {
  let field = {
    w: 640,
    h: 480,
    fieldX: 100,
    fieldY: 30,
    colorB: "black",      // background color
    colorW: "#332B99",    // wall color
    colorF: "Yellow",     // food color
    ghosts: ["red", "blue", "pink", "orange"],
    cherries: 3,
    cellW: 16,            // even number!!!
    cellH: 14,            // even number!!!
    pacmanSize: 10,
    pacmanColor: "Yellow",
    pacmanX: 0,
    pacmanY: 0,
    value: [
      [ 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9 ],         //   1 | 2 | 3
      [ 4,-5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-5, 8 ],         //   --------- 
      [ 4, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 2, 3, 0, 1, 2, 2, 3, 0, 8 ],         //   8 |   | 4
      [ 4, 0, 7, 6, 6, 5, 0, 7, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 5, 0, 7, 6, 6, 5, 0, 8 ],         //   ---------
      [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8 ],         //   7 | 6 | 5
      [ 4, 0, 1, 2, 2, 3, 0, 1, 3, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 1, 3, 0, 1, 2, 2, 3, 0, 8 ],
      [ 4, 0, 7, 6, 6, 5, 0, 8, 4, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 8, 4, 0, 7, 6, 6, 5, 0, 8 ],         //   /\ /\ /\
      [ 4, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 8 ],         //   || || ||
      [ 4, 2, 2, 2, 2, 3, 0, 8, 4, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 8, 4, 0, 1, 2, 2, 2, 2, 8 ],         //   Scheme to create thin borders
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         //  
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         //  other codes: meanings
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         //  9: empty cell,
      [ 6, 6, 6, 6, 6, 5, 0, 7, 5, 0, 8, 9, 9, 9, 9, 9, 9, 4, 0, 7, 5, 0, 7, 6, 6, 6, 6, 6,],         //  0: small food 
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 9, 9, 9, 9, 9, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],         // -5: big food
      [ 2, 2, 2, 2, 2, 3, 0, 1, 3, 0, 8, 9, 9, 9, 9, 9, 9, 4, 0, 1, 3, 0, 1, 2, 2, 2, 2, 2,],         // -9: Pacman
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],         
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],
      [ 9, 9, 9, 9, 9, 4, 0, 8, 4, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 8, 4, 0, 8, 9, 9, 9, 9, 9 ],
      [ 4, 6, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 6, 8 ],
      [ 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8 ],
      [ 4, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 2, 3, 0, 1, 2, 2, 3, 0, 8 ],
      [ 4, 0, 7, 6, 6, 5, 0, 7, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 5, 0, 7, 6, 6, 5, 0, 8 ],
      [ 4, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 8 ],
      [ 4, 2, 3, 0, 8, 4, 0, 1, 3, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 1, 3, 0, 8, 4, 0, 1, 2, 8 ],
      [ 4, 6, 5, 0, 7, 5, 0, 8, 4, 0, 7, 6, 6, 6, 6, 6, 6, 5, 0, 8, 4, 0, 7, 5, 0, 7, 6, 8 ],
      [ 4, 0, 0, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 8, 4, 0, 0, 0, 0, 0, 0, 8 ],
      [ 4, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 8, 4, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 8 ],
      [ 4, 0, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 0, 7, 5, 0, 7, 6, 6, 6, 6, 6, 6, 6, 6, 5, 0, 8 ],
      [ 4,-5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-5, 8 ],
      [ 9, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9 ],
    ],
    drawField: function() {
      ctx.fillStyle = field.colorB;
      ctx.fillRect(0, 0, this.w, this.h);
      this.info.drawInfo();

      let arrX0 = [1, 0, 0, 0, 0, 0, 1, 1, 0];
      let arrY0 = [1, 1, 1, 0, 0, 0, 0, 0, 0];
      let arrX1 = [1, 2, 1, 1, 1, 2, 1, 1, 0];
      let arrY1 = [1, 1, 1, 2, 1, 1, 1, 2, 0];

      for (let i = 0; i < this.value.length; ++i) {
        for (let j = 0; j < this.value[i].length; ++j) {
          let x = this.fieldX +  j * this.cellW;
          let y = this.fieldY +  i * this.cellH;

          if (this.value[i][j] > 0) {
            ctx.beginPath()
            ctx.fillStyle = this.colorW;
            ctx.rect( x + arrX0[this.value[i][j] - 1] * this.cellW / 2,
                      y + arrY0[this.value[i][j] - 1] * this.cellH / 2,
                      this.cellW / 2   * arrX1[this.value[i][j] - 1],
                      this.cellH / 2   * arrY1[this.value[i][j] - 1]);
            ctx.fill();
          }
          else if (this.value[i][j] != -9) {
            ctx.beginPath()
            ctx.fillStyle = this.colorF;
            ctx.rect( x + this.cellW / 2  - (this.value[i][j] - 1)*(-1) / 2,
                      y + this.cellH / 2 - (this.value[i][j] - 1)*(-1) / 2, 
                      (this.value[i][j] - 3)*(-1),
                      (this.value[i][j] - 3)*(-1));
            ctx.fill();
          }
          else {
            this.pacmanX = j;
            this.pacmanY = i;
            this.drawPacman();
          }
        }
      }
    },
    info: {
      xGS: 35,
      yGS: 30,
      xHS: 605,
      yHS: 30,
      deltaB: 35,
      deltaY: 16,
      textGS: "GAME SCORE",
      textHS: "HIGH SCORE",
      valueGS: 0,
      valueHS: 1000,
      valueLength: 5,
      size: 15,
      colorText: "pink",
      colorValue: "white",
      colorB: "black", // the same as colorB in field
      font: "Arial",
      fontSize: "16px",
      ghost: 100,
      cherry: 500,
      pointS: 1,
      pointB: 10,
      highScore: 1000,
      lives: 3,
      deltaL: 40,
      livesX: 30,
      livesY: 440,
      livesSize: 10,
      livesColor: "yellow",
      _addLeadingZeros :function (num, totalLength) {
        return String(num).padStart(totalLength, '0');
      },
      _drawLives: function(x, y, delta, size, color, count) {
        for (let i = 0; i < count; ++i) {
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(x, y - delta * i, size, 0.85* Math.PI, 1.9* Math.PI);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(x, y - delta * i, size, 0.15* Math.PI, 1.1* Math.PI);
          ctx.fill();
        }
      },
      _splitDraw: function (text, size, s, color, x, y, delta) {
        console.log(text);
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        let fontArgs = ctx.font.split(' ');
        ctx.font = "bold " + size + "px" + ' ' +  fontArgs[fontArgs.length - 1];
        let textArr = text.split(s);
        for (let i = 0; i < textArr.length; ++i) {
          ctx.fillText(textArr[i], x, y + i * delta);
        }
      },
      drawInfo: function() {
        this._splitDraw(this.textGS, this.size, " ", this.colorText, this.xGS, this.yGS, this.deltaY);
        this._splitDraw(this._addLeadingZeros(this.valueGS, this.valueLength), this.size, "", this.colorValue, this.xGS, this.yGS + this.deltaB, this.deltaY);
        this._splitDraw(this.textHS, this.size, " ", this.colorText, this.xHS, this.yHS, this.deltaY);
        this._splitDraw(this._addLeadingZeros(this.valueHS, this.valueLength), this.size, "", this.colorValue, this.xHS, this.yHS + this.deltaB, this.deltaY);
        this._drawLives(this.livesX, this.livesY, this.deltaL, this.size, this.livesColor, this.lives);
      },
      addScore: function(value) {
        this._eraseScore();
        if (value == 0) {
          this._splitDraw(this._addLeadingZeros(this.valueGS+=this.pointS, this.valueLength), this.size, "", this.colorValue, this.xGS, this.yGS + this.deltaB, this.deltaY);
        } else if (value == -5) {
          this._splitDraw(this._addLeadingZeros(this.valueGS+=this.pointB, this.valueLength), this.size, "", this.colorValue, this.xGS, this.yGS + this.deltaB, this.deltaY);
        }
      },
      _eraseScore () {
        ctx.fillStyle = this.colorB;
        ctx.rect( this.xGS - this.size, this.yGS + this.deltaB - this.size,  this.size * 2,this.valueLength * (this.size + this.deltaY));
        ctx.fill();
      }
    },
    drawPacman: function() {
      let x = this.fieldX + this.pacmanX * this.cellW;
      let y = this.fieldY + this.pacmanY * this.cellH;
      this.info._drawLives(x + this.cellW / 2, y + this.cellH / 2, 0, this.pacmanSize, this.pacmanColor, 1);
    },
    _erasePacman() {
      let x = this.fieldX + this.pacmanX * this.cellW;
      let y = this.fieldY + this.pacmanY * this.cellH;
      ctx.beginPath();
      ctx.fillStyle = this.colorB;
      ctx.arc(x + this.cellW / 2, y + this.cellH / 2, this.pacmanSize + 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const canvas = document.getElementById("canvas");
  canvas.width = field.w;
  canvas.height = field.h;
  let ctx = canvas.getContext("2d");
  field.drawField(field.colorW);
  document.addEventListener('keydown', (e) => {
    const keyName = e.code;
    switch (keyName) {
      case "ArrowLeft":
        if (field.pacmanX - 1 < 0) {
          field._erasePacman();
          field.pacmanX = field.value[0].length - 1;
          field.info.addScore(field.value[field.pacmanY][field.pacmanX - 1]);
          field.drawPacman();
        } else if (field.value[field.pacmanY][field.pacmanX - 1] < 1 || field.value[field.pacmanY][field.pacmanX - 1] == 9) {
          if (field.value[field.pacmanY][field.pacmanX - 1] == 0) {
            field.info.addScore(field.value[field.pacmanY][field.pacmanX - 1]);
          } else if (field.value[field.pacmanY][field.pacmanX - 1] == -5) {
            field.info.addScore(field.value[field.pacmanY][field.pacmanX - 1]);
          }
          field.value[field.pacmanY][field.pacmanX] = 9;
          field.value[field.pacmanY][field.pacmanX - 1] = -9;
          field._erasePacman();
          --field.pacmanX;
          field.drawPacman();
        }
        break;
      case "ArrowUp":
        if (field.value[field.pacmanY - 1][field.pacmanX] < 1 || field.value[field.pacmanY - 1][field.pacmanX] == 9) {
          field.value[field.pacmanY][field.pacmanX] = 9;
          field.value[field.pacmanY - 1][field.pacmanX] = -9;
          field._erasePacman();
          --field.pacmanY;
          field.drawPacman();
        }
        break;
      case "ArrowRight":
        if (field.pacmanX + 1 > field.value[0].length - 1) {
          field._erasePacman();
          field.pacmanX = 0;
          field.drawPacman();
        } else if (field.value[field.pacmanY][field.pacmanX + 1] < 1 || field.value[field.pacmanY][field.pacmanX + 1] == 9) {
          field.value[field.pacmanY][field.pacmanX] = 9;
          field.value[field.pacmanY][field.pacmanX + 1] = -9;
          field._erasePacman();
          ++field.pacmanX;
          field.drawPacman();
        }
        break;
      case "ArrowDown":
        if (field.value[field.pacmanY + 1][field.pacmanX] < 1 || field.value[field.pacmanY + 1][field.pacmanX] == 9) {
          field.value[field.pacmanY][field.pacmanX] = 9;
          field.value[field.pacmanY + 1][field.pacmanX] = -9;
          field._erasePacman();
          ++field.pacmanY;
          field.drawPacman();
        }
        break;
   }
  });
})();*/
(function () {

  function GetIO(width, height) {
    const canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    const IO = {
      _ctx: canvas.getContext("2d"),

      _DrawPacman(size, color, x, y) {
        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.arc(x, y, size, 0.85* Math.PI, 1.9* Math.PI);
        this._ctx.fill();
        this._ctx.beginPath();
        this._ctx.fillStyle = color;
        this._ctx.arc(x, y, size, 0.15* Math.PI, 1.1* Math.PI);
        this._ctx.fill();
      },

      _DrawFood (value, color, x, y, w, h) {
        this._ctx.fillStyle = color;
        this._ctx.fillRect( x + w  - (value - 1)*(-1) / 2,
                            y + h - (value - 1)*(-1) / 2, 
                            (value - 3)*(-1),
                            (value - 3)*(-1));
      },

      _DrawBrick(value, keys, color, x, y, w, h) {
        this._ctx.fillStyle = color;
        this._ctx.fillRect( x + keys[0][value - 1] * w,
                            y + keys[1][value - 1] * h,
                            w * keys[2][value - 1],
                            h * keys[3][value - 1]);
      },

      _DrawCell(data, value, i, j) {
        let x = data.x + i * data.cell.halfWidth * 2;
        let y = data.y + j * data.cell.halfHeight * 2;
        let w = data.cell.halfWidth;
        let h = data.cell.halfHeight;
        if (value > 0) {
          this._DrawBrick(value, data.keys, data.color.wall, x, y, w, h)
        }
        else if (value != -9) {
          this._DrawFood(value, data.color.food, x, y, w, h);
        }
        else {
          this._DrawPacman(data.pacman.size, data.pacman.color, x + w, y + h);
        }
      },

      _SplitDraw(text, size, s, color, x, y, delta) {
        this._ctx.fillStyle = color;
        this._ctx.textAlign = "center";
        let fontArgs = this._ctx.font.split(' ');
        this._ctx.font = "bold " + size + "px" + ' ' +  fontArgs[fontArgs.length - 1];
        let textArr = text.split(s);
        for (let i = 0; i < textArr.length; ++i) {
          this._ctx.fillText(textArr[i], x, y + i * delta);
        }
      },

      _AddLeadingZeros :function (num, totalLength) {
        return String(num).padStart(totalLength, '0');
      },

      DrawField(data) {
        this._ctx.fillStyle = data.color.background;
        this._ctx.fillRect(0, 0, data.width, data.height);

        for (let j = 0; j < data.map.length; ++j) {
          for (let i = 0; i < data.map[j].length; ++i) {
            this._DrawCell(data, data.map[j][i], i, j);
          }
        }
/*
        this._ctx.beginPath();
        this._ctx.fillStyle="yellow";
        this._ctx.arc(210, 80, 50, 0, Math.PI*2, true);
        this._ctx.fill();
        this._ctx.save();

        setTimeout(() => {  console.log("World!"); }, 2000);

        this._ctx.beginPath();
        this._ctx.fillStyle="red";
        this._ctx.arc(10, 80, 50, 0, Math.PI*2, true);
        this._ctx.fill();

        setTimeout(() => {  console.log("World!"); }, 2000);


        this._ctx.restore();
/*
        function restore (x) {
          x.fillStyle = "black";
          x.fillRect(1, 1, 200, 200);
          x;
          console.log(x);
        };
        setTimeout(restore, 500, this._ctx);*/

      },

      _DrawScore(data) {
     
      },

      _DrawLives(lives) {
        for (let i = 0; i < lives.count; ++i) {
          this._DrawPacman(lives.size, lives.color, lives.x, lives.y + i * lives.leading);
        }
      },

      _DrawGhost(data) {
     
      },

      DrawLeftSidebar(sidebar, pacman) {
        this._SplitDraw(this._AddLeadingZeros(sidebar.text, sidebar.length),
                        sidebar.size, " ", sidebar.color.text,
                        sidebar.x, sidebar.y, sidebar.leading);
        this._SplitDraw(this._AddLeadingZeros(sidebar.value, sidebar.length),
                        sidebar.size, "", sidebar.color.value,
                        sidebar.x, sidebar.y + sidebar.textBottomMargin, sidebar.leading);
        this._DrawLives(sidebar.lives);
      },

      DrawRightSidebar(sidebar) {
        this._SplitDraw(this._AddLeadingZeros(sidebar.text, sidebar.length),
                        sidebar.size, " ", sidebar.color.text,
                        sidebar.x, sidebar.y, sidebar.leading);
        this._SplitDraw(this._AddLeadingZeros(sidebar.value, sidebar.length),
                        sidebar.size, "", sidebar.color.value,
                        sidebar.x, sidebar.y + sidebar.textBottomMargin, sidebar.leading);
      },

      Draw(data) {
        this.DrawField(data);
        this.DrawLeftSidebar(data.leftSidebar, data.pacman);
        this.DrawRightSidebar(data.rightSidebar);
      }
    };
    return IO;
  }

  const game = {
    _data: null,
    _IO: null,
    _pacman: {
      _Start() {

      }
    },
    Initialize(IO, data) {
      this._IO = IO;
      this._data = data;
    },
    IsInitialized() {
      return (this._IO != null) & (this._data != null) ? true : false;
    },
    Start() {
      if(this.IsInitialized()) {
        this._IO.Draw(this._data);
      }
      else console.log("Game is not initialized!");
    },
    Pause() {
      if(this.IsInitialized()) {

      }
      else console.log("Game is not initialized!");
    },
    Reset() {
      if(this.IsInitialized()) {

      }
      else console.log("Game is not initialized!");
    }
  }
  let data = GetDataFromLocalJS();
  game.Initialize(GetIO(data.width, data.height), data);
  game.Start();
})();