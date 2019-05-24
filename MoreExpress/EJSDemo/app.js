const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/fallinlovewith/:thing', (req, res) => {
  let thing = req.params.thing
  res.render('love', { thingVar: thing })
})

app.get('/posts', (req, res) => {
  const posts = [
    { title: 'Post 1', author: "Dino" },
    { title: 'Post 2', author: "Cess" },
    { title: 'Post 3', author: "Toby" },
  ]

  res.render('posts', { posts: posts })
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server listening.....')
})
