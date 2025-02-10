import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { UserForm } from './UserForm';
import { PasswordRecoveryForm } from "./PasswordRecoveryForm.jsx";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirección

export const Login2 = ({ onLoginSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isRecoverModalOpen, setIsRecoverModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); // Inicializa el hook de redirección

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    // Simulación de la validación de credenciales
    const handleLogin = () => {
        if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
            onLoginSuccess();
        } else {
            setErrorMessage('Credenciales incorrectas');
        }
    };

    const handleGuestLogin = () => {
        navigate('/UploadFile'); // Redirige al usuario a UploadFile sin validación
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full border-1 border-gray-400 rounded-3xl shadow-2xl shadow-gray-500 p-14">
                <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                    <form className="space-y-4">
                        <div className="mb-8">
                            <h3 className="text-gray-800 text-3xl font-bold text-center">Inicio de sesión</h3>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Correo electrónico</label>
                            <div className="relative flex items-center">
                                <input
                                    name="username"
                                    type="email"
                                    required
                                    className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                                    placeholder="correo.ejemplo@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Contraseña</label>
                            <div className="relative flex items-center">
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div
                                    onClick={togglePassword}
                                    className="absolute right-4 cursor-pointer text-gray-500">
                                    {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                                </div>
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="text-red-600 text-sm text-center">{errorMessage}</div>
                        )}

                        <div className="flex flex-wrap items-center justify-center">
                            {/*
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                    Recordarme
                                </label>
                            </div>
                            */}

                            <div className="text-sm">
                                <button
                                    type="button"
                                    onClick={() => setIsRecoverModalOpen(true)}
                                    className="text-blue-600 hover:underline font-semibold cursor-pointer mt-4"
                                >
                                    ¿Olvidaste tu contraseña?
                                </button>
                            </div>
                        </div>

                        <div className="!mt-8">
                            <button
                                type="button"
                                onClick={handleLogin}
                                className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                                Iniciar sesión
                            </button>
                        </div>

                        <p className="text-sm !mt-8 text-center text-gray-500">
                            ¿No tienes cuenta?{' '}
                            <button
                                onClick={() => setIsRegisterModalOpen(true)}
                                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer"
                            >
                                Regístrate aquí
                            </button>
                        </p>
                        <hr className="border-t-4 w-[80%] mx-auto border-gray-300 my-4" />
                        <p className="text-center">
                            <button
                                type="button"
                                onClick={handleGuestLogin} // Llama a la función para redirigir
                                className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer"
                            >
                                Entrar como invitado
                            </button>
                        </p>
                    </form>
                </div>

                <div className="max-md:mt-8">
                    <h3 className="text-gray-800 text-3xl font-bold text-center">Effort Prediction</h3>
                    <img
                        src="https://img.freepik.com/vector-gratis/ilustracion-concepto-extraccion-datos_114360-4876.jpg"
                        className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover"
                        alt="Effort Prediction"
                    />
                    <p className="text-center">
                        Estima el tiempo y recursos necesarios para tus proyectos de software utilizando modelos basados en datos históricos.
                    </p>
                </div>
            </div>

            {isRegisterModalOpen && <UserForm setIsModalOpen={setIsRegisterModalOpen} />}
            {isRecoverModalOpen && <PasswordRecoveryForm setIsModalOpen={setIsRecoverModalOpen} />}
        </div>
    );
};