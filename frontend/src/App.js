import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import StudentForm from "./pages/StudentForm";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route
            path="/login"
            element={!user ? <AdminLogin /> : <Navigate to="/admin" />}
          />
          <Route
            path="/admin"
            element={user ? <AdminDashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
