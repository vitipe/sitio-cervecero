const $botonCalcularABV = document.querySelector('#boton-calculo-abv');

$botonCalcularABV.onclick = function(){
    const OG = document.querySelector('#densidad-inicial').value;
    const FG = document.querySelector('#densidad-final').value;

    document.querySelector('#abv').value = calculoABV(OG, FG);

    document.querySelector('#boton-resetear-abv').className = '';

    return false;
}