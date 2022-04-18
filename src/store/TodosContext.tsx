import Todo from "../model/Todo"
import React,{ReactNode, useState} from 'react';

type TodosContextObj={
    items:Todo[],
    onAddTodo:(enteredText:string)=>void,
    onRemoveTodo:(id:string)=>void,
}
export const TodosContext=React.createContext<TodosContextObj>({
    items:[],
    onAddTodo:()=>{},
    onRemoveTodo:(id:string)=>{}
});

const TodosContextProvider:React.FC<{children:ReactNode}>=(props)=>{
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAddTodoHandlder = (enteredText: string) => {
      setTodos((previousItem) => previousItem.concat(new Todo(enteredText)));
    };
    const onRemoveTodoHandler=(id:string)=>{
        setTodos((prevTodo)=>(prevTodo.filter((item)=>item.id!==id)));
    }
    const contextValue:TodosContextObj={
        items:todos,
        onAddTodo:onAddTodoHandlder,
        onRemoveTodo:onRemoveTodoHandler,
    }
    return(
        <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
    )
}
export default TodosContextProvider;