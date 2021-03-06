function Board(el, row, col, callback) {
  this.el = document.querySelector(el);
  this.row = row;
  this.col = col;
  this.callback = callback;
  this.init();
  this.bindEvents();
}
Board.prototype.init = function () {
  for (var i = 0; i < this.row; i++) {
    var div = document.createElement('div');
    var childDiv = document.createDocumentFragment('div');
    for (var j = 0; j < this.col; j++) {
      var iElem = document.createElement('div');
      iElem.classList.add('div-col');
      //console.log(iElem);
      iElem.dataset['position'] = '' + i + j;
      childDiv.appendChild(iElem);
    }
    div.appendChild(childDiv);
    div.classList.add('div-row');

    // var br = document.createElement('br');
    // div.appendChild(br);
    this.el.appendChild(div);
  }
};

Board.prototype.bindEvents = function () {
  var colour = getRandomColor();
  this.el.addEventListener('click', (e) => {
    var position = e.target.dataset['position'];
    if (position) {
      e.target.style.backgroundColor = colour;
    }
  });
  this.el.addEventListener('dragend', (e) => {
    var position = e.target.dataset['position'];
    console.log(e.target.dataset);
    if (position) {
      e.target.style.backgroundColor = colour;
    }
  });
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//console.log(getRandomColor());
// Open //console to see the generated color
new Board('#board', 10, 10, null);
