import React from 'react';
import './TodoItem.css';
import { FaCheckCircle } from "react-icons/fa"
import { FaTrashAlt } from "react-icons/fa"


function TodoItem(props) {
    return (
    <li className="TodoItem">
        <span className={`Icon2 Icon-check ${props.completed && 'Icon-check--active'}`} onClick = {props.onComplete}>
        <FaCheckCircle /> 
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} onClick = {props.onComplete}>
        {props.text}
        </p>
        <span className="Icon Icon-delete" onClick = {props.onDelete}>
        <FaTrashAlt /> 
        </span>
    </li>
    );



  





  }



export {TodoItem}