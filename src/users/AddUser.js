import React from 'react'
// import TextField from './TextField'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../UserSlice'
import { v4 as uuidv4 } from 'uuid'


const AddUSer = ({ lable, inputProps }) => {

    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [value, setValue] = useState({
        name: "",
        email: ""
    })


    const userHandler = () => {
        setValue({ name: "", email: "" })
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
            <h1>Add Your data</h1>
            <input lable="name" value={value.name} text="text" placeholder='pramod'
                onChange={(e) => setValue({ ...value, name:e.target.value })} />

            <br/><br/>
            <input lable="Email" value={value.email} text="text" placeholder="pramod@gmail.com"
                onChange={(e) => setValue({ ...value, email:e.target.value })} /><br/><br/>
            <button onClick={userHandler}>Submit</button>
        </div>
    )
}

export default AddUSer