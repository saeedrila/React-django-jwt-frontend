import { useDispatch, useSelector } from 'react-redux'
import './UserUpdate.css'
import { useEffect} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { UserUpdateAction } from '../../Redux/Action/UserUpdateAction';


const UserUpdate = ()=>{
    const dispatch = useDispatch()
    const APIURL = useSelector(state=>state.APIURL.url)                                                                                                                                                                                                                                                 
    const user = useSelector(state=>state.userupdate)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const navigate = useNavigate()

    useEffect(()=>{

    async function Fetchdata(id){   
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await axios.get(`http://127.0.0.1:8000/api/user/edit_user/${id}`).then(response=> {
        dispatch(UserUpdateAction('username',response.data.username))
        dispatch(UserUpdateAction('email',response.data.email))
        dispatch(UserUpdateAction('phone',response.data.phone))
      }).catch(error => {
        if (error.response.status === 401) {
          navigate('/admin');
        } else {
          console.error(error);
        }
      })

        }
        Fetchdata(id)
    },[id, dispatch, navigate])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.put(`${APIURL}/edit_user/${id}`,user);
            if (response.data){
                navigate('/admin_pannel')
                alert('user details updated successfully')
      
            }else{
              alert('User update Failed')
            }
          }catch(error){
            console.error(error);
          }
    }
    return(
        <>
        <form className="update-form" onSubmit={handleSubmit} >
          <div class="form-group">
            <label >Name:</label>
            <input type="text" id="name" value={user.username} onChange={(e)=>{dispatch(UserUpdateAction(e.target.name,e.target.value))}} name="username" className="form-control" placeholder="Enter name" required/>
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" id="email" value={user.email} onChange={(e)=>{dispatch(UserUpdateAction(e.target.name,e.target.value))}} name="email" className="form-control" placeholder="Enter email" required/>
          </div>
          <div class="form-group">
            <label>Phone:</label>
            <input type="tel" id="phone" value={user.phone} onChange={(e)=>{dispatch(UserUpdateAction(e.target.name,e.target.value))}} name="phone" className="form-control" placeholder="Enter phone number" required/>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </>
    )
}

export default UserUpdate
