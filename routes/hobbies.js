var express = require('express')
var router = express.Router()
var Hobby = require('../models').Hobby;

var hobbies = [
    {id: 1, title: 'Motorcycles' },
    {id: 2, title: 'Piano' },
    {id: 3, title: 'Guitar' }
]

router.get('/', function(req, res) {
    Hobby.all({
        order: [
            ['createdAt', 'ASC']
        ]
    })
    .then( function(movies) {
        
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

router.get('/:id/edit', function(req, res) {
    Hobby.findById(req.params.id)
        .then( function(hobby) {
            return res.render('edit', { hobby: hobby })
        })
})

router.put('/:id', function(req, res) {
    Hobby.update(
        { title: req.body.title },
        { where: { id: req.params.id }}
    )
    .then(function(){
        return res.redirect('/movies')
    })
})
module.exports = router
