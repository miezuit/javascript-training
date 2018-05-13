var create_table = function() {
  var table = "<table>";
  for(var i=0;i<=6;i++) {
    table = table + '<tr>';
    for(var j=0;j<=6;j++) {
      table = table + "<td id='" + i + j + "' onclick='controller.processGuess(this.id)'></td>";
    }
    table = table + '</tr>';
  }
  table = table + "</table>";
  document.getElementById('board').innerHTML = table;
};

var view = {
  displayMessage : function(message) {
    console.log(message);
    document.getElementById('message').innerHTML = message;
  },
  displayHit : function(location) {
    console.log("hit");
    document.getElementById(location).setAttribute("class", "hit");
  },
  displayMiss : function(location) {
    console.log("miss");
    document.getElementById(location).setAttribute("class", "miss");
  }
};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [ { locations: ["12", "13", "14"], hits: ["", "", ""] } ]
};

var model = {
  boardSize : 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [],
  fire: function(guess) {
    for(var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.");
    return false;
  },
  isSunk: function(ship) {
    for(var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
      return true;
    }
  },
  isOver: function() {
    return this.numShips === this.shipsSunk;
  },
  generateShipLocations: function() {
    var ship;
    for(var i = 0; i < this.numShips; i++) {
      do {
        newShip = this.generateShip();
      } while (this.collision(newShip));
      this.ships.push(newShip);
    }
  },
  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
    var row;
    var col;
    var i;
    var ship = { locations: [], hits: [] };
    if (direction === 1) {
      // genereaza o nava orizontala
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      for(i = 0; i < this.shipLength; i++) {
        ship.locations.push(row + "" + (col + i));
        ship.hits.push("");
      }
    } else {
      // genereaza o nava verticala
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      col = Math.floor(Math.random() * this.boardSize);
      for(i = 0; i < this.shipLength; i++) {
        ship.locations.push((row + i) + "" + col);
        ship.hits.push("");
      }
    }
    return ship;
  },
  collision: function(newShip) {
    for (var i=0; i < this.ships.length; i++) {
      var ship = this.ships[i];
      for (var j=0; j < newShip.locations.length; j++) {
        if (ship.locations.indexOf(newShip.locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }
};

var controller = {
  guesses: 0,
  processGuess: function(guess) {
    this.guesses++;
    var hit = model.fire(guess);
    if(hit && model.isOver()) {
      view.displayMessage("You sank all battleships in " + this.guesses + " guesses");
    }
  }
};

window.onload = create_table;

model.generateShipLocations();
