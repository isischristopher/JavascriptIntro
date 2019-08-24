console.log('i lava  you');

const pintToDOM= (toPrint) => {
    document.getElementById('output').innerHTML = toPrint;
}

let bandNumber = 1

const takeNumber =  (bandName) => {
  /*
    Write your awesome code here. See comments
    below for what should be returned.
  */
printToDOM('<h3>${bandNumber}) ${bandName})</h3>');
 bandNumber++
  // you should already have this function written from the class lecture
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM


pintToDOM('Isis')