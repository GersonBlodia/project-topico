//rafce - rafc
 //import './Dashboard.css';

// export const ContentDashboard = () => {
//   return (
//     <div>ContentDashboard</div>
//   )
// }

import React from "react";
import { Calendar, User, Stethoscope, Users } from "lucide-react";

export const ContentDashboard = () => {
  const stats = [
    { title: "Número de citas", value: "12", icono: <Calendar />, className: "card1" },
    { title: "Número de pacientes", value: "45", icono: <User />, className: "card2" },
    { title: "Número de médicos", value: "8", icono: <Stethoscope />, className: "card3" },
    { title: "Número de usuarios", value: "24", icono: <Users />, className: "card4" }
  ];

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Panel de Administrador de Temas Médicos</h1>
      <p>Panel Administrativo</p>
      <div className="cards-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.className}`}>
              <div className="stat-icon">{stat.icono}</div>
              <div>
                <p className="stat-title">{stat.title}</p>
                <div className = "div-stat-value">
                <p className="stat-value">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
