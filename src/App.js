import UserLogin from "./Components/User/userLogin";
import UserSignup from "./Components/User/userSignup";
import AdminLogin from "./Components/Admin/adminLogin";
import AdminPannel from "./Components/Admin/adminPannel";
import Profile from "./Components/User/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserUpdate from "./Components/Admin/UserUpdate";
import AddUser from "./Components/Admin/AddUser";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin_pannel"
            element={
              <ProtectedRoute>
                <AdminPannel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user_update"
            element={
              <ProtectedRoute>
                <UserUpdate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add_user"
            element={
              <ProtectedRoute>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
