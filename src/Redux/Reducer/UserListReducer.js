const initialstate={
  userlist:[]
}

const UserListReducer =(state=initialstate,action)=>{
  switch(action.type){
    case "UPDATE_USERLIST":
      return{
        ...state,
        userlist:action.userlist
      }
    default:
      return state
  }
}

export default UserListReducer
