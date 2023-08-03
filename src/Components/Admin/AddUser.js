import { useDispatch, useSelector } from 'react-redux'
import './AddUser.css'
import { AddUserAction } from '../../Redux/Action/AddUserAction'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddUser =()=>{
    const adduser = useSelector(state=>state.adduser)
    const APIURL = useSelector(state=>state.APIURL.url)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit =async(e)=>{

        e.preventDefault()
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await axios.post(`${APIURL}/edit_user/`,adduser).then((r)=>{
            if(r.status === 201){
                alert("user created successfully")
                navigate('/admin_pannel')
            }else{
                alert("user creation failed")
            }
        })


    }



    return(

        <>
         <h1>Add User</h1>
            <div className="container">
        <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="username">Username:</label>
                <input type="text" value={adduser.username} onChange={(e)=>{dispatch(AddUserAction(e.target.name,e.target.value))}} id="username" name="username" required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" value={adduser.email} onChange={(e)=>{dispatch(AddUserAction(e.target.name,e.target.value))}} id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="phone">Phone:</label>
                <input type="password" value={adduser.phone} onChange={(e)=>{dispatch(AddUserAction(e.target.name,e.target.value))}} id="phone" name="phone" required/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" value={adduser.password} onChange={(e)=>{dispatch(AddUserAction(e.target.name,e.target.value))}} id="password" name="password" required/>
            </div>
            <input type="submit" value="Add User"/>
        </form>
    </div>
        </>

    )
}


export default AddUser