//
// GENERADOR DE RANGOS
//
function range (num) {
  return new Array(num).fill().map( (_, index) => { return index + 1; } );
}

console.log( range(10) );

//
// DIVIDIR EN PALABRAS
//
// Use: words('I love javaScript!!'); // ["I", "love", "javaScript"]
//      words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
//
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
