import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import "./AddEmployee.css";

const countryCityMap = {
  India: ["Hyderabad", "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"],
  "Sri Lanka": ["Colombo", "Kandy", "Galle", "Jaffna", "Vavuniya"],
  USA: ["New York", "Los Angeles", "Chicago", "Houston"],
  UK: ["London", "Manchester", "Liverpool"],
  Australia: ["Sydney", "Melbourne", "Perth"]
};

const AddEmployee = () => {
  usePageTitle("Employee Create");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "Male",
    address: "",
    country: "",
    city: "",
    skills: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      setForm({ ...form, country: value, city: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSkillChange = (skill) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      alert(data.message);
      navigate("/dashboard/employees");

    } catch (err) {
      console.error(err);
      alert("Error adding employee");
    }
  };

  return (
    <div className="employee-container">

      {/* Header */}
      <div className="employee-header">
        <h2>Employee <span>Create</span></h2>

        <div className="breadcrumb">
          <span onClick={() => navigate("/dashboard")}>Home</span> &gt;
          <span onClick={() => navigate("/dashboard/employees")}> Employee</span> &gt;
          <span className="active"> Create</span>
        </div>
      </div>

      <div className="employee-card">
        <h3>Employee Details</h3>

        {/* Row 1 */}
        <div className="row">
          <div>
            <label>First Name</label>
            <input name="firstName" onChange={handleChange} />
          </div>

          <div>
            <label>Last Name</label>
            <input name="lastName" onChange={handleChange} />
          </div>

          <div>
            <label>Email</label>
            <input name="email" onChange={handleChange} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div>
            <label>Mobile Number</label>
            <input name="mobile" onChange={handleChange} />
          </div>

          <div>
            <label>Date Of Birth</label>
            <input type="date" name="dob" onChange={handleChange} />
          </div>

          {/* ✅ FIXED GENDER ALIGNMENT */}
          <div className="gender">
            <label>Gender :</label>

            <div className="gender-options">
              <label className="radio-item">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === "Male"}
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>

              <label className="radio-item">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === "Female"}
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="full">
          <label>Address</label>
          <textarea name="address" onChange={handleChange}></textarea>
        </div>

        {/* Country + City */}
        <div className="row">
          <div>
            <label>Country</label>
            <select name="country" value={form.country} onChange={handleChange}>
              <option value="">--Select Country--</option>
              {Object.keys(countryCityMap).map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div>
            <label>City</label>
            <select name="city" value={form.city} onChange={handleChange}>
              <option value="">--Select City--</option>
              {form.country &&
                countryCityMap[form.country].map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
            </select>
          </div>
        </div>

        {/* Skills */}
        <div className="skills">
          <label>Skills</label>

          {/* ✅ FIXED ALIGNMENT */}
          <div className="skill-grid">
            {[
              "AWS",
              "QA-Automation",
              "DevOps",
              "WebServices",
              "Full Stack Developer",
              "Middleware"
            ].map((skill) => (
              <label key={skill} className="skill-item">
                <input
                  type="checkbox"
                  onChange={() => handleSkillChange(skill)}
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="actions">
          <button className="save" onClick={handleSubmit}>Save</button>
          <button className="cancel" onClick={() => navigate("/dashboard/employees")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;