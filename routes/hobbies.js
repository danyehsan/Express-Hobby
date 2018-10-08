var express = require('express')
var router = express.Router()
var Hobby = require('../models').Hobby;

var hobbies = [
    {id: 1, title: 'Motorcycles' },
    {id: 2, title: 'Piano' },
    {id: 3, title: 'Guitar' }
]

router.get('/', function(req, res) {
    Hobby.all()
        .then( function(hobbies) {
            return res.render('hobbies', { hobbies: hobbies })
        })
})

module.exports = router
