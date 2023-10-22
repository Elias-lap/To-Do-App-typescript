import React, { useState} from 'react';
import TodoList from './TodoList';
import './App.css';
import NewTodo from './NewTodo';

const App:React.FC= ()=> {
    // const items= [{id :'t1' , text:'Finish the course'}]
     const [ NewToDo ,setNewToDo] =useState<{id:string , text:string}[]>([])


function todoAddHandel(item:string){
     setNewToDo([...NewToDo,{id:Math.random().toString(),text:item}])
     console.log(item)
}
function DELETEItem(itemId:string){
  const NewArry=NewToDo.filter((todo)=>
 todo.id !== itemId)
 setNewToDo(NewArry)
  return NewArry
 
}
  return (
   <>
    <NewTodo todoAddHandel={todoAddHandel}/>
   <TodoList itmes={NewToDo} DELETEItem={DELETEItem}/>
   </>
  );
}

export default App;
