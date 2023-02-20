var qttenegie = document.querySelector('.qtt-energ');
var typeenergie = document.querySelector('.type-energ');
var btneval = document.querySelector('.btn-eval');
btneval.style.backgroungColor = 'red';
btneval.addEventListener('click', bonjour);
function bonjour(e){
    console.log(qttenegie.value);
    console.log(typeenergie.value);
}


