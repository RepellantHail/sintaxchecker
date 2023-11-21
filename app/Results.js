"use client";
import React, { useState } from "react";
import ResultRow from "./ResultRow";

export default function Result({ title, content }) {
    const initialData = [
        { label: "Palabras reservadas", value: 0 },
        { label: "Identificadores", value: 0 },
        { label: "Operadores Relacionales", value: 0 },
        { label: "Operadores Lógicos", value: 0 },
        { label: "Operadores Aritméticos", value: 0 },
        { label: "Asignaciones", value: 0 },
        { label: "Número Enteros", value: 0 },
        { label: "Números Decimales", value: 0 },
        { label: "Cadena de caracteres", value: 0 },
        { label: "Comentarios Multilinea", value: 0 },
        { label: "Comentario de Linea", value: 0 },
        { label: "Paréntesis", value: 0 },
        { label: "Llaves", value: 0 },
        { label: "Errores", value: 0 },
    ];

    const [processedData, setProcessedData] = useState(initialData);

    const handleReload = () => {
        window.location.reload();
    };

    const processData = () => {};

    return (
        <div className="col-4 ">
            <h2 className="transbox">{title}</h2>
            <div className="container text-center ">
                <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                >
                    <button
                        type="button"
                        onClick={handleReload}
                        class="btn btn-danger"
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={processData}
                    >
                        Start
                    </button>
                </div>

                <div className=" transbox">
                    {processedData.map((item, index) => (
                        <ResultRow
                            key={index}
                            label={item.label}
                            value={item.value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
