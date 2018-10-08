var express = require('express')
var router = express.Router()

var hobbies = [
    {id: 1, title: 'Motorcycles' },
    {id: 2, title: 'Piano' },
    {id: 3, title: 'Guitar' }
]

router.get('/', function(req, res) {
    res.render('movies', { movies: movies })
})

module.exports = router
