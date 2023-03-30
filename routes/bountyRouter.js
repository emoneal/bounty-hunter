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
    

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName + " " + newBounty.lastName} bounty to the list!`)
    })


// Get ONE bounty
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounties => bounties._id === bountyId)  
    res.send(foundBounty)
})

bountyRouter.get("/search/isliving", (req, res) => {
    const isLiving = req.query.living
    const filteredLiving = bounties.filter(bounty => bounty.living === isLiving)
    console.log (isLiving)
    console.log(filteredLiving)
    res.send(filteredLiving)
})

    module.exports = bountyRouter