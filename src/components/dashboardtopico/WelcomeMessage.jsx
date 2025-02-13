import React from "react";
import { motion } from "framer-motion"; // Para animación opcional

export function WelcomeMessage() {
  return (
    <motion.div
      //Estilos
      style={{
        display: "flex",
        background: "white",
        color: "black", 
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 1.2)",     
        fontSize: "16px",
      }}
      //Movimiento
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>👋 ¡Hola! Bienvenido al panel de administrador. Selecciona una de las tarjetas para revisar la información más reciente y mantenerte al día con las actualizaciones.</p>
    </motion.div>
  );
}
