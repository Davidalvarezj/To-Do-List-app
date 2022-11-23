import React from 'react';
//import './App.css';
import {CreateTodoButton} from "./CreateTodoButton"
import {TodoCounter} from "./TodoCounter"
import {TodoItem} from "./TodoItem"
import {TodoList} from "./TodoList"
import {TodoSearch} from "./TodoSearch"
import {useLocalStorage} from "./useLocalStorage"
import {Modal} from "./Modal"
import {TodoForm} from "./TodoForm"


function App() {
  const {
    item: todos,
    saveItem: saveTodo,
    loading: loading,
    error: error,
  }= useLocalStorage("TODOS_V1", []);

  /*--Guardar estado de lista Todos, guardar estado busqueda de todos--*/

  const [searchyValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

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
  saveTodo(newTodos)
}
/* /Adicionar un nuevo todo */



// console.log("Render - despues del useEffect")


  return (
/*--Main aplication structure--*/
<React.Fragment>

    <TodoCounter completed = {completedTodos} total = {totalTodos} />

    
    <TodoSearch searchyValue={searchyValue} setSearchValue={setSearchValue}/>

      <TodoList>
{error && <p>Desesperate, hubo un error...</p>}
{loading && <p>Estamos Cargando, no desesperes...</p>}
{(!loading && !searchedTodos.length ) && <p>Cren un nuevo todo!</p>}

        {searchedTodos.map((elem) => (
          <TodoItem text={elem.text} key={elem.text} completed = {elem.completed} onComplete = {()=>completeTodo(elem.text)} onDelete = {()=>deleteTodo(elem.text)}/>
        ))}
      </TodoList>


    {/* Valida si Open modal esta en true     */}
      {openModal && (
        <Modal>
          <TodoForm saveTodo={saveTodo} setOpenModal = {setOpenModal} addTodo = {addTodo}/>
        </Modal >)}

      

    <CreateTodoButton setOpenModal = {setOpenModal} openModal={openModal}/>


</React.Fragment>

  );
}

export default App;
