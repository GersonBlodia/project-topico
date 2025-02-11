//rafce - rafc
 //import './Dashboard.css';

// export const ContentDashboard = () => {
//   return (
//     <div>ContentDashboard</div>
//   )
// }

import React from "react";


export const ContentDashboard = () => {
  const stats = [
    { title: "Número de citas", value: "12", color: "blue" },
    { title: "Número de pacientes", value: "45", color: "green" },
    { title: "Número de médicos", value: "8", color: "purple" },
    { title: "Número de usuarios", value: "24", color: "orange" }
  ];

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Panel de Administrador de Tópicos Médicos</h1>
      <p>Panel Administrativo</p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <div>
              <p className="stat-title">{stat.title}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



 