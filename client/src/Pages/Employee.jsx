import React, { useState } from "react";
import "./employee.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Employee = () => {
  const [bl, setBl] = useState(true);
  const navigate = useNavigate();

  const [emp, setEmp] = useState({
    name: "",
    empid: "",
    department: "",
    designation: "",
    gender: "",
    salary: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleEmp = (e) => {
    setEmp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    console.log(emp);
    if (
      !emp.name ||
      !emp.empid ||
      !emp.department ||
      !emp.designation ||
      !emp.gender ||
      !emp.salary
    ) {
      alert("Please fill All the Fields");
      return;
    }

    setBl(!bl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emp.address || !emp.email || !emp.phone) {
      alert("Please fill All the Fields");
      return;
    }

    await axios.post("http://localhost:8080/employee", emp, {
      withCredentials: true,
    });

    setBl(!bl);
    navigate("/");
  };

  const Comp1 = () => {
    return (
      <div>
        <div className="ipt">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={emp.name}
            onChange={handleEmp}
          />
        </div>
        <div className="ipt">
          <label htmlFor="EmpId">Employee Id</label>
          <input
            type="text"
            placeholder="Employee Id"
            name="empid"
            onChange={handleEmp}
            value={emp.empid}
          />
        </div>
        <div className="ipt">
          <label htmlFor="Department">Department</label>
          <select
            name="department"
            onChange={handleEmp}
            value={emp.department}
            id=""
          >
            <option value="None">None</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
          </select>
        </div>
        <div className="ipt">
          <label htmlFor="DOB">DOB</label>
          <input type="date" />
        </div>
        <label htmlFor="Gender">Gender</label>
        <div className="radio">
          <label className="rd">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleEmp}
              checked={emp.gender === "male"}
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="rd">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleEmp}
              checked={emp.gender === "female"}
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
        <div className="ipt">
          <label htmlFor="Designation">Designation</label>
          <select
            name="designation"
            onChange={handleEmp}
            value={emp.designation}
            id=""
          >
            <option value="None">None</option>
            <option value="SDE">SDE</option>
            <option value="FSD">FSD</option>
            <option value="Lead">Lead</option>
          </select>
        </div>
        <div className="ipt">
          <label htmlFor="Salary">Salary</label>
          <input
            type="text"
            placeholder="500"
            name="salary"
            onChange={handleEmp}
            value={emp.salary}
          />
        </div>

        <button onClick={handleNext}>Next</button>
      </div>
    );
  };

  const Comp2 = () => {
    return (
      <div>
        <div className="ipt">
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            placeholder="xjhdcd"
            name="address"
            onChange={handleEmp}
            value={emp.address}
          />
        </div>
        <div className="ipt">
          <label htmlFor="email">email</label>
          <input
            type="text"
            placeholder="sahd"
            name="email"
            onChange={handleEmp}
            value={emp.email}
          />
        </div>
        <div className="ipt">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            placeholder="531565500"
            name="phone"
            onChange={handleEmp}
            value={emp.phone}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  return <div className="employee">{bl ? <Comp1 /> : <Comp2 />}</div>;
};
