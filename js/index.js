// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}
// const oneSauce = document.querySelectorAll(".sauce")
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((oneSauce) => {
    if (!state.whiteSauce) {
      oneSauce.classList.remove('sauce-white');
    } else {
      oneSauce.classList.add('sauce-white');
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((oneCrust) => {
    if (!state.glutenFreeCrust) {
      oneCrust.classList.remove('crust-gluten-free');
      console.log(oneCrust.classList);
    } else {
      oneCrust.classList.add('crust-gluten-free');
      console.log(oneCrust.classList);
    }
  });
}
// let allButtons =  document.querySelector('.btn');
function renderButtons() {
  let pepperoniBUttonNode = document.querySelector('.btn-pepperoni');
  let mushroomsButtonNode = document.querySelector('.btn-mushrooms');
  let greenPeppersButtonNode = document.querySelector('.btn-green-peppers');
  let whiteSauceButtonNode = document.querySelector('.btn-sauce');
  let glutenFreeCrustButtonNode = document.querySelector('.btn-crust');

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni) {
    pepperoniBUttonNode.classList.add('active');
    // console.log('pep');
  } else if (!state.pepperoni) {
    pepperoniBUttonNode.classList.remove('active');
  }

  if (state.mushrooms) {
    mushroomsButtonNode.classList.add('active');
    // console.log('mushr');
  }
  if (!state.mushrooms) {
    mushroomsButtonNode.classList.remove('active');
  }

  if (state.greenPeppers) {
    greenPeppersButtonNode.classList.add('active');
  } else if (!state.greenPeppers) {
    greenPeppersButtonNode.classList.remove('active');
    // console.log('pepper');
  }

  if (!state.whiteSauce) {
    whiteSauceButtonNode.classList.remove('active');
    //  console.log('sauce', state.whiteSauce)
  } else if (state.whiteSauce) {
    whiteSauceButtonNode.classList.add('active');
    // console.log('sauce', state.whiteSauce);
  }

  if (!state.glutenFreeCrust) {
    glutenFreeCrustButtonNode.classList.remove('active');
    // console.log('crust', state. glutenFreeCrust);
  } else if (state.glutenFreeCrust) {
    glutenFreeCrustButtonNode.classList.add('active');
    // console.log('crust', state.glutenFreeCrust);
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panelPriceNode = document.querySelector('.panel.price');
  // console.log(panelPriceNode);
  let pepperoniCount = document.querySelector('#pepperonicount');
  let mushroomCount = document.querySelector('#mushroomscount');
  let greenPeppersCount = document.querySelector('#greenpepperscount');
  let whiteSauceCount = document.querySelector('#whitesaucecount');
  let crustCount = document.querySelector('#crustcount');

  if (!state.pepperoni) {
    pepperoniCount.innerHTML = 0;
  } else {
    pepperoniCount.innerHTML = 1;
  }

  if (!state.mushrooms) {
    mushroomCount.innerHTML = 0;
  } else {
    mushroomCount.innerHTML = 1;
  }

  if (!state.greenPeppers) {
    greenPeppersCount.innerHTML = 0;
  } else {
    greenPeppersCount.innerHTML = 1;
  }

  if (!state.whiteSauce) {
    whiteSauceCount.innerHTML = 0;
  } else {
    whiteSauceCount.innerHTML = 3;
  }

  if (!state.glutenFreeCrust) {
    crustCount.innerHTML = 0;
  } else {
    crustCount.innerHTML = 5;
  }

  // console.log(typeof crustCount.innerHTML);

  let finalCost = document.querySelector('#finalCost');
  finalCost.innerHTML =
    10 +
    parseFloat(pepperoniCount.innerHTML) +
    parseFloat(mushroomCount.innerHTML) +
    parseFloat(greenPeppersCount.innerHTML) +
    parseFloat(whiteSauceCount.innerHTML) +
    parseFloat(crustCount.innerHTML);
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  // console.log(state.glutenFreeCrust)
});
