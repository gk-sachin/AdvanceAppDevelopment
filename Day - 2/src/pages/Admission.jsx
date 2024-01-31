import { useState } from "react";
import "../assets/css/Admission.css"; 
import Navbar from "../components/Navbar";

function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phoneNumber: "",
    course: "",
    yogaCenter: "",
    city: "",
    state: "",
    country: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const courses = ["Course A", "Course B", "Course C"]; 
  const yogaCenters = ["Yoga Center 1", "Yoga Center 2", "Yoga Center 3"]; 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    let d = JSON.parse(localStorage.getItem("user"))
    if(!d) {
      d = []
    }
    d.push(formData)
    localStorage.setItem("user", JSON.stringify(d))
    setFormData({
        name: "",
        email: "",
        dob: "",
        phoneNumber: "",
        course: "",
        yogaCenter: "",
        city: "",
        state: "",
        country: "",
        address: "",
      });
  };

  return (
    <>
    <Navbar/>
    <div className="admission-container">
      <h2 className="he">Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="yogaCenter">Yoga Center:</label>
          <select
            id="yogaCenter"
            name="yogaCenter"
            value={formData.yogaCenter}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Yoga Center</option>
            {yogaCenters.map((yogaCenter, index) => (
              <option key={index} value={yogaCenter}>
                {yogaCenter}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Admission;
