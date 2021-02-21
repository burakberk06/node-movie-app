const express = require('express')
const router = express.Router()
//Model
const MovieModel = require('../models/Movie');
const { Router } = require('express');

//GET ALL MOVİES
router.get('/', (req, res) => {
    MovieModel.find()
                    .then((movieList)=>{res.json(movieList);})
                    .catch((errorMsg) => {res.json(errorMsg);});
})

//GET A MOVİE
router.get('/:movie')



//POST
router.post('/', function (req, res) {
    /*const movie = new MovieModel({
        title : req.body.title,
        imdb_score:req.body.imdb_score,
        category:req.body.category,
        country:req.body.country,
        year:req.body.year
    })*/
    const movie = new MovieModel(req.body);
    /*movie.save((err,data)=>{
        if (err) {res.json(err);}
        res.json(data);
    });*/
    const promise = movie.save();
    promise.then((data)=>{res.json(data);})
            .catch((err)=>{res.json(err)})
})

module.exports = router;
