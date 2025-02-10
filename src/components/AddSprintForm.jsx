import React, { useState } from 'react';

export const AddSprintForm = ({ onSubmit, onCancel }) => {
    const [esfuerzo, setEsfuerzo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoSprint = {
            sprint: 4, // Incrementa el número de sprint según sea necesario
            esfuerzo: parseInt(esfuerzo),
            fecha: new Date().toLocaleDateString(),
        };
        onSubmit(nuevoSprint);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Agregar Sprint</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Esfuerzo Estimado (hrs)</label>
                <input
                    type="number"
                    value={esfuerzo}
                    onChange={(e) => setEsfuerzo(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm"
                    required
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Guardar
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};