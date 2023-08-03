import { useDispatch, useSelector } from 'react-redux'
import './adminUserlist.css'
import { useNavigate } from 'react-router-dom'
import { UserUpdateAction } from '../../Redux/Action/UserUpdateAction'
import axios from 'axios'

const AdminUserlist = ()=>{
  const userlist = useSelector(state=>state.userlist.userlist)
  const APIURL = useSelector(state=>state.APIURL.url)
  const dispatch = useDispatch()
  const navigete = useNavigate()

  const handleUpdate = (id)=>{

      dispatch(UserUpdateAction(id))
      navigete(`/user_update?id=${id}`)

  }

  const deleteHandler =async(id)=>{
    try{
      await axios.delete(`${APIURL}/edit_user/${id}`);
        alert('User deleted successfully')
        window.location.reload();

    }catch(error){
      console.error(error);
    }
    

  }

    return(
        <>
  
   <body>    
  <main>
       <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Phone</th>
             <th>Action</th>
             <th> <button onClick={()=>navigete('/add_user')}>Add</button> </th>
           </tr>
         </thead>
         <tbody>

          {userlist.map(obj=>{

            return(

              <tr key={obj.id}>
              <td>{obj.username}</td>
              <td>{obj.email}</td>
              <td>{obj.phone}</td>
              <td>
                
                <button onClick={()=>{
                  handleUpdate(obj.id)}
                  
                  }>Update</button>
                <button onClick={()=>deleteHandler(obj.id)}>Delete</button>
                </td>
            </tr>

            )
          })}

 
         </tbody>
       </table>
     </main>
   </body>
         
        </>
    )
}

export default AdminUserlist