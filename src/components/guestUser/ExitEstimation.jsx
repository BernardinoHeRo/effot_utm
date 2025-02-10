import React from 'react';
import { FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';

export const ExitEstimation = () => {
    // Función para generar y descargar el PDF
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Agregando contenido al PDF
        doc.setFontSize(20);
        doc.text("Reporte de Estimación", 20, 20);

        doc.setFontSize(12);
        doc.text("Nombre del archivo: La casita.csv", 20, 40);
        doc.text("Tamaño del archivo: 2.3 Mb", 20, 50);
        doc.text("Número de registros: 1895", 20, 60);
        doc.text("Tiempo de procesamiento: 3 minutos", 20, 70);
        doc.text("Velocidad de procesamiento: 500 registros/minuto", 20, 80);

        // Descargar el PDF
        doc.save('reporte_estimacion.pdf');
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Estimación exitosa</h1>
            <div className="w-full flex flex-row items-center justify-center">
                <div className="w-[45%] flex flex-col items-center justify-center px-16 gap-2">
                    <p className="text-2xl text-center leading-relaxed">
                        El archivo contiene datos de varias regiones e incluye varias métricas de ventas.
                    </p>
                    <div className="border px-8 py-4 flex flex-col items-center justify-center">
                        <p><strong>Nombre del archivo: </strong>La casita.csv</p>
                        <p><strong>Tamaño del archivo: </strong>2.3 Mb</p>
                        <p><strong>Número de registros: </strong>1895</p>
                        <p><strong>Tiempo de procesamiento: </strong>3 minutos</p>
                        <p><strong>Velocidad de procesamiento: </strong>500 registros/minuto</p>
                    </div>
                </div>
                <div className="w-[55%] flex flex-col gap-4 items-center justify-center">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/estimacion-de-costo-del-proyecto-8045633-6499123.png?f=webp"
                        alt="Imagen estimación"
                    />
                </div>
            </div>
            <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={handleDownloadPDF}
            >
                <FaDownload size={16} />
                Download File
            </button>
        </div>
    );
};