const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello there!!')
})

app.get('/bye', (req, res) => {
  res.send('Bye now!')
})

app.get('/dog', (req, res) => {
  console.log('request to /dog')
  res.send('MEOW!')
})

app.get('/r/:subredditName', (req, res) => {
  console.log(req.params)
  let subreddit = req.params.subredditName
  res.send(`Welcome to the ${subreddit} subreddit!`)
})

app.get('/r/:subredditName/comments/:id/:title', (req, res) => {
  console.log(req.params)
  res.send('Welcome to the comments page!')
})

app.get('*', (req, res) => {
  res.send('You are a star!')
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server started with Nodemon...')
})
