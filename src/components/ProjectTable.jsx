import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EstimationDetails } from "./EstimationDetails";
import { AddProjectForm } from "./AddProjectForm.jsx";
import { AddSprintForm } from "./AddSprintForm.jsx";
import jsPDF from "jspdf";

// Función para crear proyectos con datos de ejemplo
function crearProyecto(nombre, empresa, esfuerzoTotal, sprints) {
    return {
        nombre,
        empresa,
        esfuerzoTotal,
        sprints,
        historial: [
            { sprint: 1, esfuerzo: 20, fecha: new Date().toLocaleDateString() },
            { sprint: 2, esfuerzo: 15, fecha: new Date().toLocaleDateString() },
            { sprint: 3, esfuerzo: 30, fecha: new Date().toLocaleDateString() },
        ],
    };
}

const proyectosIniciales = [
    crearProyecto('Proyecto Alfa', 'Empresa A', 65, 3),
    crearProyecto('Proyecto Beta', 'Empresa B', 45, 2),
    crearProyecto('Proyecto Gamma', 'Empresa C', 90, 4),
    crearProyecto('Proyecto Coca', 'Empresa A', 65, 3),
    crearProyecto('Proyecto Cola', 'Empresa B', 45, 2),
    crearProyecto('Proyecto Pepsi', 'Empresa C', 90, 4),
    crearProyecto('Proyecto Yochi', 'Empresa A', 65, 3),
    crearProyecto('Proyecto Calibre 50', 'Empresa B', 45, 2),
    crearProyecto('Proyecto Ms', 'Empresa C', 90, 4),
    crearProyecto('Proyecto Nightwish', 'Empresa A', 65, 3),
    crearProyecto('Proyecto MIS', 'Empresa B', 45, 2),
    crearProyecto('Proyecto MIA', 'Empresa C', 90, 4),
    // Agregar más proyectos según sea necesario
];

const generarPDF = (sprint) => {
    const doc = new jsPDF();
    doc.text(`Resumen del Sprint ${sprint.sprint}`, 20, 20);
    doc.text(`Esfuerzo estimado: ${sprint.esfuerzo} horas`, 20, 30);
    doc.text(`Fecha: ${sprint.fecha}`, 20, 40);
    doc.save(`Sprint_${sprint.sprint}_Resumen.pdf`);
};

const FilaProyecto = ({ proyecto, onVerDetalles, onVolverAEstimar }) => {
    const [abierto, setAbierto] = useState(false);

    return (
        <>
            <tr className="border-b hover:bg-gray-100 transition duration-150 cursor-pointer" onClick={() => setAbierto(!abierto)}>
                <td className="p-4">
                    <button onClick={(e) => { e.stopPropagation(); setAbierto(!abierto); }} className="text-blue-600">
                        {abierto ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </td>
                <td className="p-4 font-medium text-gray-800">{proyecto.nombre}</td>
                <td className="p-4 font-medium text-gray-800">{proyecto.empresa}</td>
                <td className="p-4 text-right text-gray-600">{proyecto.esfuerzoTotal} hrs</td>
                <td className="p-4 text-right text-gray-600">{proyecto.sprints}</td>
            </tr>
            {abierto && (
                <tr>
                    <td colSpan={5} className="p-4 bg-gray-50">
                        <div className="ml-4">
                            <div className="flex flex-row items-center justify-between mb-4">
                                <h6 className="text-lg font-semibold text-gray-700">Sprints del proyecto {proyecto.nombre}</h6>
                                <button onClick={() => onVolverAEstimar(proyecto)} className="bg-blue-600 text-white px-2 py-2 rounded-lg">Agregar nueva estimación</button>
                            </div>
                            <table className="min-w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2">Sprint</th>
                                    <th className="px-4 py-2 text-right">Esfuerzo (hrs)</th>
                                    <th className="px-4 py-2">Fecha</th>
                                    <th className="px-4 py-2">Acción</th>
                                </tr>
                                </thead>
                                <tbody>
                                {proyecto.historial.map((entrada) => (
                                    <tr key={entrada.sprint} className="border-t hover:bg-gray-100">
                                        <td className="px-4 py-2">{entrada.sprint}</td>
                                        <td className="px-4 py-2 text-right">{entrada.esfuerzo}</td>
                                        <td className="px-4 py-2">{entrada.fecha}</td>
                                        <td className="px-4 py-2 flex space-x-2">
                                            <button onClick={() => generarPDF(entrada)} className="text-blue-600 hover:text-blue-800">
                                                Descargar PDF
                                            </button>
                                            <button onClick={() => onVerDetalles(entrada)} className="text-green-600 hover:text-green-800">
                                                Ver
                                            </button>
                                            <button className="text-yellow-600 hover:text-yellow-800">
                                                Volver a Estimar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
}

export const ProjectTable = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [proyectos, setProyectos] = useState(proyectosIniciales);
    const [filtro, setFiltro] = useState('');
    const [paginaActual, setPaginaActual] = useState(1);
    const [elementosPorPagina] = useState(5);

    const abrirModal = (type, project = null) => {
        setModalType(type);
        setSelectedProject(project);
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setModalType(null);
        setSelectedProject(null);
    };

    const agregarProyecto = (nuevoProyecto) => {
        setProyectos([...proyectos, nuevoProyecto]);
        cerrarModal();
    };

    const agregarSprint = (nombreProyecto, nuevoSprint) => {
        setProyectos(proyectos.map(proyecto => {
            if (proyecto.nombre === nombreProyecto) {
                return {
                    ...proyecto,
                    historial: [...proyecto.historial, nuevoSprint],
                    esfuerzoTotal: proyecto.esfuerzoTotal + nuevoSprint.esfuerzo,
                    sprints: proyecto.sprints + 1,
                };
            }
            return proyecto;
        }));
        cerrarModal();
    };

    const volverAEstimar = (nombreProyecto) => {
        abrirModal('addSprint', { nombre: nombreProyecto });
    };

    const proyectosFiltrados = proyectos.filter(proyecto =>
        proyecto.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        proyecto.empresa.toLowerCase().includes(filtro.toLowerCase())
    );

    const indexOfLastProject = paginaActual * elementosPorPagina;
    const indexOfFirstProject = indexOfLastProject - elementosPorPagina;
    const proyectosPaginaActual = proyectosFiltrados.slice(indexOfFirstProject, indexOfLastProject);

    const handleNextPage = () => {
        if (paginaActual < Math.ceil(proyectosFiltrados.length / elementosPorPagina)) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const handlePrevPage = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
            <div className="w-[90%]">
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Buscar por nombre o empresa..."
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                        className="px-4 py-2 border rounded-lg shadow-sm w-1/2"
                    />
                    <button
                        onClick={() => abrirModal('addProject')}
                        className="px-4 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition"
                    >
                        Agregar Nuevo Proyecto
                    </button>
                </div>

                <div className="overflow-hidden shadow-2xl rounded-2xl bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-600">
                        <tr>
                            <th className="p-4"></th>
                            <th className="p-4 text-left text-sm font-semibold text-white">Nombre del Proyecto</th>
                            <th className="p-4 text-left text-sm font-semibold text-white">Empresa</th>
                            <th className="p-4 text-right text-sm font-semibold text-white">Esfuerzo Total (hrs)</th>
                            <th className="p-4 text-right text-sm font-semibold text-white">Sprints</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {proyectosPaginaActual.map((proyecto) => (
                            <FilaProyecto
                                key={proyecto.nombre}
                                proyecto={proyecto}
                                onVerDetalles={(sprint) => abrirModal('viewDetails', sprint)}
                                onVolverAEstimar={volverAEstimar}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrevPage}
                        className="px-4 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition"
                    >
                        Anterior
                    </button>
                    <span className="self-center text-gray-600">
                        Página {paginaActual} de {Math.ceil(proyectosFiltrados.length / elementosPorPagina)}
                    </span>
                    <button
                        onClick={handleNextPage}
                        className="px-4 py-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition"
                    >
                        Siguiente
                    </button>
                </div>
            </div>

            {modalVisible && (
                <div className="fixed inset-0 bg-white/80 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        {modalType === 'addProject' && (
                            <AddProjectForm onSubmit={agregarProyecto} onCancel={cerrarModal} />
                        )}
                        {modalType === 'addSprint' && (
                            <AddSprintForm onSubmit={(nuevoSprint) => agregarSprint(selectedProject.nombre, nuevoSprint)} onCancel={cerrarModal} />
                        )}
                        {modalType === 'viewDetails' && <EstimationDetails sprint={selectedProject} onClose={cerrarModal} />}
                    </div>
                </div>
            )}
        </div>
    );
};