import UserLogin from "./Components/USER/userLogin";
import UserSignup from "./Components/USER/userSignup";
import AdminLogin from "./Components/ADMIN/adminLogin";
import AdminPannel from "./Components/ADMIN/adminPannel";
import Profile from "./Components/USER/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserUpdate from "./Components/ADMIN/UserUpdate";
import AddUser from "./Components/ADMIN/AddUser";
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
          <Route path="/" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
