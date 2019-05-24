const faker = require('faker')

console.log(`
=====================
 WELCOME TO MY SHOP!
=====================`)

for (let i = 0; i < 10; i++) {
  console.log(`${faker.commerce.productName()} - $${faker.commerce.price()}`)
}

/*
  Create a new directory named "MyShop"
  Add a file named "listProducts.js"
  Install the "faker" package
  Read the faker docs and figure out how it works
  Use faker to print out 10 random product names and 10 random prices
  Run your file and make sure it works

  example:
    ======================
     WELCOME TO MY SHOP !
    ======================

    Small Cotton Computer - $220.92
    Fantastic Concrete Computer - $432.44
    etc...

*/
