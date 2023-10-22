import React from 'react'
import './TodoList.css'
 interface TodoListinterface  {
   itmes : {id:string , text:string}[],
   DELETEItem :(Value:string)=>void
 }
 const TodoList:React.FC<TodoListinterface> =props=> {




  return (
     <ul>
        {props.itmes.map(todo=>(
            <li key={todo.id}>{todo.text}
            <span> <button onClick={()=>{props.DELETEItem(todo.id)}} type="reset">Delete</button></span>
            </li>
        )

        )}
     </ul>
  )
}
export default TodoList