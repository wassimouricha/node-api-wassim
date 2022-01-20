const express = require('express');  //on appelle express
const router = express.Router();
const objectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/post-model');

//get c'est ce qu'il y a d'écrit dans l'url
router.get('/' ,(req, res) => {
    PostsModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("error to get data : " + err);
     })
} );

//methode post
router.post('/' , (req,res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message,
        age: req.body.age
    });

    newRecord.save((err,docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data: ' + err);
    })
});

//methode put pour modifier les données (une update)

router.put("/:id", (req,res) =>{
    if(!objectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id)

    const updateRecord =  {
        author: req.body.author,
        message: req.body.message,
        age: req.body.age
    };
    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new: true},
        (err,docs) => {
            if(!err) res.send(docs);
            else console.log("update error : " + err);
        }
    )
});

router.delete('/:id' , (req,res) => {
    if(!objectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err,docs) => {
            if (!err) res.send(docs);
            else console.log( "delete error : " + err);
        }
        
        );
});

module.exports = router