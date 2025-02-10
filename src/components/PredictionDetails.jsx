import React from 'react';

export const PredictionDetails = ({ sprint }) => {
    return (
        <div>
            <h4 className="text-lg font-semibold">Detalles del Sprint {sprint.sprint}</h4>
            <p><strong>Esfuerzo Estimado:</strong> {sprint.esfuerzo} hrs</p>
            {/* Puedes agregar más detalles según sea necesario */}
        </div>
    );
};