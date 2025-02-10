import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export const UserForm = ({ setIsModalOpen }) => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setIsModalOpen(false);
    };

    const onCancel = () => {
        setIsModalOpen(false); // Cierra el modal cuando se hace clic en "Cancelar"
    };

    const password = watch('password');

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl relative"
            >
                <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl transition"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Registro de Usuario
                </h2>

                {/* Nombre completo */}
                <div className="mb-5">
                    <label className="block text-gray-600 mb-1">Nombre completo</label>
                    <input
                        type="text"
                        {...register('fullName', { required: true, maxLength: 50 })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingresa tu nombre completo"
                    />
                    {errors.fullName?.type === 'required' && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
                    {errors.fullName?.type === 'maxLength' && <span className="text-red-500 text-sm mt-1">El nombre no puede tener más de 50 caracteres</span>}
                </div>

                {/* Correo electrónico */}
                <div className="mb-5">
                    <label className="block text-gray-600 mb-1">Correo electrónico</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: true,
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="correo@ejemplo.com"
                    />
                    {errors.email?.type === 'required' && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
                    {errors.email?.type === 'pattern' && <span className="text-red-500 text-sm mt-1">Introduce un correo válido</span>}
                </div>

                {/* Contraseña */}
                <div className="mb-5 relative">
                    <label className="block text-gray-600 mb-1">Contraseña</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: true, minLength: 6 })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="******"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                    {errors.password?.type === 'required' && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm mt-1">La contraseña debe tener al menos 6 caracteres</span>}
                </div>

                {/* Confirmar contraseña */}
                <div className="mb-6 relative">
                    <label className="block text-gray-600 mb-1">Repetir contraseña</label>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        {...register('confirmPassword', {
                            required: true,
                            validate: (value) => value === password || 'Las contraseñas no coinciden'
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="******"
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                    >
                        {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                    {errors.confirmPassword?.type === 'required' && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
                    {errors.confirmPassword?.type === 'validate' && <span className="text-red-500 text-sm mt-1">Las contraseñas no coinciden</span>}
                </div>

                <div className="flex justify-between gap-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-1/2 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="w-1/2 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Registrar
                    </button>
                </div>
            </form>
        </div>
    );
};