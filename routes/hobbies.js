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

router.post('/', function(req, res ) {
    var title = req.body.title
    Hobby.create({ title: title })
        .then( function () {
            res.redirect('/hobbies')
        })
})

router.delete('/:id', function(req, res) {
    Hobby.findById(req.params.id)
        .then( function(hobby) {
            hobby.destroy()
        })
        .then( function() {
            return res.redirect('/hobbies')
        })
})
module.exports = router
