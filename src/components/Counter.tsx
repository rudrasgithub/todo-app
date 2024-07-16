import { useTodosContext } from "../lib/hooks"

export default function Counter(){
    const {completedCount,totalCount}=useTodosContext();
    return (
        <p>
            <b>{completedCount}</b>/{totalCount} todos completed
        </p>
    )
}