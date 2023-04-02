import React, { useState } from 'react'

export default function AddBountyForm(props) {
    const initInputs = {firstName: "" || props.firstName, lastName: "" || props.lastName, bountyAmount: "" || props.bountyAmount, living: "" || props.living, type: "" || props.type}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs, props._id)
        props.submit(inputs, props._id)
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
            <button> {props.btnText} </button>
        </form>
        </>
    )
}