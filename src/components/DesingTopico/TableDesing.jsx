import React, { useState } from 'react';
import { ContainerTable } from './ContainerPaciente';
import { usePagination } from '../../hooks/useSearch';
import { usePacientes } from '../../hooks/useAddPaciente';
import { ModalAgregarPaciente } from '../ux/AddModal';
import { ModalEditarPaciente } from '../ux/EditModal';
 

export const DesingTable = () => {
    const [elementosPorPagina, setElementosPorPagina] = useState(4);
    const { dataRender, pagina, totalPaginas, cambiarPagina, setFiltro, filtro, setDataPaciente } = usePagination([], elementosPorPagina);
    const { agregarPaciente, pacientes } = usePacientes();
    const [isActive, setIsActive] = useState(false);
    const [pacienteEditando, setPacienteEditando] = useState(null);

    // Eliminar paciente
    const eliminarPaciente = (id) => {
        const nuevosPacientes = pacientes.filter(p => p.id !== id);
        setDataPaciente(nuevosPacientes);
        localStorage.setItem("pacientes", JSON.stringify(nuevosPacientes));
    };

    // Guardar cambios del paciente editado
    const guardarEdicion = (pacienteEditado) => {
        const nuevosPacientes = pacientes.map(p => p.id === pacienteEditado.id ? pacienteEditado : p);
        setDataPaciente(nuevosPacientes);
        localStorage.setItem("pacientes", JSON.stringify(nuevosPacientes));
        setPacienteEditando(null);
    };

    return (
        <div className="availability-container">
            <h2 className="title">Lista de Disponibilidad</h2>            
            <button className="add-button" onClick={() => setIsActive(prev => !prev)}>
                Agregar horario ▢
            </button>
            {isActive && <ModalAgregarPaciente 
            
            agregarPaciente={agregarPaciente} isOpen={isActive} onClose={() => setIsActive(false)} />}

            <div className="controls">
                <div className="show-records">
                    <span>Mostrar:</span>
                    <select 
                        value={elementosPorPagina} 
                        onChange={(e) => setElementosPorPagina(Number(e.target.value))}
                    >
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                    </select>
                    <span>registros</span>
                </div>

                <div className="search">
                    <span>Buscar:</span>
                    <input 
                        type="text"  
                        value={filtro} 
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                </div>
            </div>

            <ContainerTable 
                data={dataRender} 
                onEdit={(paciente) => setPacienteEditando(paciente)}
                onDelete={eliminarPaciente}
            />

            <div className="pagination">
                <span className="records-info">
                    Mostrando {pagina * elementosPorPagina + 1} - {Math.min((pagina + 1) * elementosPorPagina, pacientes.length)} de {pacientes.length} registros
                </span>
                <div className="pagination-controls">
                    <button onClick={() => cambiarPagina(pagina - 1)} disabled={pagina === 0}>
                        Anterior
                    </button>

                    {Array.from({ length: totalPaginas }).map((_, index) => (
                        <button 
                            key={index} 
                            className={`pagination-button ${pagina === index ? 'active' : ''}`}
                            onClick={() => cambiarPagina(index)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button onClick={() => cambiarPagina(pagina + 1)} disabled={pagina + 1 >= totalPaginas}>
                        Siguiente
                    </button>
                </div>
            </div>

            {pacienteEditando && (
    <ModalAgregarPaciente 
        isOpen={!!pacienteEditando}
        onClose={() => setPacienteEditando(null)}
        agregarPaciente={agregarPaciente} 
        guardarEdicion={guardarEdicion} 
        paciente={pacienteEditando} 
    />
)}

        </div>
    );
};
