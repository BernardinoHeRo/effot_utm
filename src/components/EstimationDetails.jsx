import React from 'react';

export const EstimationDetails = ({ sprint, onClose }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalles del Sprint {sprint.sprint}</h2>
            <div className="mb-4">
                <p className="text-lg text-gray-700">
                    <strong>Esfuerzo estimado:</strong> {sprint.esfuerzo} horas
                </p>
                <p className="text-lg text-gray-700">
                    <strong>Fecha:</strong> {sprint.fecha}
                </p>
            </div>
            <div className="flex justify-end">
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};