import './App.css';
import UserList from './users/UserList';
import { Route,Routes } from 'react-router-dom';
import AddUSer from './users/AddUser';
import EditUser from './users/editUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList />}/>
        <Route path='/add-user' element={<AddUSer />}/>
        <Route path='/edit-user/:id' element={<EditUser />}/>
      </Routes>
      
    </div>
  );
}

export default App;
