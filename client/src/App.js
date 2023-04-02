import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import BountyList from "./components/BountyList"
import AddBountyForm from "./components/AddBountyForm"

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err=> console.log(err.response.data.errMsg))
  }

  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err=> console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className="App">
      <AddBountyForm 
        submit={addBounty}
        btnText="Add Bounty"
      />
      {bounties.map(bounty => 
        <BountyList {...bounty} 
        key={bounty.firstName}
        deleteBounty={deleteBounty}
        editBounty={editBounty} />)}
    
    </div>
)}

export default App;
