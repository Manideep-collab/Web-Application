import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";
import "./EmployeeList.css";

const EmployeeList = () => {
  usePageTitle("Employee Search");

  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  // SEARCH STATES
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // PAGINATION STATES
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // FETCH DATA
  useEffect(() => {
    fetch("http://127.0.0.1:8000/employees/")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error(err));
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await fetch(`http://127.0.0.1:8000/employees/${id}`, {
        method: "DELETE",
      });

      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  // EDIT
  const handleEdit = (emp) => {
    navigate("/dashboard/add-employee", { state: emp });
  };

  // SEARCH
  const handleSearch = () => {
    setIsSearching(true);

    let result = employees;

    if (name.trim() !== "") {
      const searchValue = name.toLowerCase().trim();

      result = result.filter((emp) => {
        const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase();
        return fullName.includes(searchValue);
      });
    }

    if (mobile.trim() !== "") {
      result = result.filter((emp) =>
        emp.mobile.toString().includes(mobile.trim())
      );
    }

    setFilteredEmployees(result);
    setCurrentPage(1); // reset to first page
  };

  // CLEAR
  const handleClear = () => {
    setName("");
    setMobile("");
    setFilteredEmployees([]);
    setIsSearching(false);
    setCurrentPage(1);
  };

  // FINAL DATA
  const displayData = isSearching ? filteredEmployees : employees;

  // PAGINATION LOGIC
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentEmployees = displayData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(displayData.length / itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>

      {/* HEADER */}
      <div className="page-header">
        <h2>
          Employee <span className="sub">Search</span>
        </h2>

        <div className="breadcrumb">
          <span onClick={() => navigate("/dashboard")}>Home</span> &gt;
          <span> Employee</span> &gt;
          <span className="active"> Search</span>
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="search-box">
        <label>Name</label>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Mobile No</label>
        <input
          type="text"
          placeholder="Mobile No"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button className="btn-green" onClick={handleSearch}>
          Search
        </button>

        <button className="btn-red" onClick={handleClear}>
          Clear
        </button>

        <button
          className="btn-blue"
          style={{ marginLeft: "auto" }}
          onClick={() => navigate("/dashboard/add-employee")}
        >
          Add Employee
        </button>
      </div>

      {/* TABLE */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile No</th>
            <th>Email Id</th>
            <th>Country</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentEmployees.length > 0 ? (
            currentEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.first_name}</td>
                <td>{emp.last_name}</td>
                <td>{emp.mobile}</td>
                <td>{emp.email}</td>
                <td>{emp.country}</td>
                <td>{emp.city}</td>

                <td className="action-btns">
                  <button
                    className="btn-green"
                    onClick={() => handleEdit(emp)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn-red"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Employees Found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div style={styles.paginationContainer}>
        <span>
          Showing {displayData.length === 0 ? 0 : indexOfFirst + 1} to{" "}
          {Math.min(indexOfLast, displayData.length)} of {displayData.length} entries
        </span>

        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                fontWeight: currentPage === i + 1 ? "bold" : "normal",
              }}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default EmployeeList;

const styles = {
  paginationContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};