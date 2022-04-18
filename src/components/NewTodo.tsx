import { useContext, useRef } from "react";
import { TodosContext } from "../store/TodosContext";
import classes from './NewTodo.module.css';

const NewTodo:React.FC=()=>{
    const enteredInputRef=useRef<HTMLInputElement>(null);
    const todoCtx=useContext(TodosContext);
    const onSubmitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText=enteredInputRef.current!.value;
        if(enteredText.trim()===''){
            return;
        }
        todoCtx.onAddTodo(enteredText);
        enteredInputRef.current!.value='';
    }
    return(
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <label htmlFor='text'>Todo Text</label>
            <input id='text' type='text' ref={enteredInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;