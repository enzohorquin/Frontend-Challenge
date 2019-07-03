import React from 'react'; 
import './Button.css';

export const Button = ({ color, text }) => {

    let colorButton = color === 'pink' ? 'pink' : 'white'; 

    return ( <button className={`button ${colorButton}`} type="submit">{text}</button>)

}
export default Button;