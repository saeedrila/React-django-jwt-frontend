import { useDispatch, useSelector } from 'react-redux'
import './adminLogin.css'
import { AdminLoginAction } from '../../Redux/Action/AdminLoginAction'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminLogin = ()=> {
  const AdminLogin = useSelector(state=>state.AdminLogin)
  const APIURL = useSelector(state=>state.APIURL.url)
  const dispatch = useDispatch()
  const navigete = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    try{
      const response = await axios.post(`${APIURL}/admin/`,AdminLogin);
      console.log(response)
      if (response.data.token){
        localStorage.setItem('token', response.data.token);
        navigete('/admin_pannel')

      }else{
        alert('login Failed')
      }
    }catch(error){
      console.error(error);
    }
  }
    return(
        <>
        <head>
    <title>Admin Login</title>
  </head>
  <body>
    <header>
      <h1>Admin Login</h1>
    </header>
    <main className='main_body '>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" value={AdminLogin.email}  onChange={(e)=>{dispatch(AdminLoginAction(e.target.name,e.target.value))}} id="email" name="email" placeholder="Enter email"/>
        <label for="password">Password</label>
        <input type="password" value={AdminLogin.password} onChange={(e)=>{dispatch(AdminLoginAction(e.target.name,e.target.value))}} id="password" name="password" placeholder="Enter password"/>
        <button type="submit">Login</button>
      </form>
    </main>
    <footer>
      <p>&copy; All rights reserved.</p>
    </footer>
  </body>
        </>
    )
}

export default AdminLogin