const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {type : String, required: true},
    smallDescription : {type : String, required: true},
    fullDescription : {type : String, required: true},
    companyName :{type : String, required: true},
    location :{type : String, required: true},
    jobLocation :{type : String, required: true},
    type :{type : String},
    postedOn :{type : String},

},{
    timestamps : true,
})

const jobModel = new mongoose.model('jobs' , jobSchema)
module.exports = jobModel