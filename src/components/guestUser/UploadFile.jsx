import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { ExitEstimation } from './ExitEstimation'; // Asegúrate de que la ruta es correcta

export const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [uploadCompleted, setUploadCompleted] = useState(false); // Nuevo estado para controlar la transición

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "text/csv") {
            setFile(selectedFile);
            setUploadProgress(0);
        } else {
            alert("Por favor, sube un archivo CSV válido.");
        }
    };

    const handleFileDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === "text/csv") {
            setFile(droppedFile);
            setUploadProgress(0);
        } else {
            alert("Por favor, sube un archivo CSV válido.");
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleContainerClick = () => {
        if (!uploading) {
            document.getElementById('fileInput').click();
        }
    };

    const handleSubmit = () => {
        if (!file) return;

        setUploading(true);
        setUploadProgress(0);

        // Simulación de la carga del archivo
        const simulateUpload = () => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                setUploadProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    setTimeout(() => setUploadCompleted(true), 500); // Espera breve antes de mostrar ExitEstimation
                }
            }, 300);
        };

        simulateUpload();
    };

    // Mostrar ExitEstimation si la carga fue completada
    if (uploadCompleted) {
        return <ExitEstimation file={file} />;  // Pasamos el archivo al componente ExitEstimation
    }

    return (
        <div className="w-screen h-screen bg-[#0675cb] text-white flex flex-col items-center justify-center">
            <div className="bg-cyan-700/40 p-16 flex flex-col items-center gap-8 justify-around">
                <h1 className="text-center text-gray-100 text-3xl font-bold">
                    Sube tu archivo CSV
                </h1>

                <div
                    className="min-w-[600px] min-h-[200px] rounded-lg shadow-lg border border-dashed border-gray-300 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-cyan-700/60 transition"
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                    onClick={handleContainerClick}
                >
                    <FaUpload size={40} className="text-gray-200"/>
                    {file ? (
                        <p className="text-lg text-green-300">{file.name}</p>
                    ) : (
                        <p className="text-gray-200">Haz clic o arrastra un archivo aquí</p>
                    )}
                    <input
                        type="file"
                        accept=".csv"
                        id="fileInput"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>

                {uploading && (
                    <div className="w-full bg-gray-300 rounded-lg h-4 mt-4">
                        <div
                            className="bg-green-500 h-4 rounded-lg transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                )}

                <button
                    type="button"
                    className={`px-4 py-2 rounded-lg transition ${
                        file && !uploading
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    onClick={handleSubmit}
                    disabled={!file || uploading}
                >
                    {uploading ? 'Subiendo...' : 'Realizar Estimación'}
                </button>
            </div>
        </div>
    );
};