import React from 'react';
import './Feature.css'; 

export const Feature = ({ title, parrafo, className }) => {

return( <div className={`${className}`}>
            <h1 className={`titulo-${className}`}>{ title }</h1>
            <p className={`parrafo-${className}`}>{parrafo}</p>
        </div>
)
}

export default Feature;