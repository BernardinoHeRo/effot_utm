import React, {useState} from 'react';

export const AddProjectForm = ({onSubmit, onCancel}) => {
    const [nombre, setNombre] = useState('');
    const [empresa, setEmpresa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            nombre,
            empresa,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Agregar Nuevo Proyecto</h2>

            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Nombre del Proyecto</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-600 font-medium">Empresa</label>
                <input
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                />
            </div>

            <div className="flex justify-end gap-4">
                <button
                    type="submit"
                    className="px-6 py-3 bg-green-900 text-white rounded-md shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-900 transition cursor-pointer"
                >
                    Guardar
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};