'use client'

import React from 'react';
import { useState } from 'react';

export default function TextEditor() {
    const [text , setText ] = useState("Vacio");
    const [title, setTitle] = useState("Archivo.txt");

    function handleText() {
    }

    function handleTitle() {
    }

    return(
        <div className="container text-center">
            <h3 className='fs-4'>{title}</h3>
            <p>{text}</p>
        </div>
    );
}