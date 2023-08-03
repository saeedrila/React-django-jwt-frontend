import UserSignupReducer from "../Reducer/UserSignupReducer";
import { combineReducers } from "redux";
import { createStore } from "redux";
import UserLoginReducer from "../Reducer/UserLoginReducer";
import ApiUrlReducer from "../Reducer/ApiUrlReducer";
import AdminLoginReducer from "../Reducer/AdminLoginReducer";
import UserListReducer from "../Reducer/UserListReducer";
import UserUpdateReducer from "../Reducer/UserUpdateReducer";
import SearchReducer from "../Reducer/SearchReducer";
import ProfileReducer from "../Reducer/ProfileReducer";
import AddUserReducer from "../Reducer/AddUserReducer";


const rootReducer = combineReducers({
  UserSignup : UserSignupReducer,
  UserLogin : UserLoginReducer,
  APIURL : ApiUrlReducer,
  AdminLogin : AdminLoginReducer,  
  userlist : UserListReducer,
  userupdate : UserUpdateReducer,
  search : SearchReducer,
  profile : ProfileReducer,
  adduser : AddUserReducer
})


const store = createStore( rootReducer);

export default store;
