import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';

export const PasswordRecoveryForm = ({ setIsModalOpen }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setIsSubmitted(true);
        // Aquí iría la lógica para enviar el correo de recuperación
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
            <div className="relative w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                >
                    <AiOutlineClose size={24} />
                </button>

                <h2 className="text-2xl font-bold text-center mb-6">Recuperar Contraseña</h2>

                {isSubmitted ? (
                    <div className="text-center transition-opacity duration-500 ease-in-out">
                        <p className="text-green-500 text-lg">
                            Hemos enviado un enlace de recuperación a tu correo electrónico.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 transition-opacity duration-500 ease-in-out">
                        <div>
                            <label className="block text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Introduce un correo válido'
                                    }
                                })}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                                placeholder="correo.ejemplo@example.com"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 focus:outline-none cursor-pointer transition-colors duration-300"
                        >
                            Enviar enlace de recuperación
                        </button>
                    </form>
                )}

                <div className="mt-4 text-center">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-blue-600 hover:underline cursor-pointer"
                    >
                        Volver al inicio de sesión
                    </button>
                </div>
            </div>
        </div>
    );
};