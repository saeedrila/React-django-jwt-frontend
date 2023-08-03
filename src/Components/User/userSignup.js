import './userSignup.css'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { UserSignupAction } from '../../Redux/Action/UserSignupAction'
import axios from 'axios';


const UserSignup = ()=>{
  const signup = useSelector(state=>state.UserSignup)
  const APIURL=useSelector(state=>state.APIURL.url)
  const dispatch = useDispatch()
  const history = useNavigate()

  
  const handleSubmit = async (e)=>{
    e.preventDefault()

    try{
      const response = await axios.post(`${APIURL}/register/`,signup);
      if (response.data.success){
        alert('registration success')
        history('/')
      }
      else{
        alert('User Registration Failed')
      }
    }catch(error){
      console.error(error);
      if (error.response.status === 400 && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert('An error occurred during registration.');
      }
    }
  }
    return(

        <>
         <div className="signupParentDiv">
        {/* <img width="200px" height="200px" src="" alt='logo'></img> */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={signup.username}
            onChange={(e)=>{dispatch(UserSignupAction(e.target.name,e.target.value))}}
            id="username"
            name="username"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={signup.email}
            onChange={(e)=>{dispatch(UserSignupAction(e.target.name,e.target.value))}}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={signup.phone}
            onChange={(e)=>{dispatch(UserSignupAction(e.target.name,e.target.value))}}
            id="phone"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={signup.password}
            onChange={(e)=>{dispatch(UserSignupAction(e.target.name,e.target.value))}}
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/'>Login</Link>
      </div>
        </>
    )
}

export default UserSignup