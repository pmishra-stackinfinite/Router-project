import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../UserSlice'

const UserList = () => {

    const users = useSelector(items => items.users)
    const dispatch = useDispatch()
    console.log(users)

    // const users = [
    //     { id: 1, name: "Pramod", Email: "pramod@text.com" },
    //     { id: 2, name: "Vicky", Email: "Rohan@text.com" },
    //     { id: 3, name: "Sohan", Email: "Sohan@text.com" }
    // ]

    const DeleteHandler = (id) => {
        dispatch(deleteUser({id}))
    }
    const renderCart = () => users.map((user) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Link to={`edit-user/${user.id}`}><i className="bi bi-pencil-square"></i></Link></td>
            <td ><button onClick={()=>DeleteHandler(user.id)}><i className="bi bi-trash3-fill"></i></button></td>
        </tr>
    ))
    // deleteUser
    return (
        <div>
            <Link to="/add-user"><button>Add user</button></Link>
            {users.length ?
                <table className='table table-stipe'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCart()}
                    </tbody>
                </table>
                : <p>No user</p>}
        </div>
    )
}

export default UserList
