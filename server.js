const express = require("express");
const app = express();
const db = require("./db.js");
// const cors = require('cors')

// app.use(cors({
    
// }))

app.use((req, res, next) => {

    res
        .header("Access-Control-Allow-Origin", "*")

        .header("Access-Control-Allow-Methods", "*")

        .header("Access-Control-Allow-Headers", "*");
    console.log(req)

    next();

});
app.use(express.json());

const jobsRoute = require('./routes/jobsRoute')
app.use('/api/jobs', jobsRoute)
const port = process.env.PORT || 5001;

app.listen(port, () => console.log('Node js derver started'));