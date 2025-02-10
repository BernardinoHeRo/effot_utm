import React from 'react'

export const ErrorPage = () => {
    return (
        <div className="w-screen h-screen bg-gray-300 flex flex-col items-center justify-center gap-4">
            <img src="https://cdn.vectorstock.com/i/1000v/49/82/error-404-page-not-found-creative-web-design-vector-46724982.jpg" alt="Imagen error"
            className="w-[800px]"/>
            <p className="text-7xl text-red-800 brightness-150 contrast-150 font-bold drop-shadow-[0_3px_2px_rgba(50,10,78,1)]">Ha ocurrido un error</p>
            <div className="w-[50%] mx-auto text-center text-xl">
                Esta es una descripción mamalona de por que este se muestra esta página,
                esto puede ser por que el ususario es muy buey y cargo un archivo en otro
                formato o el cvs viene dañado
            </div>
            <button type="button" className="bg-blue-900 hover:bg-blue-700 px-4 text-white py-2 rounded-xl text-xl font-semibold">
                Volver a casa
            </button>
        </div>
    )
}
