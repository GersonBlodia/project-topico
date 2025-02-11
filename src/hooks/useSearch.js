import { useEffect, useState } from "react";
import { dataPacientes } from "../data/paciente";

export const usePagination = (data = [], elementosPorPagina = 4) => {
    const [dataPaciente, setDataPaciente] = useState(data.length ? data : dataPacientes);
    const [dataFiltrada, setDataFiltrada] = useState(dataPaciente);
    const [dataRender, setDataRender] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [filtro, setFiltro] = useState("");
    useEffect(() => {
        const resultado = dataPaciente.filter(paciente =>
            `${paciente.nombre} ${paciente.apellido}`
                .toLowerCase()
                .includes(filtro.toLowerCase())
        );
        setDataFiltrada(resultado);
        setPagina(0); 
    }, [filtro, dataPaciente]);

    useEffect(() => {
        const start = pagina * elementosPorPagina;
        const end = start + elementosPorPagina;
        setDataRender(dataFiltrada.slice(start, end));
    }, [pagina, dataFiltrada, elementosPorPagina]);

    const cambiarPagina = (nuevaPagina) => {
        if (nuevaPagina < 0 || nuevaPagina >= Math.ceil(dataFiltrada.length / elementosPorPagina)) return;
        setPagina(nuevaPagina);
    };

    return {
        dataRender,
        pagina,
        totalPaginas: Math.ceil(dataFiltrada.length / elementosPorPagina),
        cambiarPagina,
        filtro,
        setFiltro
    };
};
