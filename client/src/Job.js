import React from 'react';
import './App.css';

export default function Job({job}) {
    return (
        <div className='job'>
            {job.title}
            {job.company}
        </div>
    )
    
}