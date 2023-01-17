import TextField from './TextField'
import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../UserSlice'

const EditUser = () => {
    const navigator = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)

    const param = useParams()
    console.log(param.id)
    const existingUsers = users.filter(user=>user.id === param.id)

    const {name ,email} = existingUsers[0] //// dought

    const [value, setvalue] = useState({
        name,
        email
    })

    const UpdateHandler = () => {
        setvalue({ name: "", email: "" })
        dispatch(editUser({
            id : param.id,
            name : value.name,
            email : value.email

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
                inputProps={{ type: "email", placeholder: "pramod@gmail.com" }}
                onchange={(e) => setvalue({ ...value, email: e.target.value })}
            /><br/>
            <button onClick={UpdateHandler}>Update</button>
        </div>
    )
}

export default EditUser