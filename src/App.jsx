import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorList from "./pages/Admin/DoctorList";
const App = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <>
      {/* ToastContainer should always be rendered */}
      <ToastContainer autoClose={2000}/>

      {aToken ? (
        <div className="bg-[#F8F9FD]">
          <Navbar />
          <div className="flex items-start">
            <Sidebar />
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<AllAppointment />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<DoctorList />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};


export default App;
