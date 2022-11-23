import React from 'react';
import './TodoCounter.css';
import { FaCheckCircle } from "react-icons/fa"


function TodoCounter({total , completed}){



return (
<section>   
    <h2 className = 'TodoTitle'>Activity List <FaCheckCircle className = 'cheqicon' /></h2>
    <h2 className = 'TodoCounter'>Has completado {completed} de {total} To Do</h2>
</section>     
)

} 

export {TodoCounter}