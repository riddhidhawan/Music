const express = require('express');
const router = express.Router();
const Music = require('../modules/song');
//get list of songs
router.get('/songs', function(req, res){
    Music.find({}).then(function(songs){
        res.send(songs);
    });
});
//add a new song to the database
router.post('/songs', function(req, res){
   Music.create(req.body).then(function(song){
    res.send(song);
 
   });
    
});
//delete a song
router.delete('/songs/:id', function(req, res){
    Song.findByIdAndRemove({_id:req.params.id}).then(function(song){
        res.send(song);
    });
});


module.exports = router;