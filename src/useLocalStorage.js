import React from 'react';


 /*--Crea nuevo Reacthook para local sorage--*/
 function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
  
    const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(()=>{   
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
      
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItems = initialValue;
        }else{
          parsedItems = JSON.parse(localStorageItem);
        }
    
        setItem(parsedItems);
        setLoading(false);
      } catch(error){
        setError(error);
      }
  
    }, 2000);
  });
  
    const saveItem = (newItem) =>{
      try {
        const stringifyItem = JSON.stringify(newItem)
        setItem(newItem)
        localStorage.setItem(itemName,stringifyItem)
      }catch(error){
        setError(error);
      }
  
    }
    return {
      item,
      saveItem,
      loading,
      error,
    }
  }
    /*--/Crea nuevo Reacthook para local sorage--*/

    export {useLocalStorage}
  