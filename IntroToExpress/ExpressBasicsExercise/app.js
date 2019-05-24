const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hi there. welcome to my assignment!')
})

app.get('/speak/:animal', (req, res) => {
  const sounds = {
    pig: 'Oink!',
    cow: 'Moo!',
    dog: 'Woof!',
    cat: 'Meow!',
    mouse: 'Squeak!'
  }
  let animal = req.params.animal.toLowerCase()
  let sound = sounds[animal]
  res.send(`The ${animal} says "${sound}"`)
})

app.get('/repeat/:string/:number', (req, res) => {
  const { string, number } = req.params
  let output = ''
  for (let i = 0; i < number; i++) {
    output += `${string} `
  }
  res.send(output)
})

app.get('*', (req, res) => {
  res.send('Sorry, page not found... What are you doing with your life?')
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server started w/ Nodemon...')
})
