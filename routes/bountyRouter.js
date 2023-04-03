const express = require("express")
const bountyRouter = express()
const Bounty = require('../models/bounty.js')

bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(bounties)
            
        })
    })
    
// POST One
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)    
        })
    })


//DELETE one

bountyRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (err, deletedItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem} from the database`)
    })
})

//PUT one
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId }, // find this one and update
        req.body, // Update the object with this data
        {new: true}, // Send back updated version
        (err, updatedBounty) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

// Get ONE bounty
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounties => bounties._id === bountyId)  
    if (!foundBounty) {
        const error = new Error("The item was not found")
        return next(error)
    }
    res.send(foundBounty)
})


// isLiving query (bool)
bountyRouter.get("/search/isliving", (req, res, next) => {
    
    
    Bounty.find({living: req.query.living}, (err, bounties) => {
        if (err) {
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(bounties)
    })

}

)



    module.exports = bountyRouter