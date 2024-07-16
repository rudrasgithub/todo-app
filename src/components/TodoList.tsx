import { useTodosContext } from "../lib/hooks";
import DeleteButton from "./DeleteButton";

export default function TodoList(){

  const {totalCount,isLoading,toggleTodo,todos}=useTodosContext();

  return (
    <ul className="col-[1/2] row-[2/3] bg-[#fff] [scrollbar-width:thin] relative">
      {isLoading && (
        <li className="h-full flex justify-center items-center font-semibold">
          Loading todos...
        </li>
      )}

      {totalCount===0 ? (
        <li className="h-full font-semibold flex justify-center items-center">
          Start by adding a todo
        </li>
      ):null}

      {todos.map(todo=>{
        return(
          <li 
            key={todo.id}
            className="flex justify-between items-center px-8 h-[50px] cursor-pointer text-[14px] border-b 
            border-black/[8%]"
            onClick={()=>toggleTodo(todo.id)}
          >
            <span className={`${todo.completed ? "line-through text-[#ccc]":''}`}>
              {todo.content}
            </span>
            <DeleteButton id={todo.id}/>
          </li>
        )
      })}
    </ul>
  )
}
