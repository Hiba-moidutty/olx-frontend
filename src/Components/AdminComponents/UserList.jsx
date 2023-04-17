import React ,{ useEffect, useState } from "react";
import './UserList.css';
import './users.css';
import Footer from  './Footer/AdminFooter';
import Header from './Header/AdminHeader';
import Swal from 'sweetalert2';
import AdminHeader from "./Header/AdminHeader";
import { useNavigate } from "react-router-dom";
import { adminUserList ,adminDeleteUser} from "../../utils/Constants";
import axios from '../../utils/axios';
import Cookies from "js-cookie";


function UserList(){
  const navigate = useNavigate()
  const [users,setUsers] = useState([])
  const [records, setRecords] = useState([])

  useEffect (()=>{
    const token = Cookies.get('admin_jwt')
		if (token){
			navigate('/userlist')
      getUserList();
		}
    else{
      navigate('/adminLogin')
    }
  },[navigate])

  const getUserList=()=>{
    axios.get(adminUserList).then((response)=>{
      setUsers(response.data)
    }).catch((err=>
      console.log("errrrroooooorrrrr")))
  }

  const deleteUser=(id)=>{
    console.log(id,"idddddd")
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes,delete it!'
    }).then((result)=>{
      if (result.isConfirmed){
        axios.get(`${adminDeleteUser}/${id}`).then((response)=>{
          getUserList();
        })
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
      }
    })
  }

  function handleFilter(e) {
    const newData = users.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  }


  return(
    <div>
      <AdminHeader />

      <br />
      <br />
      
        <input style={{marginLeft:'150px'}} type="text" placeholder="Search User"  onChange={handleFilter} />
      <button className="addButtonAdmin" onClick={()=>navigate(`/adminAddUser`)}>Add</button>
      <br />
      <br />
      <br />
        <table id="customers">
        <tr>
            <th className="w-5">No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Action</th>
        </tr>                 
        {records.length > 0
        ? records.map((user,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className='editt' onClick={()=>navigate(`/updateUser/${user.id}`)}>Edit</button>
          </td>
          <td> 
            <button className='deletee' onClick={()=>deleteUser(user.id)}>Delete</button>
          </td>
          </tr>

        )):users.map((user,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className='editt' onClick={()=>navigate(`/updateUser/${user.id}`)}>Edit</button>
          </td>
          <td> 
            <button className='deletee' onClick={()=>deleteUser(user.id)}>Delete</button>
          </td>
          </tr>

        ))
      }

        </table>
        <Footer />
    </div>
  )
}

export default UserList  