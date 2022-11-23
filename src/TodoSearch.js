import React from 'react';
import './TodoSearch.css';



//---- Define estado inicial de input en "" 
function TodoSearch({searchyValue, setSearchValue}){


   


//--Esta funcion actualiza el estado a renderizar segun valor ingresado
function onSearchValueChange(event){
    console.log(event.target.value)
    setSearchValue(event.target.value)
}

return (
   
    <input className = "TodoSearch" placeholder='Busqueda' onChange={onSearchValueChange}></input>

)

} 





export {TodoSearch}