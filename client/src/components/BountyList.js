import React from 'react'

export default function BountyList(props) {
    const { firstName, lastName, bountyAmount, living, type,  _id } = props
    return (
        <div>
            <h2> {firstName} {lastName} </h2>
            <p> Amount {bountyAmount} </p>
            <p>Living: {living ? "Alive":"Deceased"}</p>
            <p>Type: {type}</p>
            <button className="delete-btn" onClick={() => props.deleteBounty(_id)}>Delete</button>

        </div>
    )
}