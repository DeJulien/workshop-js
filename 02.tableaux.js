var tableau = ['nantes','paris','saint-nazaire','angers','le mans'];
var tab2=[];
var tab3=[];

 tableau.forEach(function(element){
     console.log(element)
 })

tableau.every(function(element){
    console.log('lettreADansToutesLesVilles = '+element.includes('a'))
})

tableau.some(function(element){
    if(element.includes('-')==true)
     console.log('AuMoinUneVilleAvecUnTiret = true');
})

tableau.filter(function(element){
    if(!(element.includes('-') || element.includes(' ')))
    {
        tab2.push(element);
    }
})


tab2.forEach(function(element){
    console.log(element);
})

console.log('-----------');
tableau.filter(function(element){
    if(element.endsWith('s'))
    {
        tab3.push(element.toUpperCase());
    }
})

tab3.forEach(function(element){
    console.log(element);
})

