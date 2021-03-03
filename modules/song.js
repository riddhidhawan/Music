const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MusicSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    aname:{
        type:String
    },
    imgurl:{
        type:String
    },
    musicurl:{
        type:String
    }
});

const Music = mongoose.model('song',MusicSchema);


module.exports=Music;