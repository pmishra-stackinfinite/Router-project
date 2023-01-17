import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteUser } from "./userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const renderCard = () => users.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><Link to={`edit-user/${user.id}`}><i className="bi bi-pencil-square"></i></Link></td>
      <td>
        <button onClick={() => handleRemoveUser(user.id)}>
          <i className="bi bi-trash3-fill"></i>
        </button>
      </td>
    </tr>
  ))

  return (
    <div>
      <Link to="/add-user"><Button>Add User</Button></Link>
      <div>
        {users.length ?
          <table class="table table-dark">
            <thead >
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {renderCard()}
            </tbody>
          </table>
          : <p>No user</p>}
      </div>
    </div>
  )
}

export default UserList