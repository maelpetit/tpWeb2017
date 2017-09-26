
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  var dragging = false;
  var x0 = 0;
  var y0 = 0;
  var x1 = 0;
  var y1 = 0;

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.beginDrag = function (evt){
    var res = getMousePosition(canvas, evt);
    x0 = res.x;
    y0 = res.y;
    dragging = true;
    console.log("beginDrag " + x0 + " " + y0);
  }

  DnD.prototype.drag = function (evt){
    if(dragging){
      setEndCoords(evt);
      console.log("drag " + x1 + " " + y1);
    }
  }

  DnD.prototype.drop = function (evt){
    if(dragging){
      setEndCoords(evt);
      dragging = !dragging;
      console.log("drop " + x1 + " " + y1);
    }
  }

  function setEndCoords(evt){
    var res = getMousePosition(canvas, evt);
    x1 = res.x;
    y1 = res.y;
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



