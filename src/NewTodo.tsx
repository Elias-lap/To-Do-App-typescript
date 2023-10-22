import React, { useRef } from "react";
import './NewTodo.css'
type NewTODO ={
    todoAddHandel :(Value:string)=>void
   
}
const NewTodo: React.FC <NewTODO> = (props) => {
  const typeInput = useRef<HTMLInputElement>(null);
  const HandelSubmit = (event: React.FormEvent) => {
    event.preventDefault();
   const valueINput= typeInput.current!.value;
  
   props.todoAddHandel(valueINput)
  };

  return (
    <form onSubmit={HandelSubmit} className="form-control">
      <label htmlFor="Todo">To Do List</label>
      <input type="text" id="Todo" ref={typeInput} />
      <button type="submit">Add TODO</button>
     
    </form>
  );
};

export default NewTodo;
