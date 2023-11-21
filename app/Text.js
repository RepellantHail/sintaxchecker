"use client";

import React from "react";
import FileUploader from "./FileUploader";
import TextEditor from "./TextEditor";
import { useState } from "react";

export default function Text({ title, handleContent }) {
    const [fileContent, setFileContent] = useState("Vacio");
    const [fileTitle, setFileTitle] = useState("Archivo.txt");

    const handleFileUpload = (content) => {
        setFileContent(content);
        handleContent(content);
    };

    const handleTitle = (title) => {
        setFileTitle(title);
    };

    return (
        <div className="col-8 h-100 d-flex flex-column">
            <h2 className="fs-2 p-2">{title}</h2>
            <TextEditor
                title={fileTitle}
                content={fileContent}
                text={handleContent}
            />
            <FileUploader
                onFileContent={handleFileUpload}
                onFileTitle={handleTitle}
            />
        </div>
    );
}
