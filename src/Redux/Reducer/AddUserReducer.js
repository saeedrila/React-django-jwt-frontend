const initialstate = {
  username:"",
  email:"",
  phone:"",
  password:""
}

const AddUserReducer =(state=initialstate,action)=>{
  switch(action.type){
    case "Add_User":
      return{
        ...state,
        [action.field]:action.value
      }    
    default:
      return state        
  }
}

export default AddUserReducer
