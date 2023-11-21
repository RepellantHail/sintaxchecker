"use client";
import React, { useState, useEffect } from "react";

export default function TextEditor({ title, content, text }) {
    const [editableContent, setEditableContent] = useState(content);

    useEffect(() => {
        setEditableContent(content);
        text(content);
    }, [content]);

    const handleTextAreaChange = (event) => {
        setEditableContent(event.target.value);
        text(event.target.value);
    };

    const textAreaStyle = {
        width: "100%",
        border: "none",
    };

    return (
        <div className="p-2 h-100 overflow-y-hidden  ">
            <h3 className="fs-4 transbox">{title}</h3>
            <textarea
                className="h-100 overflow-y-auto text-center  transbox"
                style={textAreaStyle}
                value={editableContent}
                onChange={handleTextAreaChange}
            ></textarea>
        </div>
    );
}
