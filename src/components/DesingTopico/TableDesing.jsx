import React, { useState } from 'react';
import { ContainerTable } from './ContainerPaciente';
import { usePagination } from '../../hooks/useSearch';
import { dataPacientes } from '../../data/paciente';

export const DesingTable = () => {
    const [elementosPorPagina, setElementosPorPagina] = useState(4);  
    const { dataRender, pagina, totalPaginas, cambiarPagina , setFiltro, filtro} = usePagination(dataPacientes, elementosPorPagina);
    const start = pagina * elementosPorPagina + 1;
    const end = Math.min(start + elementosPorPagina - 1, dataPacientes.length);
    localStorage.setItem('pacientes', JSON.stringify(dataPacientes));
    return (
        <div className="availability-container">
            <h2 className="title">Lista de Disponibilidad</h2>            
            <button className="add-button">
                Agregar horario ▢
            </button>
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
                    <input type="text"  value={filtro} onChange={(e)=>setFiltro(e.target.value)}/>
                </div>
            </div>
            <ContainerTable data={dataRender} />

            <div className="pagination">
                <span className="records-info">
                    Mostrando del registro {start} al {end} de un total de {dataPacientes.length} registros
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
        </div>
    );
};
