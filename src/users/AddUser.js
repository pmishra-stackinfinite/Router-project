import React from 'react'
import TextField from './TextField'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../UserSlice'
import { v4 as uuidv4 } from 'uuid'


const AddUSer = ({ lable, inputProps }) => {

    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [value, setvalue] = useState({
        name: "",
        email: ""
    })


    const userHandler = () => {
        setvalue({ name: "", email: "" })
        console.log(value)
        dispatch(addUser({
            id: uuidv4(),
            name: value.name,
            email: value.email
        }))
        
        navigator("/")
    }


    return (
        <div>
            <TextField
                lable="Name"
                inputProps={{ type: "text", placeholder: "pramod" }}
                value={value.name}
                onchange={(e) => setvalue({ ...value, name: e.target.value })}
            /><br />

            <TextField
                lable="Email"
                value={value.email}
                inputProps={{ type: "email", placeholder: "pramod@gmail.com" }}
                onchange={(e) => setvalue({ ...value, email: e.target.value })}
            /><br />
            <button onClick={userHandler}>Submit</button>
        </div>
    )
}

export default AddUSer