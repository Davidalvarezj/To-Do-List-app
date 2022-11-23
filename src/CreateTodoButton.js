import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton({setOpenModal, openModal}) {
    return (
      <button className="CreateTodoButton" onClick={()=> ButtonOpenModal()}>+</button>
    );

    function ButtonOpenModal(){
      setOpenModal(!openModal);

    }
  


  }



export {CreateTodoButton}
