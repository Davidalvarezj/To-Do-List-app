import React from 'react';
import './TodoCounter.css';
import { FaCheckCircle } from "react-icons/fa"


function TodoCounter({total , completed}){



return (
<section>   
    <h2 className = 'TodoTitle'><FaCheckCircle className = 'cheqicon' /></h2>
    <h1 className = 'TodoTitle2'>You have completed:</h1>
    <h2 className = 'TodoCounter'> {completed} tasks, out of {total}.</h2>
</section>     
)

} 

export {TodoCounter}