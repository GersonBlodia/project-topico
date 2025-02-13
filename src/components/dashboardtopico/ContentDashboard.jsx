//rafce - rafc
 //import './Dashboard.css';

// export const ContentDashboard = () => {
//   return (
//     <div>ContentDashboard</div>
//   )
// }

import React, { useState } from "react";
import { Calendar, User, Stethoscope, Users } from "lucide-react";
import { motion } from "framer-motion"; // Para animaciones
import { WelcomeMessage } from "./WelcomeMessage";
import { FloatingIcon } from "./FloatingIcon";

export const ContentDashboard = () => {
  const [activeCard, setActiveCard] = useState(0); // Índice de la card activa (0 = primera por defecto)

  const stats = [
    { id: 0, title: "Número de citas", value: "12", icono: <Calendar />, className: "card1" },
    { id: 1, title: "Número de pacientes", value: "45", icono: <User />, className: "card2" },
    { id: 2, title: "Número de médicos", value: "8", icono: <Stethoscope />, className: "card3" },
    { id: 3, title: "Número de usuarios", value: "24", icono: <Users />, className: "card4" }
  ];

  return (
    <div className="dashboard-container">
      <h1>Bienvenido al Panel de Administrador de Temas Médicos</h1>
      <p>Panel Administrativo</p>
      <WelcomeMessage />

      <div className="cards-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-card ${stat.className}`}
              onMouseEnter={() => setActiveCard(index)} // Cambia la posición de la píldora
              onMouseLeave={() => setActiveCard(0)} // Si el mouse sale, vuelve a la primera tarjeta
            >

                 {/* Ícono flotante separado en otro archivo */}
              <FloatingIcon active={activeCard === index} />

              <div className="stat-icon">{stat.icono}</div>
              <div className="stats-div">
                <h2 className="stat-title">{stat.title}</h2>
                <p className="stat-value">{stat.value}</p>
                <button className="stat-button"> &gt; Ver más detalles</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
