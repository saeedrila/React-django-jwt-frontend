const initialstate = {
  username:"",
  email:"",
  phone:""
  }
    
  const UserUpdateReducer = (state=initialstate,action)=>{
    switch(action.type){
      case "UPDATE_USER":
        return{
          ...state,
          [action.field]:action.value,
        }
      default:
        return state
    }
  }

export default UserUpdateReducer
