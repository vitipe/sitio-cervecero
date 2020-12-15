/*
Acá ir agregando las formulas y calculos para lo que sería la página

Ver de robarlas de "How to brew" o "Designing great beers"

//Formula para corrección densímetro
//Formula IBUs
//Formula balance?
//Mash calculator
//Dilution and boil off
*/

function calculoABV (OG, FG) {
    let abvBirra = (OG - FG) * 131.25
    return abvBirra.toFixed(2);
};



