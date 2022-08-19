const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){
    try{
    await mongoose.connect('mongodb+srv://magdheera:magdheera@cluster0.qbik4b1.mongodb.net/sheyjobs' , {useNewUrlParser : true});
    console.log('Mongo db connection success')
}
catch (error){
    console.log('Mongo db connection failed')

}
}

module.exports = mongoose