import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'

export default function BountyList(props) {
    const { firstName, lastName, bountyAmount, living, type,  _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            {!editToggle ?
                <>
                    <h2> {firstName} {lastName} </h2>
                    <p> Amount {bountyAmount} </p>
                    <p>Living: {living ? "Alive":"Deceased"}</p>
                    <p>Type: {type}</p>
                    <button className="delete-btn" 
                        onClick={() => props.deleteBounty(_id)}>
                        Delete
                    </button>
                    <button 
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit Bounty
                    </button>
                </>
                :
                <>
                    <AddBountyForm 
                        firstName={firstName}
                        lastName={lastName}
                        bountyAmount={bountyAmount}
                        living={living}
                        type={type}
                        _id={_id}
                        btnText="Submit Bounty Update"
                        submit={props.editBounty}
                    />
                    <button 
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}