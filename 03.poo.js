function Personne (nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
        return nom+' '+prenom+' '+pseudo;
    }
  }
  
var jules= new Personne('LEMAIRE','Jules','jules77');
 
        
var paul= new Personne('LEMAIRE','Paul','paul44');


console.log(jules.nom+' '+jules.prenom+' '+jules.pseudo+' '+jules.getNomComplet());
console.log(paul.nom+' '+paul.prenom+' '+paul.pseudo+' '+paul.getNomComplet());
console.log('---------------');
jules.pseudo='jules44';
console.log(jules.nom+' '+jules.prenom+' '+jules.pseudo+' '+jules.getNomComplet());
console.log('---------------');
console.log(jules.age);
Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
jules.age=30;
console.log(jules.age);
console.log('---------------');
Personne.prototype.getInitiales = function(){
    return this.prenom.charAt(0)+this.nom.charAt(0)
}
console.log(jules.getInitiales());
console.log('---------------');
var robert= {
    nom: 'Robert',
    prenom: 'LEPREFET',
    pseudo: 'robert77',
    getNomComplet: function(){
        return this.nom+' '+this.prenom+' '+this.pseudo;
    }
  }
  console.log(robert.getNomComplet());
  console.log('---------------');

  function client(nom,prenom,pseudo,numeroClient){
    Personne.call(this,nom,prenom,pseudo);
    this.numeroClient=numeroClient;
    this.getInfos=function(){
        return nom+' '+prenom+' '+pseudo+' '+numeroClient;
    }
  }
  var steve= new client('LUCAS','Steve','steve44','A01');
  console.log(steve.getNomComplet());
  console.log(steve.numeroClient);
  console.log(steve.getInfos());


