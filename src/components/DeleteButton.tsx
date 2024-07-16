import { useTodosContext } from "../lib/hooks";

type DeleteButtonType={
    id:number;
}
export default function DeleteButton({id}:DeleteButtonType) {
    const {deleteTodo}=useTodosContext();
    
    return (
        <button 
            onClick={(e)=>{
                e.stopPropagation();
                deleteTodo(id)
            }}
        >
            ❌
        </button>
    )
}
