import {createContext, useEffect, useState } from "react"
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderTypes={
    children:React.ReactNode
}

type TodosContextTypes={
    todos:Todo[];
    totalCount:number;
    completedCount:number;
    addTodo:(content:string)=>void;
    toggleTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}

export const TodosContext=createContext<TodosContextTypes | null>(null);

export default function TodosContextProvider({children}:TodosContextProviderTypes) {

    const {isAuthenticated}=useKindeAuth()

    function getPrevTodos(){
        const savedTodos=localStorage.getItem("todos");
        if(savedTodos){
            return JSON.parse(savedTodos)
        }
        return [];
    }

    const [todos,setTodos]=useState<Todo[]>(getPrevTodos);

    const totalCount = todos.length
    const completedCount=todos.filter(todo=>todo.completed).length;

    const addTodo=(content:string)=>{

        if(todos.length>=3 && !isAuthenticated){
            alert("To add more todos, please log in.");
            return;
        }

        setTodos([
            ...todos,
            {
                id:todos.length+1,
                content,
                completed:false
            }
        ])
    }

    const toggleTodo=(id:number)=>{
        setTodos(
            todos.map(todo=>
                todo.id===id?{...todo,completed:!todo.completed}:todo
            )
        )
    }

    const deleteTodo=(id:number)=>{
        setTodos(todos.filter(todo=>todo.id!==id));
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    return (
        <TodosContext.Provider
            value={{
                todos,
                totalCount,
                completedCount,
                toggleTodo,
                addTodo,
                deleteTodo
            }}
        >
            {children}
        </TodosContext.Provider>
    )
}
