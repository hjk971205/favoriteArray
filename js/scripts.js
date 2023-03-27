function getAndSetMadLibValues() {
    const inputs = [];
    // in this section we get the value for each form input
    //const thing1Input = document.getElementById("thing1Input").value;
    inputs.push(document.getElementById("thing1Input").value);
    inputs.push(document.getElementById("thing2Input").value);
    inputs.push(document.getElementById("favAnimal").value);
    inputs.push(document.getElementById("favMusic").value);
    inputs.push(document.getElementById("favNumber").value);
  
    const newInputs = [];
    newInputs.push(inputs[1]);
    newInputs.push(inputs[0]);
    newInputs.push(inputs[2]);

    // then we set the story variables to the values we got from the form
    document.querySelector("li#fav1").innerText = newInputs[0];
    document.querySelector("li#fav2").innerText = newInputs[1];
    document.querySelector("li#fav3").innerText = newInputs[2];

}
  
  window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
      getAndSetMadLibValues();
    };
  };