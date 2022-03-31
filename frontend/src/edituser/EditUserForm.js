import React, { useState } from "react";
import { Button } from "@mui/material";

function EditUserForm ({ users, setEditUser, editUserName, editUser}) {

    const handleChange = (e) => {
        setEditUser(e.target.value)
    }

    const handleUserSubmit = (e) => {
        e.preventDefault()
        editUserName ()
    }

    return (
        <>
        <form className="form-style-7" id='myForm' onSubmit={handleUserSubmit}>
            <ul>
                <li>
                    <label htmlFor="name">Change User Name</label>
                    <input onChange={handleChange}type="text" value={editUser} placeholder={users[0].name}/>
                    <span>Edit your user name</span>
                </li>
                <li>
                    <Button id='productbtn' type="submit" value="Send This">Save Changes</Button>
                </li>
            </ul>
        </form>
        </>
    );
}

export default EditUserForm;
