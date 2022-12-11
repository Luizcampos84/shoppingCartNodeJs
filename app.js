const { argv } = require('yargs')
const yargs = require('yargs')
const products = require('./products.js')


// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new product',
  builder: {
    id: {
      describe: 'Product id',
      demandOption: true,
      type: 'number'
    },
    name: {
      describe: 'Product name',
      demandOption: true,
      type: 'string'
    },
    price: {
      describe: 'Product price',
      demandOption: true,
      type: 'number'
    }
  },
  handler: function(argv) {
    // console.log('Name: ' + argv.name)
    // console.log('Price: ' + argv.price)
    products.addProduct(argv.id, argv.name, argv.price)
    
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new product',
  builder: {
    id: {
      describe: 'Produc id',
      demandOption: true,
      type: 'number'
    }
  },
  handler: function(argv) {
    products.removeProduct(argv.id)

  }
})

yargs.parse()

