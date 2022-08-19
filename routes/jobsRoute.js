const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();
const app=express();

const Job = require("../models/jobModel")



router.get("/getalljobs", async(req, res)=>{
    console.log("Get jobs");
    try{
        const jobs = await Job.find()
        res.send(jobs)
    }
    catch(error){
        return res.status(400).json({error});
    }
});

router.post('/createjobs',async(req,res)=>{
    // const jobs = new Job(req.body);
    // jobs.save().then(() => {
    //     res.status(201).send("created");
    // }).catch((e) => {
    //     res.status(400).send(e);
    // })
    // let jobs = await Job.insert(req.body);  
    // console.log(req.body);
    // res.send("created api");
    
    const u = new Job(req.body);

    u.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('save user successfully...');
    });
    console.log(req.body);
    res.status(201).send("created user");
})
// router.post("/createjobs", async(req,res) => {

//     const u = new Job(req.body);

//     u.save(function(err) {
//         if (err)
//            throw err;
//         else 
//            console.log('save user successfully...');
//     });
//     console.log(req.body);
//     res.status(201).send("created user");
// })

router.delete("/deletejobs/:id", async(req,res) => {
    // console.log("Deleted")
    // Job.deleteOne({_id:req.params.id}).then((result) =>{
    //     res.status(200).json(result)
    //     console.log("success")
    // }).catch((err)=>{
    //     console.warn(err)
    // })
    try{
        const deleteJob = await Job.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        } 
        res.send(deleteJob);
    }catch(e){
        res.status(500).send(e);
    }
    // res.status(200).send("Deleted");
})

router.put("/updatejobs/:id", async(req, res) => {
    const thing = new Job(req.body);

    Job.updateOne({_id: req.params.id}, thing).then(
        () => {
          res.status(201).json({
            message: 'Thing updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
})



module.exports = router;