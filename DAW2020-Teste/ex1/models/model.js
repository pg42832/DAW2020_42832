var mongoose = require('mongoose')

pubSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    year: String,
    title: String,
    pai: String,
    mae: String,
    ref: String,
    href:String
})


module.exports = mongoose.model('batismos', pubSchema);