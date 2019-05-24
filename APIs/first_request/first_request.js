const rp = require('request-promise')

rp('https://jsonplaceholder.typicode.com/users/1')
  .then(body => {
    const { name, address } = JSON.parse(body)
    console.log(`${name} lives in ${address.city}!`)
  })
  .catch(err => {
    console.log(`Error: ${err}`)
  })

// request('http://www.google.com', (err, res, body) => {
//   if (err) {
//     console.log('There is something wrong!')
//     console.log(err)
//   } else {
//     if (res.statusCode == 200) {
//       // Things are working
//       console.log(body)
//     }
//   }
// })
