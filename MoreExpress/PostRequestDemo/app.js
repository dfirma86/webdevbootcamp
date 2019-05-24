const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let friends = ['Dino', 'Cess', 'Toby', 'Mochi']

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/addFriend', (req, res) => {
  const { newFriend } = req.body
  friends.push(newFriend)
  res.redirect('/friends')
})

app.get('/friends', (req, res) => {
  res.render('friends', { friendList: friends })
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`SERVER STARTED ON PORT ${process.env.PORT}...`)
})
