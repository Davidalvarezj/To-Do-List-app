import React from 'react';
import './App.css';
import {CreateTodoButton} from "./CreateTodoButton"
import {TodoCounter} from "./TodoCounter"
import {TodoItem} from "./TodoItem"
import {TodoList} from "./TodoList"
import {TodoSearch} from "./TodoSearch"
import {useLocalStorage} from "./useLocalStorage"
import { FaCalendarCheck } from "react-icons/fa"
import { FaClipboardCheck } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"

const objdef = [{
  text: "Buy milk at the grocery store",
  completed: false
},{
  text: "Take the car to the maintenance service",
  completed: false
},{
  text: "Learn new things every day",
  completed: false
}];


function App() {
  const {
    item: todos,
    saveItem: saveTodo,
    loading: loading,
    error: error,
  }= useLocalStorage("TODOS_V1", []);

  /*--Guardar estado de lista Todos, guardar estado busqueda de todos--*/

  const [searchyValue, setSearchValue] = React.useState("");
  const [newTodoValue, setNewTodoValue] = React.useState("")


  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

let searchedTodos = [];
if (!searchyValue.length>=1){
  searchedTodos = todos
}else {
searchedTodos = todos.filter(todo => {
  const todotext = todo.text.toLowerCase();
  const searchtext = searchyValue.toLowerCase();
  return todotext.includes(searchtext);
})
}
 /*--/Guardar estado de lista Todos, guardar estado busqueda de todos--*/


  /*--Editar completed todos actualizar estado lista ppal todos--*/
  /*-Se llama con boton en todoitem-*/
const completeTodo = (text) =>{
  const todoIndex = todos.findIndex(elm => elm.text === text);
  const newTodos = [...todos]
  if(newTodos[todoIndex].completed === false){
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos)
  }else{
    newTodos[todoIndex].completed = false;
    saveTodo(newTodos)
  }
}
  /*--/Editar completed todos actualizar estado lista ppal todos--*/



/*--Borrar todo y actualizar estado--*/
/* boton borrar caneca */
const deleteTodo = (text) =>{
  const todoIndex = todos.findIndex(elm => elm.text === text);
  const newTodos = [...todos]
  newTodos.splice(todoIndex,1)
  saveTodo(newTodos)
}
/*--/Borrar todo y actualizar estado--*/

/* Adicionar un nuevo todo */
const addTodo = (text) =>{
  const newTodos = [...todos]
  newTodos.push({text: text, completed: false})
  saveTodo(newTodos);
  setNewTodoValue ("")

}
/* /Adicionar un nuevo todo */

const onChange = (event) =>{
  setNewTodoValue (event.target.value) 
}

// console.log("Render - despues del useEffect")


  return (
/*--Main aplication structure--*/
<React.Fragment>
  <div className='container'>
    <div className='container-new'>
      <h1 className='tittle-h1'>Welcome!</h1>
      <h1> <FaCalendarCheck className='calendaricon'/> To do app: </h1>
      <p> Feel free to create and delete new activities.</p>
      <textarea value = {newTodoValue} onChange={onChange} className='addtask-textarea' placeholder='Write new activity...'></textarea>
      <button onClick={()=>addTodo(newTodoValue)}  className='addtask-button'>Add task<FaCheck className='bottomicon2'/></button>
      <div><FaClipboardCheck className='bottomicon --fa-inverse'/></div>
      
    </div>

    <div className='container-list'>
      <TodoCounter completed = {completedTodos} total = {totalTodos} />
      <TodoSearch searchyValue={searchyValue} setSearchValue={setSearchValue}/>
        <TodoList>
          {error && <h4 className='intro-msg'>Error...</h4>}
          {loading && <h4 className='intro-msg loadingmsg'>Loading...</h4>}
          {(!loading && !searchedTodos.length ) && <h4 className='intro-msg'>Create A new task!</h4>}
          {searchedTodos.map((elem, index) => (
            <TodoItem text={elem.text} key={index} completed = {elem.completed} onComplete = {()=>completeTodo(elem.text)} onDelete = {()=>deleteTodo(elem.text)}/>
          ))}
        </TodoList>
    </div>
  </div>
    {/* Valida si Open modal esta en true     */}

</React.Fragment>
  );
}
export default App;
