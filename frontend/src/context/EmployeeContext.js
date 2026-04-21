import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "Vidya",
      lastName: "Joshi",
      mobile: "9876543210",
      email: "vidya@gmail.com",
      gender: "Male",
      dob: "13/01/2021",
      country: "India",
      city: "Delhi"
    }
  ]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};