const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Bounty Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    bountyAmount: {
        type: Number,
        require: true
    },
    living: {
        type: Boolean,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    
})

module.exports = mongoose.model("Bounty", bountySchema)