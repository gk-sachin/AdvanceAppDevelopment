import { useEffect, useState } from "react";
import "../assets/css/UserDashboard.css";
import EditForm from "../pages/EditFrom";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const navigate = useNavigate();
  const [admissionDetails, setAdmissionDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("user"));
    setAdmissionDetails(formData);
  }, []);

  const navigateCourses = () => {
    navigate("/user-dashboard/courses");
  };
  const navigateHome = () => {
    navigate("/");
  };
  const navigateDashboard = () => {
    navigate("/user-dashboard");
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleSave = (editedData) => {
    const updatedAdmissionDetails = [...admissionDetails];
    updatedAdmissionDetails[editIndex] = editedData;
    setAdmissionDetails(updatedAdmissionDetails);
    setIsEditing(false);
  };

  return (
    <div className="dashboard-contents">
      <div className="sidebarsss">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={navigateDashboard}>Dashboard</li>
          <li onClick={navigateCourses}>Courses</li>
          <li onClick={navigateHome}>Logout</li>
        </ul>
      </div>
      <div className="contents">
        <div className="dashboard-containers">
          {isEditing && (
            <EditForm
              data={admissionDetails[editIndex]}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          )}

          {!isEditing && (
            <div className="cardss">
              <h2>Admission Details</h2>
              <table className="ttt">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Phone Number</th>
                    <th>COURSE</th>
                    <th>YOGA CENTER</th>
                    <th>CITY</th>
                    <th>STATE</th>
                    <th>COUNTRY</th>
                    <th>ADDRESS</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionDetails.map((admission, index) => (
                    <tr key={index}>
                      <td>{admission.name}</td>
                      <td>{admission.email}</td>
                      <td>{admission.dob}</td>
                      <td>{admission.phoneNumber}</td>
                      <td>{admission.course}</td>
                      <td>{admission.yogaCenter}</td>
                      <td>{admission.city}</td>
                      <td>{admission.state}</td>
                      <td>{admission.country}</td>
                      <td>{admission.address}</td>
                      <td>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
