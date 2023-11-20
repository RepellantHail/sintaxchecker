'use client'

import React from 'react';
import { useState } from 'react';

export default function FileUploader  ()  {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

  return (
    <button onClick={handleClick}>
      Upload {count} 
    </button>
  );
};
