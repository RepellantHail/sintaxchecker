"use client";
import React, { useState } from "react";
import ResultRow from "./ResultRow";

export default function Result({ title, content }) {
    const initialData = {
        "Palabras reservadas": 0,
        "Identificadores": 0,
        "Operadores Relacionales": 0,
        "Operadores Lógicos": 0,
        "Operadores Aritméticos": 0,
        "Asignaciones": 0,
        "Números Enteros": 0,
        "Números Decimales": 0,
        "Cadena de caracteres": 0,
        "Comentarios Multilinea": 0,
        "Comentarios de Linea": 0,
        "Paréntesis": 0,
        "Llaves": 0,
        "Errores": 0,
    };

    const [resultMapFinal, setResultMap] = useState(initialData);

    const handleReload = () => {
        window.location.reload();
    };

    const palabrasReservadas = [
        "if",
        "else",
        "switch",
        "case",
        "default",
        "for",
        "while",
        "break",
        "int",
        "String",
        "double",
        "char",
        "print",
    ];

    const whitespaceChars = ["\n", "\t", " ", "\0", ""];
    const operadoresRelacionales = ["<", "<=", ">", ">=", "==", "!="];
    const operadoresAritmeticos = ["+", "-", "/", "*"];
    const operadorLogico = ["&&", "||", "!"];
    const specialChars = ["!@#$%^&*()+"];

    const resultMap = {
        "Palabras reservadas": 0,
        "Identificadores": 0,
        "Operadores Relacionales": 0,
        "Operadores Lógicos": 0,
        "Operadores Aritméticos": 0,
        "Asignaciones": 0,
        "Números Enteros": 0,
        "Números Decimales": 0,
        "Cadena de caracteres": 0,
        "Comentarios Multilinea": 0,
        "Comentarios de Linea": 0,
        "Paréntesis": 0,
        "Llaves": 0,
        "Errores": 0,
    };

    const processData = () => {
        const wordArray = filterWords();
        const states = [];
        wordArray.forEach((word) => {
            states.push(processWord(word));
        });
        processStates(states);
        console.log(resultMap);
        setResultMap(resultMap);
    };

    const processStates = (states) => {
        states.forEach((state) => {
            switch (state) {
                case 2:
                    resultMap["Errores"]++;
                    break;
                case 3:
                    resultMap["Operadores Lógicos"]++;
                    break;
                default:
            }
        });
    }

    const filterWords = () => {
        const charArray = [];
        const charText = content.split(""); //Convert content to char Array
        let word = "";

        charText.forEach((c) => {
            //Traverse the content
            if (!whitespaceChars.includes(c)) {
                word += c;
            } else if (word.length > 0) {
                charArray.push(word);
                word = "";
            }
        });
        return charArray;
    };

    const processWord = (word) => {
        let state = 0;
        const charArray = word.split("");
        charArray.forEach((c) => {
            switch (state) {
                case 0:
                    if (c == "&") state = 1;
                    break;
                case 1:
                    state = c == "&" ? 3 : 2;
                    break;
                case 2:
                    break;
                default:
            }
        });
        return state;
    };

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
                    {Object.entries(resultMapFinal).map(([label, value], index) => (
                        <ResultRow
                            key={index}
                            label={label}
                            value={value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
