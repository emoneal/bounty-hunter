const express = require("express")
const bountyRouter = express()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {firstName: "Han", lastName: "Solo", living: true, bountyAmount: 20000, type: "jedi", _id: uuidv4()},
    {firstName: "Darth", lastName: "Maul", living: false, bountyAmount: 100000, type: "sith", _id: uuidv4()}

]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties) // Get all bounties
    })
    
// POST One
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName + " " + newBounty.lastName} bounty to the list!`)
    })


//DELETE one

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`"Successfully deleted movie with ID ${bountyId}"`)
})

//PUT one
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

// Get ONE bounty
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounties => bounties._id === bountyId)  
    res.send(foundBounty)
})


// isLiving query (bool)
bountyRouter.get("/search/isliving", (req, res) => {
    let isLiving = req.query.living
    if (isLiving === "true") {
        isLiving = true
        const filteredLiving = bounties.filter(bounty => bounty.living === isLiving)
        res.send(filteredLiving)
    } else if (isLiving === "false") {
        isLiving = false
        const filteredLiving = bounties.filter(bounty => bounty.living === isLiving)
        res.send(filteredLiving)
    }

})



    module.exports = bountyRouter