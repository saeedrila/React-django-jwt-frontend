const initialstate ={
  username:"",
  email:"",
  phone:"",
  password:""
}

const UserSignupReducer = (state=initialstate,action)=>{
  switch(action.type){
    case "USER_SIGNUP":
      return{
        ...state,
        [action.field]:action.value
      }
    default:
      return state
  }
}

export default UserSignupReducer
