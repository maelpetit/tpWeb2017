
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
    this.dragging = false;
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 0;
    this.y1 = 0;

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.beginDrag = function (evt){
    var res = getMousePosition(canvas, evt);
    this.x0 = res.x;
    this.y0 = res.y;
    this.dragging = true;
    console.log("beginDrag " + this.x0 + " " + this.y0);
  }

  DnD.prototype.drag = function (evt){
    if(this.dragging){
      setEndCoords(evt);
      console.log("drag " + this.x1 + " " + this.y1);
    }
  }

  DnD.prototype.drop = function (evt){
    if(this.dragging){
      setEndCoords(evt);
      this.dragging = !this.dragging;
      console.log("drop " + x1 + " " + y1);
    }
  }

  function setEndCoords(evt){
    var res = getMousePosition(canvas, evt);
    this.x1 = res.x;
    this.y1 = res.y;
  }

  // Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.beginDrag, false);
  canvas.addEventListener('mousemove', this.drag, false);
  canvas.addEventListener('mouseup', this.drop, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



