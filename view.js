
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Form.prototype.paint = function(ctx){
    ctx.strokeStyle=this.color;
    ctx.strokeWidth=this.width;
}

Rectangle.prototype.paint = function(ctx) {
    Form.prototype.paint(ctx);
    console.log(this.x0, this.y0, this.x1, this.y1);
    ctx.rect(this.x0, this.y0, this.x1, this.y1);
    ctx.stroke();
  };
  
Line.prototype.paint = function(ctx) {
    Form.prototype.paint(ctx);
    ctx.beginPath();
    ctx.moveTo(this.x0, this.y0);
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
  };
  
Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function (elt) {
      // now fill the canvas
      elt.paint(ctx);
    });
}
