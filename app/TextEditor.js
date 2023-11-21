'use client'
import React from 'react';
import { useState } from 'react';

export default function TextEditor({title, content}) {
  const textAreaStyle = {
    background: 'none',
    width: '100%',
    border: 'none'
    
  };

    return(
        <div className='p-2 h-100 overflow-y-hidden '>
            <h3 className='fs-4'>{title}</h3>
            <textarea
                className='h-100 overflow-y-auto text-center' 
                style={textAreaStyle}
                value={content}
            >
            </textarea>
        </div>
    );
}