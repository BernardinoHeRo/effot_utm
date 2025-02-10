import React, {useState} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {Login2} from "./components/Login2.jsx";
import {ProjectTable} from "./components/ProjectTable.jsx";
import {UploadFile} from "./components/guestUser/UploadFile.jsx";
import PrivateRoute from './components/PrivateRoute';
import {ErrorPage} from './components/ErrorPage';
import {GuestNavigationBar} from './components/navigationBar/GuestNavigationBar.jsx';
import guestRoutesNav from './components/navigationBar/guestRoutesNav.json'; // Importar el JSON con las rutas de la barra
import registeredRoutesNav from './components/navigationBar/registeredRoutesNav.json'; // Importar el JSON con las rutas de la barra

export const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simular inicio de sesión
    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                {/* Ruta para Login */}
                <Route path="/login" element={isAuthenticated ? <Navigate to="/projects"/> :
                    <Login2 onLoginSuccess={handleLoginSuccess}/>}/>

                {/* Ruta para UploadFile sin autenticación, con barra de navegación de invitado */}
                <Route
                    path="/UploadFile"
                    element={
                        <>
                            <GuestNavigationBar routes={guestRoutesNav}/> {/* Pasar las rutas del JSON */}
                            <UploadFile/>
                        </>
                    }
                />

                {/* Ruta para proyectos, protegida por autenticación */}
                <Route
                    path="/projects"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <GuestNavigationBar routes={registeredRoutesNav}/> {/* Pasar las rutas del JSON */}
                            <ProjectTable/>
                        </PrivateRoute>
                    }
                />

                {/* Ruta por defecto */}
                <Route path="/" element={<Navigate to="/login"/>}/>

                {/* Ruta para páginas no encontradas */}
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    );
};