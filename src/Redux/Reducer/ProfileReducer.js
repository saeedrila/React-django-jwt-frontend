const initialstate = {
  user:{}
}

const ProfileReducer=(state=initialstate,action)=>{
  switch(action.type){
    case 'USER_PROFILE':
      return{
        ...state,
        user:action.user
      }
    default:
      return state
    }
}

export default ProfileReducer
