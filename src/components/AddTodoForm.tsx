import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/hooks";

export default function AddTodoForm() {

  const [todoContent,setTodoContent]=useState("");
  const {addTodo}=useTodosContext()

  return(
    <form
      onSubmit={(e)=>{
        e.preventDefault();
        addTodo(todoContent)
        setTodoContent("");
      }}
    >
      <h2 className="font-medium text-[#231d15] text-[16px]">Add a todo</h2>
      <input 
        type="text" 
        autoFocus
        className="h-[45px] border border-black/[12%] rounded-[5px] text-[14px] block w-full px-[16px] my-[9px]"
        onChange={(e)=>{
          setTodoContent(e.target.value);
        }}
        value={todoContent}
      />
      <Button>Add to list</Button>
  </form>
  );
}
