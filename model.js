
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Form(X0, Y0, X1, Y1, width_, color_) {
    this.color = color_;
    this.width = width_;
    this.x0 = X0;
    this.y0 = Y0;
    this.x1 = X1;
    this.y1 = Y1;
};



function Drawing() {
    this.forms = new Array();
}

//Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur.
function Rectangle(X0, Y0, X1, Y1, width, color) {
    Form.call(this, X0, Y0, X1, Y1, width, color);

};
Rectangle.prototype = new Form();

// Une ligne possède les coordonnées de ses deux points.
function Line(X0, Y0, X1, Y1, width, color) {
    Form.call(this, X0, Y0, X1, Y1, width, color);
};
Line.prototype = new Form();