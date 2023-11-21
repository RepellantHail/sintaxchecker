'use client'
import React from 'react';
import { useState } from 'react';

export default function TextEditor({title, content}) {

    return(
        <div className='p-2 h-100 overflow-y-hidden'>
            <h3 className='fs-4'>{title}</h3>
            <pre
                className='h-100 overflow-y-auto' 
            >
                {content}
            </pre>
        </div>
    );
}