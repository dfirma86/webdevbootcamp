const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cat_app')
// add new cat to database
// retrieve all cats from DB and console.log each

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
})

const Cat = mongoose.model('Cat', catSchema);

// const george = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: 'Evil'
// })

// george.save((err, cat) => {
//   if (err) {
//     console.log('SOMETHING WENT WRONG!!!')
//   } else {
//     console.log('Cat saved to database.')
//     console.log(cat)
//   }
// })

Cat.create({
  name: 'Snow White',
  age: 15,
  temperament: 'bland',
}, (err, cat) => {
  if (err) {
    console.log(err)
  } else {
    console.log(cat)
  }
})

Cat.find({}, (err, res) => {
  if (err) {
    console.log('Oh No!')
    console.log(err)
  } else {
    console.log('All the cats...')
    console.log(res)
  }
})
