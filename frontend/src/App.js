import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import StudentForm from "./pages/StudentForm";
import AdminLogin from "./pages/AdminLogin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<StudentForm />} />
            <Route path="/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
