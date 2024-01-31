
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./Admin/Dashboard";
import Admission from "./pages/Admission";
import ContactUs from "./pages/ContactUs";
import UserDashboard from "./pages/UserDashboard";
import DashboardCourse from "./pages/DashboardCourse";




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs/>} /> 
          <Route path="/user-dashboard" element={<UserDashboard/>} />
          <Route path="/user-dashboard/courses" element={<DashboardCourse/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
