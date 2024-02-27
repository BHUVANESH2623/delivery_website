import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./defaulthome.scss";

const DefaultHome = () => {
  const { project, setProject } = useContext(UserContext);

  return (
    <div className="default-home">
      <h1>Welcome to Project Selector</h1>
      <p>Choose a project to learn more and get started with your tasks!</p>

      <div className="button-container">
        <button
          onClick={() => {
            setProject(!project);
          }}
          className={`project-button ${project ? "active" : ""}`}
        >
          Employee Management Project
        </button>

        <button
          onClick={() => {
            setProject(!project);
          }}
          className={`project-button ${!project ? "active" : ""}`}
        >
          Delivery Website Project
        </button>
      </div>

      {project && (
        <p>
          The Employee Management Project is designed to help you manage your
          workforce efficiently. It includes features such as employee data
          management, attendance tracking, and performance evaluation. Click the
          button again to switch to the Delivery Website Project.
        </p>
      )}

      {!project && (
        <p>
          The Delivery Website Project is focused on managing and tracking
          deliveries. It includes functionalities for order processing, delivery
          tracking, and customer communication. Click the button again to switch
          to the Employee Management Project.
        </p>
      )}
    </div>
  );
};

export default DefaultHome;
