import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ModalDesing.css";

export const ModalAgregarPaciente = ({ isOpen, onClose, agregarPaciente, guardarEdicion, paciente }) => {
    if (!isOpen) return null;
    const [formData, setFormData] = useState({
        nombre: paciente?.nombre || "",
        apellido: paciente?.apellido || "",
        edad: paciente?.edad || "",
        sintomas: paciente?.sintomas?.join(", ") || "",
        apoderado: paciente?.apoderado || "",
        dni: paciente?.dni || "",
        fechaAtencion: paciente?.fechaAtencion || ""
    });

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("overlay")) {
            onClose();
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const pacienteData = {
            id: paciente?.id || Date.now(),
            nombre: formData.nombre,
            apellido: formData.apellido,
            edad: Number(formData.edad),
            sintomas: formData.sintomas.split(",").map((s) => s.trim()),
            apoderado: formData.apoderado,
            dni: formData.dni,
            fechaAtencion: formData.fechaAtencion
        };
        if(paciente?.id){
            guardarEdicion(pacienteData);
            window.location.reload();
        }
        else{
            
            agregarPaciente(pacienteData);
            window.location.reload();
        }
       
        onClose();
    };

    return (
        <div className="overlay" onClick={handleOverlayClick}>
            <motion.div 
                className="modal-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
            >
                <h2>{paciente?.id ? "Editar Paciente" : "Agregar Paciente"}</h2>

                <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                    <input type="text" name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} required />
                    <input type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
                    <input type="text" name="sintomas" placeholder="Síntomas (separados por comas)" value={formData.sintomas} onChange={handleChange} required />
                   
                    <input type="text" name="apoderado" placeholder="Apoderado" value={formData.apoderado} onChange={handleChange} required />
                    <input type="text" name="dni" placeholder="DNI" value={formData.dni} onChange={handleChange} required />
                    <input type="datetime-local" name="fechaAtencion" value={formData.fechaAtencion} onChange={handleChange} required />
                    <div className="modal-actions">
                        <button type="submit">{paciente?.id ?"Editar" : "Agregar"}</button>
                        <button type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};
