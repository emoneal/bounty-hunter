import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = {firstName: "", lastName: "", bountyAmount: "", living: "", type: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.addBounty(inputs)
        setInputs(initInputs)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>First Name:   </label>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            
            <label>Last Name:   </label>
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            
            <br />
            <label>Bounty Amount:   </label>
            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <label>Alive?   </label>
            <input
                type="text"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="true/false"
            />
            
            <br />
            <label>Type:   </label>
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Jedi/Sith"
            />
            <br />
            <br />
            <button>Add Bounty</button>
        </form>
        </>
    )
}