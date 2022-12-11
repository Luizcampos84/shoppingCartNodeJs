const products = require('./data/product.json')
const app = require('./app.js')
// console.log(products)
const ps = require("prompt-sync");
const prompt = ps({sigint: true});

let ShoppingCart = []

let selection = prompt("Would you like to buy a product? Yes or No ")

while(selection != "Yes" && selection != "No"){
console.log("Please input Yes or No")
selection = prompt("Please confirm if you Would like to buy something Yes or No:  ")
  }

if (selection == "Yes") {
console.log("List of products available below: ")
console.log(products)

let allProducts = products.map((product) => 
"id " + product.id + " " + "name " + product.name + " " + "price " + product.price
);

// console.log(allProducts)
} else if (selection == "No"){
console.log("Thank you for visiting our web page!!") 
}

while(selection != "No"){
let product = prompt("Input a product name on ShoppingCart ")
let price = 0

if (product == "id" || product == "Apple" || product == "Orange"){
  switch(product) {
    case "Apple":
      price = 4.95
      id = 1
      break;
    case "Orange":
      price = 3.99
      id = 2
      break;
      default:
      break;  
  }
let quantity = parseInt(prompt("How many products would you like to buy? "))
    
ShoppingCart.push({id, product, quantity, price})
console.log(ShoppingCart)
} else {
  console.log(`There is no product: ${product} `)
  }

selection = prompt("Would you like to continue shopping? Yes or No ")

while(selection === "No"){
  selection = prompt("Would you like to remove the quantity of ShoppingCart? Yes or No ")
  if (selection == "Yes") {
    selection = prompt("Which name of product would you like to remove?  ")
    ShoppingCart
    console.log(ShoppingCart)
    var ShoppingCartString = JSON.stringify(ShoppingCart)
    console.log(ShoppingCartString.split(/\s+/))
    console.log(typeof ShoppingCartString)
      selection = prompt("How many product would you like to remove?  ")
      let quantityRemoved = ''
      
      ShoppingCartString.quantity
      console.log(ShoppingCartString.quantity)

      
    
  } else if (selection == "No"){ 
    console.log("Thanks for shopping")
  ShoppingCart.forEach((shoppingCartEnd) => {
    console.log(`product: ${shoppingCartEnd.product}, quantity: ${shoppingCartEnd.quantity},
    total price by product ${shoppingCartEnd.quantity * shoppingCartEnd.price} `)
  })
  break; 
}    
 }

  }

  

const total = ShoppingCart.reduce((acc, el) => acc + el.price * el.quantity, 0 )
console.log(`Total of price to shopping: ${total.toFixed(2)}`)

