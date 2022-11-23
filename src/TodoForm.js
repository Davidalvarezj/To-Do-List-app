import React from 'react';
import "./TodoForm.css"




function TodoForm({saveTodo, setOpenModal, addTodo}){
    const [newTodoValue, setNewTodoValue] = React.useState("")

const onChange = (event) =>{
    setNewTodoValue (event.target.value) 
}

const onCancel = () =>{
    setOpenModal (false)
}
const onSubmit = (event) =>{
   event.preventDefault();
   addTodo(newTodoValue);
   setOpenModal (false)

}


    return(
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea value = {newTodoValue} onChange={onChange} placeholder='Write new activity'></textarea>
            <div className="TodoForm-buttonContainer">
                <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">Cancel</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">Add</button>
            </div>


        </form>


    )


}
export {TodoForm}