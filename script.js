let qttenegie = document.querySelector('.qtt-energ');
let typeenergie = document.querySelector('.type-energ');
let btneval = document.querySelector('.btn-eval');
let selectedvalue = document.getElementById('energ-select');

function replaceresultat(res){
// on cree une div qu'on stcok dans newElement qui est une variable dans ce cas 
let newElement = document.createElement("div");
// on fixe l'id de la div à newElement( qui est l'id)
newElement.setAttribute("id","newElement");

newElement.innerHTML = "<p> VOUS AVEZ EMIS </p>" + res + " gxCo2xeq/j";
let formaremplacer = document.querySelector('.result'); 
let parentform = formaremplacer.parentNode;
parentform.replaceChild(newElement,formaremplacer);
btneval.style.display = 'none';
}
let optionvalue ;
let inputvalue ;
let result ; 
//btneval.style.backgroungColor = 'red';
btneval.addEventListener('click', bonjour);
function bonjour(){
    optionvalue = parseInt(selectedvalue.value);
    inputvalue   = parseInt(qttenegie.value);
   console.log(optionvalue);
   console.log(inputvalue);
   result = optionvalue * inputvalue ; 
    console.log(result);
    replaceresultat(result);
}



// const title = document.querySelector('h1');
// title.style.backgroundColor = 'red';
// Empreinte carbone( en kg de CO2) = Consommation d'électricité ( en kwh) * Émissions de gaz à effet de serre par kwh. 
//  Consommation d'électricité ( en kwh) : C’est la quantité d'électricité consommée sur une période donnée( par exemple, une année). 
// Émissions de gaz à effet de serre par kwh :  Ceci correspond à la quantité d’émissions de gaz à effet de serre associée à un kilowattheure ( 1 kwh) et cette valeur dépend de la source d’énergie. 
// Pour les énergies éoliennes il sera pris en compte 12.5 grammes de CO2 par kwh produit. 
// Pour les énergies solaires il sera pris en compte  une moyenne de 75  grammes de C02 par kwh produit. 
// Pour le charbon : il sera pris en compte  une moyenne de 1 kilogramme  de C02 par kwh produit. 
// pour le gaz naturel : il sera pris en compte  une moyenne de 450  grammes de C02 par kwh produit. 

