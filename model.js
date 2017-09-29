
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Form(color_, width_) {
    var color = color_;
    var width = width_;
};

function Drawing() {
    var forms = new Array();
}

//Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur.
function Rectangle(X0, Y0, X1, Y1, color, width) {
    Form.call(this, color, width);
    var x0 = X0;
    var y0 = Y0;
    var x1 = X1;
    var y1 = Y1;
};
Rectangle.prototype = new Form();

// Une ligne possède les coordonnées de ses deux points.
function Line(X0, Y0, X1, Y1, color, width) {
    Form.call(this, color, width);
    var x0 = X0;
    var y0 = Y0;
    var x1 = X1;
    var y1 = Y1;
};
Line.prototype = new Form();
razrjaimjm