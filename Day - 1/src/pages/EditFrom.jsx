// EditForm.js

import { useState } from "react";
import PropTypes from "prop-types";
import "../assets/css/EditForm.css"; // Import your CSS file

const EditForm = ({ data, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState({ ...data });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Details</h2>

      {editedData && (
        <>
        <div className="fst">
          <label>
            Name:
            <input type="text" name="name" value={editedData.name} onChange={handleChange} />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={editedData.email} onChange={handleChange} />
          </label>
        </div>
        <div className="snd">
          <label>
            Dob:
            <input type="date" name="dob" value={editedData.dob} onChange={handleChange} />
          </label>

          <label>
            Phone Number:
            <input type="number" name="phoneNumber" value={editedData.phoneNumber} onChange={handleChange} />
          </label>
        </div>
        <div className="trd">
          <label>
            City:
            <input type="text" name="city" value={editedData.city} onChange={handleChange} />
          </label>

          <label>
            State:
            <input type="text" name="state" value={editedData.state} onChange={handleChange} />
          </label>
        </div>
         
          <label>
            Address:
            <input type="text" name="address" value={editedData.address} onChange={handleChange} />
          </label>

          
          
          <div className="button-container">
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

EditForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditForm;
