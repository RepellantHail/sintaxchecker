import React from 'react';
import FileUploader from './FileUploader';
import TextEditor from './TextEditor';

export default function Text({title}) {

  return (
    <div className="col-8">
        <h2 className='fs-2'>{title}</h2>
        <TextEditor 
        />
        <FileUploader  
        />
    </div>
  );
}
