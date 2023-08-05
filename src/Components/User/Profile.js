import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ProfileAction } from '../../Redux/Action/ProfileAction'


const Profile = ()=>{
    const profile = useSelector(state=>state.profile.user)
    const APIURL = useSelector(state=>state.APIURL.url)
    const[uploadimg,setUploadimg] = useState()
    const dispatch = useDispatch()
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const token = localStorage.getItem('token')

    const handleUpdate=(e)=>{
        e.preventDefault()
        setUploadimg(e.target.files[0])

        console.log(uploadimg)
 
        UpdateData()

        async function UpdateData(){
            const formData = new FormData();
            formData.append('profile',e.target.files[0]);
            await axios.put(`${APIURL}/user_profile/${id}`,formData,{
                headers: {
                  "Content-Type": "multipart/form-data",
                  "Authorization":`Bearer ${token}`
                },
              })
        }
    }

    useEffect(()=>{
        async function FetchData(){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.get(`http://127.0.0.1:8000/api/user/user_profile/${id}`).then(r=>{
                dispatch(ProfileAction(r.data))
                console.log(r.data)
            })
        }
        FetchData()
    },[id, dispatch, token])
    return(
        <>
        <div className="profile-container">
   <div className="profile-header">
     <h2>Profile</h2>
   </div>
   <div className="profile-info">
     <div className="profile-picture">
     {
          uploadimg?<img src={uploadimg?URL.createObjectURL(uploadimg):""} alt="" />:
         profile.profile? <img src={`http://localhost:8000${profile.profile}`} alt="Profile" />:<img alt='profile'/>
            }

       <input type='file' onChange={handleUpdate} accept='image/*' className='img-upload'></input>
     </div>
     <div className="profile-details">
       <h3>{profile.username}</h3>
       <p>{profile.email}</p>
       {/* <button className="edit-btn">Update Profile</button> */}
     </div>
   </div>
   <div className="profile-listings">
     {/* <h3>My Listings</h3>
     <ul>
       <li>Listing 1</li>
       <li>Listing 2</li>
       <li>Listing 3</li>
     </ul> */}
   </div>
 </div>
     
     </>
    )
}

export default Profile
