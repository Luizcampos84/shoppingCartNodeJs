const fs = require('fs')

const addProduct = function(id, name, price) {
  const products = loadProducts()
  const duplicateProducts = products.filter(function (product) {
    return product.id === id
  })

  if (duplicateProducts.length === 0) {
    products.push({
      id: id,
      name: name,
      price: price
    })
    saveProducts(products)
    console.log('New product added!')
  }else {
    console.log('Product id taken!')
  }
}

const removeProduct = function(id) {
  const products = loadProducts()
  const productsToKeep = products.filter(function(product) {
    return product.id !== id
  })

  if (products.length > productsToKeep.length) {
    console.log('Product removed!')
    saveProducts(productsToKeep)
  }else {
    console.log('No note found!')
  }  
} 

const saveProducts = function (products) {
  const dataJSON = JSON.stringify(products)
  fs.writeFileSync('./data/product.json', dataJSON)    
}

const loadProducts = function() {
  try {
    const dataBuffer = fs.readFileSync('./data/product.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch (e) {
    return []
  }
  
}


module.exports = {
  addProduct: addProduct,
  removeProduct: removeProduct
}