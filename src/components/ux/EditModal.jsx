import React, { useState } from "react";

export const ModalEditarPaciente = ({ paciente, onSave, onClose }) => {
    const [formData, setFormData] = useState({ ...paciente });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Editar Paciente</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

                    <label>Apellido:</label>
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />

                    <label>Edad:</label>
                    <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />

                    <div className="modal-buttons">
                        <button type="submit">Guardar</button>
                        <button type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
