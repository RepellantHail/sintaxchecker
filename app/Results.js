"use client";
import React, { useState } from "react";
import ResultRow from "./ResultRow";

export default function Result({ title, content }) {
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
    let wordCount = 0;

    const whitespaceChars = ["\n", "\t", " "];
    const operadoresRelacionales = ["<", "<=", ">", ">=", "==", "!="];
    const operadoresAritmeticos = ["+", "-", "/", "*"];
    const operadorLogico = ["&&", "||", "!"];
    const specialChars = ["!@#$%^&*()+"];

    const initialData = [
        { label: "Palabras reservadas", value: 0 },
        { label: "Identificadores", value: 0 },
        { label: "Operadores Relacionales", value: 0 },
        { label: "Operadores Lógicos", value: 0 },
        { label: "Operadores Aritméticos", value: 0 },
        { label: "Asignaciones", value: 0 },
        { label: "Números Enteros", value: 0 },
        { label: "Números Decimales", value: 0 },
        { label: "Cadena de caracteres", value: 0 },
        { label: "Comentarios Multilinea", value: 0 },
        { label: "Comentarios de Linea", value: 0 },
        { label: "Paréntesis", value: 0 },
        { label: "Llaves", value: 0 },
        { label: "Errores", value: 0 },
    ];

    const [processedData, setProcessedData] = useState(initialData);

    const handleReload = () => {
        window.location.reload();
    };

    const processData = () => {
        const charText = content.split(""); //Convert content to char Array
        let word = "";

        charText.forEach((c) => {
            //Traverse the content
            if (whitespaceChars.includes(c)) {
                processWord(word);
                word = "";
            } else {
                word += c;
            }
        });

        // Update the state after the loop
        setProcessedData((prevData) => {
            const updatedData = [...prevData];
            return updatedData;
        });
    };

    function startsWithLetter(word) {
        if (word.length === 0) return false;

        const firstCharCode = word.charCodeAt(0);

        return (
            (firstCharCode >= 65 && firstCharCode <= 90) ||
            (firstCharCode >= 97 && firstCharCode <= 122)
        );
    }

    const processWord = (word) => {
        wordCount++;
        if (word == "") wordCount--;
        setProcessedData((prevData) => {
            const updatedData = prevData.map((item) => {
                //Traver the map
                switch (
                    item.label //Check specific case
                ) {
                    case "Palabras reservadas":
                        if (palabrasReservadas.includes(word))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Identificadores":
                        if (
                            startsWithLetter(word) &&
                            !word.includes(specialChars) &&
                            !palabrasReservadas.includes(word)
                        )
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Operadores Relacionales":
                        if (operadoresRelacionales.includes(word))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Operadores Lógicos":
                        if (operadorLogico.includes(word))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Operadores Aritméticos":
                        if (operadoresAritmeticos.includes(word))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Asignaciones":
                        if (word == "=")
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Números Enteros":
                        if (!isNaN(Number(word)) && word != "") {
                            if (Number.isInteger(Number(word)))
                                return { ...item, value: item.value + 1 };
                        }
                        break;
                    case "Números Decimales":
                        if (!isNaN(Number(word)) && word != "") {
                            if (!Number.isInteger(Number(word)))
                                return { ...item, value: item.value + 1 };
                        }
                        break;
                    case "Cadena de caracteres":
                        if (word.startsWith('"') && word.endsWith('"'))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Comentarios Multilinea":
                        if (word.startsWith("/*") && word.endsWith("*/"))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Comentarios de Linea":
                        if (word.startsWith("//"))
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Paréntesis":
                        if (word == "(" || word == ")")
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Llaves":
                        if (word == "{" || word == "}")
                            return { ...item, value: item.value + 1 };
                        break;
                    case "Errores":
                    // if (word != "")
                    //     return { ...item, value: wordCount - total };
                    default:
                        return item;
                }
                return item;
            });

            const total = prevData
                .slice(0, -1)
                .reduce((acc, item) => acc + item.value, 0);
            updatedData.find((item) => item.label === "Errores").value =
                wordCount - total;

            return updatedData;
        });
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
