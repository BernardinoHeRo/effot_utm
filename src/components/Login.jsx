import React from 'react';

export const Login = () => {
    return (
        <div className="w-screen h-screen flex xl:flex-row">
            {/* Bloque de login izquierdo */}
            <div className="w-full xl:w-[35%] h-screen bg-white flex flex-col items-center justify-between">
                {/* Logo */}
                <div className="mt-4">
                    <img
                        src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-project-management-png-image_5687733.png"
                        alt="Logo"
                        className="w-48 xl:w-56 object-contain"
                    />
                </div>

                {/* Formulario (esto ocupará el espacio disponible) */}
                <div className="flex-grow w-full flex items-center justify-center p-4">
                    <div className="text-center w-[70%] flex flex-col items-center gap-6">
                        {/* Título y enlace para crear cuenta */}
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl md:text-3xl xl:text-3xl font-bold">Iniciar sesión</h1>
                            <p className="mt-3">
                                Aún no tienes cuenta?{' '}
                                <a href="#" className="underline text-blue-500">
                                    Crear cuenta
                                </a>
                            </p>
                        </div>

                        {/* Campos del formulario */}
                        <form className="w-full flex flex-col gap-4">
                            <div className="w-full">
                                <label className="leading-relaxed px-1">Email:</label>
                                <input
                                    type="email"
                                    placeholder="emaildeprueba@correo.com"
                                    className="p-2 border-2 border-gray-300 rounded-lg w-full"
                                    aria-label="Email"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="leading-relaxed px-1">Password:</label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="p-2 border-2 border-gray-300 rounded-lg w-full"
                                    aria-label="Password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 px-4 text-white py-2 rounded-xl text-xl font-semibold w-[70%]"
                            >
                                Iniciar Sesión
                            </button>
                        </form>

                        {/* Links adicionales */}
                        <div className="flex flex-col gap-2">
                            <a className="underline text-blue-600 text-base">Olvidaste tu contraseña?</a>
                            <a className="underline text-blue-600 text-base">Ingresar como invitado</a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-4 text-center text-gray-500 text-sm border-t border-gray-200">
                    <p>© 2025 All rights reserved</p>
                </footer>
            </div>

            {/* Bloque de información derecho */}
            <div className="hidden xl:w-[65%] bg-gray-200 xl:flex xl:items-center xl:justify-center">
                <div className="xl:w-[65%] xl:rounded-2xl xl:p-14 bg-white flex flex-col items-center justify-center gap-8">
                    <img
                        src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-project-management-png-image_5687733.png"
                        alt="Logo"
                        className="w-56"
                    />
                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Estimador de esfuerzo</h1>
                    <p className="text-center text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam autem
                        cum dolore ducimus eaque eligendi, excepturi illum incidunt nobis optio pariatur perspiciatis
                        possimus quaerat quas reiciendis rem tempora.
                    </p>
                </div>
            </div>
        </div>
    );
};