// http://www.omdbapi.com/?apikey=503c81e8&
const express = require('express')
const request = require('request')
const rp = require('request-promise')
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('search')
})

app.get('/results', (req, res) => {
  const query = req.query.search
  const searchURL = `http://www.omdbapi.com/?apikey=503c81e8&s=${query}`
  rp(searchURL)
    .then(body => {
      const data = JSON.parse(body)
      res.render('results', { data: data })
    })
    .catch(err => {
      console.log(err)
    })
})


app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Running server on PORT ${process.env.PORT}...`)
})
