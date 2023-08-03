const initialstate = {
  key:""
}

const SearchReducer = (state=initialstate,action)=>{
  switch(action.type){
    case "SEARCH":
      return{
        ...state,
        key:action.key
      }
    default:
      return state
  }
}

export default SearchReducer
