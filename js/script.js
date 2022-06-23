(function () {
  let field = {
    w: 640,
    h: 480,
    colorB: "black",  // background color
    colorW: "blue",   // wall color
    ghosts: ["red", "blue", "pink", "orange"],
    cherries: 3,
    value: [
      [ 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3 ],
      [ 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
      [ 8, 0, 1, 2, 2, 3, 0, 1, 2, 2, 2, 3, 0, 7, 5, 0, 1, 2, 2, 2, 3, 0, 1, 2, 2, 3, 0, 4 ],
      [ 8, 0, 7, 6, 6, 5, 0, 7, 6, 6, 6, 5, 0, 1, 1, 0, 7, 6, 6, 6, 5, 0, 7, 6, 6, 5, 0, 4 ],
      [ 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
      [ 8, 0, 1, 2, 2, 3, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 2, 3, 0, 4 ],
      [ 8, 0, 7, 6, 6, 5, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 7, 6, 6, 5, 0, 4 ],
      [ 8, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4 ],
      [ 7, 2, 2, 2, 2, 3, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 9, 9, 9, 9, 9, 4, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 9, 9, 9, 9, 9, 4, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 9, 9, 9, 9, 9, 4, 0, 1, 1, 0, 1, 2, 2, 2, 2, 2, 2, 3, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 6, 6, 6, 6, 6, 5, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
      [ 8, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 8, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 8, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 8, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 8, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4 ],
      [ 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
      [ 8, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 4 ],
      [ 8, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 4 ],
      [ 8, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4 ],
      [ 8, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 4 ],
      [ 8, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 4 ],
      [ 8, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4 ],
      [ 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4 ],
      [ 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 4 ],
      [ 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4 ],
      [ 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5 ],
    ],
    drawField: function() {
      let arrX0 = [0, 0, 0, 0, 0, 0, 0, 0];
      let arrY0 = [0, 0, 0, 0, 1, 1, 1, 0];
      let arrX1 = [0, 0, 1, 1, 1, 0, 0, 0];
      let arrY1 = [0, 0, 0, 0, 0, 0, 0, 0];
      let arrX2 = [1, 2, 2, 0, 2, 2, 2, 0];
      let arrY2 = [2, 1, 1, 0, 1, 1, 1, 0];
      let arrX3 = [2, 0, 1, 1, 1, 0, 1, 1];
      let arrY3 = [1, 0, 2, 2, 2, 0, 1, 2];
      for (let i = 0; i < this.value.length; ++i) {
        for (let j = 0; j < this.value[i].length; ++j) {
          if (this.value[i][j] != 0) {
            ctx.beginPath()
            ctx.fillStyle = "#332B99";
            ctx.rect( 80 + arrX0[this.value[i][j] - 1] * 9 + j * 18,
                      0  + arrY0[this.value[i][j] - 1] * 8 + i * 16,
                      9   * arrX2[this.value[i][j] - 1],
                      8   * arrY2[this.value[i][j] - 1]);
            ctx.rect( 80 + arrX1[this.value[i][j] - 1] * 9 + j * 18,
                      0  + arrY1[this.value[i][j] - 1] * 8 + i * 16,
                      9   * arrX3[this.value[i][j] - 1],
                      8   * arrY3[this.value[i][j] - 1]);
            ctx.fill();
          }
          else {
            ctx.beginPath()
            ctx.fillStyle = "yellow";
            ctx.rect(80 + j * 18, 0 + i * 16, 2, 2);
            ctx.fill();
          }
        }
      }
    },
    info: {
      xGS: 30,
      yGS: 20,
      xHS: 610,
      yHS: 20,
      deltaB: 35,
      deltaY: 16,
      textGS: "GAME SCORE",
      textHS: "HIGH SCORE",
      value: "00000",
      size: 15,
      colorText: "pink",
      colorValue: "white",
      font: "Arial",
      fontSize: "16px",
      ghost: 100,
      cherry: 500,
      pointS: 1,
      poibtB: 10,
      highScore: 1000,
      lives: 3,
      deltaL: 40,
      livesX: 30,
      livesY: 440,
      livesSize: 10,
      livesColor: "yellow",
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
        this._splitDraw(this.value, this.size, "", this.colorValue, this.xGS, this.yGS + this.deltaB, this.deltaY);
        this._splitDraw(this.textHS, this.size, " ", this.colorText, this.xHS, this.yHS, this.deltaY);
        this._splitDraw(this.value, this.size, "", this.colorValue, this.xHS, this.yHS + this.deltaB, this.deltaY);
        this._drawLives(this.livesX, this.livesY, this.deltaL, this.size, this.livesColor, this.lives);
      }
    },
  };

  const canvas = document.getElementById("canvas");
  canvas.width = field.w;
  canvas.height = field.h;
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = field.colorB;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  field.info.drawInfo();
  field.drawField();
})();