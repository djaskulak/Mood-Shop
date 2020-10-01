const itemsContainer = document.getElementById('items')
import data from './data.js'

const cart = [];

const obj = {};

console.log(obj);

// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
  let newDiv = document.createElement('div');
    newDiv.className = 'item'
  // display the image
  let img = document.createElement('img');
  img.src = data[i].image
  img.width = 300
  img.height = 300
  newDiv.appendChild(img)

  let desc = document.createElement('P')
  desc.innerText =data[i].desc
  newDiv.appendChild(desc)
  let price = document.createElement('P')
  price.innerText = data[i].price
  newDiv.appendChild(price)

  let button = document.createElement('button')
  button.id = data[i].name

  // creates a custom attribute called data-price.
  // That will hold the price for each element in the button
  button.dataset.price = data[i].price
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)
  // put new div inside items container
  itemsContainer.appendChild(newDiv)
}

//start of the cart
const cart = [];

//creating an object 
const obj = {};

//function for the cart
function addItem (name, price) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].qty += 1;
      return;
    }
  }

  const item = {name: name, price: price, qty: 1};
  cart.push(name);
}

//function that shows items in the cart
function showItems () {
  //display how many items are in the cart
  console.log(`You have ${getQty()} items in your cart`);
  
  //for loop that will display our items in the cart
  for (i = 0; i < cart.length; i +=1){
    console.log(`${cart[i].name} ${cart[i].price} x ${cart[i].qty}`);
  }

  //display the total amount in the cart
  console.log(`Total in cart: ${getTotal()}`);
}

//creating a function to calculate the quantity 
function getQty (){
  //calculate the qty of each item in the cart and display it
  let qty = 0;
  for (let i = 0; i < cart.length; i +=1){
    qty += cart[i].qty;
  }
  return qty;
}

//creating function to calculate the total
function getTotal (){
  //calculate the total amount in the cart
  let total = 0;
  for (let i = 0; i < cart.length; i += 1){
    total += cart[i].price * cart[i].qty;
  }
  return total.toFixed(2);
}

//creating a function to remove items from the cart
function removeItem (name, qty = 0){
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      if(qty > 0) {
        cart[i].qty -= qty;
      }

      if (cart[i].qty < 1 || qty === 0){
        cart.splice(i, 1);
      }

      return;
    }
  }
}

//calling the function so we can see our items
showItems();
