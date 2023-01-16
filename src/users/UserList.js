import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserList = () => {

    const users = useSelector(items => items.users)
    console.log(users)

    // const users = [
    //     { id: 1, name: "Pramod", Email: "pramod@text.com" },
    //     { id: 2, name: "Vicky", Email: "Rohan@text.com" },
    //     { id: 3, name: "Sohan", Email: "Sohan@text.com" }
    // ]

    const renderCart = () => users.map((user) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><Link to={`edit-user/${user.id}`}><i className="bi bi-pencil-square"></i></Link></td>
            <td><i className="bi bi-trash3-fill"></i></td>
        </tr>
    ))

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
