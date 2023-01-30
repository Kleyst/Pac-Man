(function () {
  const game = {

    // underlined data is private


    ///////////////////////////////////////////
    //               FIELDS
    ///////////////////////////////////////////


    _CANVAS_ID: "canvas",
    _data: null,
    _stage: null,
    _layerField: null,
    _pacman: {
      Start() {

      }
    },


    ///////////////////////////////////////////
    //              METHODS
    ///////////////////////////////////////////


    //-----------------------------------------
    // Field drawing methods
    //-----------------------------------------

    // Draws background than calls method
    // for every cell from data.map

    DrawField() {
      let d = this._data;
      this._layerField = new Konva.Layer();
      let background = new Konva.Rect({
        x: 0,
        y: 0,
        width: d.width,
        height: d.height,
        fill: d.color.background
      });
      this._layerField.add(background); 
      for (let j = 0; j < d.map.length; ++j) {
        for (let i = 0; i < d.map[j].length; ++i) {
          this._DrawCell(d.map[j][i], i, j);
        }
      }
    },

    // Ccounts coords and measurements
    // of one cell from map
    // calles  specific method depending on cell value

    _DrawCell(value, i, j) {
      let d = this._data;
      let x = d.x + i * d.cell.halfWidth * 2;
      let y = d.y + j * d.cell.halfHeight * 2;
      let w = d.cell.halfWidth;
      let h = d.cell.halfHeight;
      if (value > 0) {
        this._DrawBrick(value, d.keys, d.color.wall, x, y, w, h);
      }
      else if (value != -9) {
        this._DrawFood(value, data.color.food, x, y, w, h);
      }
      else {
        this._DrawPacman(data.pacman.color, x + w, y + h);
      }
    },
    
    // Draws brick of wall, bricks is half thinner than
    // in map from data.map, every brick has special value and
    // there are 4 arrays of keys for counting coords

    _DrawBrick(value, keys, color, x, y, w, h) {
      let brick = new Konva.Rect({
        x: x + keys[0][value - 1] * w,
        y: y + keys[1][value - 1] * h,
        width:  w * keys[2][value - 1],
        height: h * keys[3][value - 1],
        fill: color,
      });
      this._layerField.add(brick); 
    },

    // Draws Food, size can be changed from data.map 

    _DrawFood (value, color, x, y, w, h) {
      let food = new Konva.Rect({
        x: x + w - (value - 1)*(-1) / 2,
        y: y + h - (value - 1)*(-1) / 2,
        width: (value - 3)*(-1),
        height: (value - 3)*(-1),
        fill: color,
      });
      this._layerField.add(food); 
    },
    
    // Draws Pacman, values is specified
    // for pacman only

    _DrawPacman(color, x, y) {
      let d = this._data.pacman;
      var arc = new Konva.Arc({
        x: x,
        y: y,
        outerRadius: d.outerRadius,
        angle: d.angle,
        rotation: d.rotation,
        fill: color,
      });
      this._layerField.add(arc);
    },

    // Split text and draw it on new line, 
    // s is separator, delta is vertical align
 
    _SplitDraw(text, size, s, color, x, y, delta) {
      let textArr = text.split(s);
      for (let i = 0; i < textArr.length; ++i) {
        var textPart = new Konva.Text({
          x: x - (text.length * size) / 2,
          y: y + i * delta,
          text: textArr[i],
          fontSize: size,            
          align: "center",
          fill: color,
          width: text.length * size
        });
        this._layerField.add(textPart); 
      }
    },

    //-----------------------------------------
    // Sidebar drawing methods
    //-----------------------------------------

    DrawLeftSidebar() {
      let sidebar = this._data.leftSidebar;
      this._SplitDraw(sidebar.text,
                      sidebar.size, " ", sidebar.color.text,
                      sidebar.x, sidebar.y, sidebar.leading);
      this._SplitDraw(this._AddLeadingZeros(sidebar.value, sidebar.length),
                      sidebar.size, "", sidebar.color.value,
                      sidebar.x, sidebar.y + sidebar.textBottomMargin, sidebar.leading);
      this._DrawLives(sidebar.lives);
    },

    DrawRightSidebar() {
      let sidebar = this._data.rightSidebar;
      this._SplitDraw(sidebar.text,
                      sidebar.size, " ", sidebar.color.text,
                      sidebar.x, sidebar.y, sidebar.leading);
      this._SplitDraw(this._AddLeadingZeros(sidebar.value, sidebar.length),
                      sidebar.size, "", sidebar.color.value,
                      sidebar.x, sidebar.y + sidebar.textBottomMargin, sidebar.leading);
    },

    // Method for drawing pacman images as lives

    _DrawLives(lives) {
      for (let i = 0; i < lives.count; ++i) {
        this._DrawPacman(lives.color, lives.x, lives.y + i * lives.leading);
      }
    },

    // Add leadind zeros if number is smaller
    // than needed length in symbols

    _AddLeadingZeros :function (num, totalLength) {
      return String(num).padStart(totalLength, '0');
    },

    //-----------------------------------------
    // Main methods
    //-----------------------------------------

    Initialize(data) {
      this._data = data;
      this._SetStage();
    },

    IsInitialized() {
      return this._data != null ? true : false;
    },

    // Set main and only stage in the game
    // to add different layers to it later

    _SetStage() {
      let d = this._data;
      this._stage = new Konva.Stage({
        container: this._CANVAS_ID,
        width: d.width,
        height: d.height
      });
    },

    DrawGame() {
      this.DrawField();
      this.DrawLeftSidebar();
      this.DrawRightSidebar();
      this._stage.add(this._layerField);
    },

    Start() {
      if(this.IsInitialized()) {
        this.DrawGame();
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
  game.Initialize(data);
  game.Start();
})();
