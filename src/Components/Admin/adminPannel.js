import { useEffect } from 'react'
import './adminPannel.css'
import AdminUserlist from './adminUserlist'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { UserListAction } from '../../Redux/Action/UserListAction'
import { Link } from 'react-router-dom'
import { SearchAction } from '../../Redux/Action/SearchAction'

const AdminPannel = ()=> {
  const dispatch=useDispatch()
  const APIURL = useSelector(state=>state.APIURL.url)
  const searchkey = useSelector(state=>state.search.key)
  useEffect(()=>{

    async function Fetchdata(){
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios.get(`http://127.0.0.1:8000/api/user/userlist/`).then(response=> {
      dispatch(UserListAction(response.data))
    })
    }

    Fetchdata()

  },[dispatch])

  const searchHandler = async(e)=>{
    console.log(e.target.value)
    e.preventDefault()
    dispatch(SearchAction(e.target.value))

    await axios.get(`${APIURL}/search_user`,{ params: { username: e.target.value } }).then(response => {
      dispatch(UserListAction(response.data))
    })
    .catch(error => {
    
    });
  }


  const logoutHandler = async()=>{

   await axios.post(`${APIURL}/logout/`)
    localStorage.removeItem('token');
    window.location.reload()

  }


    return(
        <>
        
  <head>
    <title>Admin Panel</title>
  </head>
    <header>
      <h1>Admin Panel</h1>
      <div className='search_component'>
        <input className='searchbar' value={searchkey} onChange={searchHandler} type="text" placeholder="Search..."/>
        <button className='search_button' type="submit">Search</button>
      </div>
      <button className='logout' onClick={logoutHandler}>Logout</button>
    </header>
    <nav>
      <ul>
        <li><Link>Dashboard</Link></li>
        <li><Link>Categories</Link></li>
        <li><Link>Products</Link></li>
        <li><Link>Orders</Link></li>
        <li><Link>Users</Link></li>
      </ul>
    </nav>
    <main>
    <h1>User List</h1>
    <AdminUserlist/>
    </main>
    <footer>
      <p>&copy;All rights reserved.</p>
    </footer>


        </>
    )
}

export default AdminPannel