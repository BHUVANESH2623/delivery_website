import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.scss";

export const Home = () => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        "https://delivery-website-backend.onrender.com/employee"
      );

      setEmp(res.data);
    };

    fetchdata();
  }, []);

  console.log(emp);
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMPLOYEE ID</th>
          <th>DEPARTMENT</th>
          <th>DESIGNATION</th>
          <th>SALARY</th>
          <th>ADDRESS</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
        </tr>
        {emp.map((v, index) => (
          <tr key={index}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            {/* <td>{moment(v.dob).format("DD-MM-YYYY")}</td> */}
            <td>{v.empid}</td>
            <td>{v.department}</td>
            <td>{v.designation}</td>
            <td>{v.salary}</td>
            <td>{v.address}</td>
            <td>{v.email}</td>
            <td>{v.phone}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
