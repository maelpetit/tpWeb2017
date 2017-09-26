
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Form (couleur,epaisseur){
        this.couleur = couleur;
        this.epaisseur = epaisseur;
};

function Drawing (){
        var listform = [];
}
//Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur.
function Rectangle (x,y,largeur,hauteur){
    Form.call(x,y,largeur,hauteur,this);
};  
Rectangle.prototype = new Form();

// Une ligne possède les coordonnées de ses deux points.
function Line (x,y){
    Line.call(x,y,this) ;
};
Line.prototype = new Form() ;
