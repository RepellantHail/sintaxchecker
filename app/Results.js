import React from 'react';
import ResultRow from './ResultRow';

export default function Result({ title, content }) {

    const initialData = [
        { label: 'Palabras reservadas'      , value: 0 },
        { label: 'Identificadores'          , value: 0 },
        { label: 'Operadores Relacionales'  , value: 0 },
        { label: 'Operadores Lógicos'       , value: 0 },
        { label: 'Operadores Aritméticos'   , value: 0 },
        { label: 'Asignaciones'             , value: 0 },
        { label: 'Número Enteros'           , value: 0 },
        { label: 'Números Decimales'        , value: 0 },
        { label: 'Cadena de caracteres'     , value: 0 },
        { label: 'Comentarios Multilinea'   , value: 0 },
        { label: 'Comentario de Linea'      , value: 0 },
        { label: 'Paréntesis'               , value: 0 },
        { label: 'Llaves'                   , value: 0 },
        { label: 'Errores'                  , value: 0 },
      ];

  return (
    <div className="col-4">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="container text-center">
       {initialData.map((item, index) => (
          <ResultRow 
            key={index} 
            label={item.label} 
            value={item.value} 
            />
        ))}
      </div>
    </div>
  );
}
