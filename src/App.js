import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes,Switch, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Login from './Components/Login/Login';
import AdminPage from './Pages/AdminPage';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Components/Signup/Signup';
import AdminAddUser from './Components/AdminComponents/AdminAddUser';
import UpdateUser from './Components/AdminComponents/UpdateUser';
import UserList from './Components/AdminComponents/UserList';
import After from './Components/CartButtons/After';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            
          <Route exact path ='/'element={<Home />}/>
          <Route path ='/login' element={ <Login />}/>
          <Route path ='/signup'element= {<Signup />}/>
          <Route path ='/adminlogin'element= {<AdminPage />}/>
          <Route path ='/userlist'element= {<UserList />}/>
          <Route path ='/updateUser/:id'element= {<UpdateUser />}/>
          <Route path ='/adminAddUser'element= {<AdminAddUser />}/>
          <Route path ='/profile' element={<Profile />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
