import React from 'react';

const Button = (props) => <button 
                        onClick={() => props.click(props.sign)}>{props.text} </button>;

export default Button; 

