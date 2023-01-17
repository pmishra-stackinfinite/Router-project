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
    const existingUsers = users.filter(user => user.id === param.id)

    const { name, email } = existingUsers[0] //// dought

    const [value, setValue] = useState({
        name,
        email
    })

    const UpdateHandler = () => {

        dispatch(editUser({
            id: param.id,
            name: value.name,
            email: value.email

        }))
        setValue({ name: "", email: "" })
        navigator("/")
    }
    return (
        <div>
            <input
                lable="Name"
                type= "text" placeholder= "pramod" 
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
            /><br />
            <input
                lable="Email"
                value={value.email}
                 type= "email" placeholder= "pramod@gmail.com" 
                onChange={(e) => setValue({ ...value, email: e.target.value })}
            /><br />
            <button onClick={UpdateHandler}>Update</button>
        </div>
    )
}

export default EditUser