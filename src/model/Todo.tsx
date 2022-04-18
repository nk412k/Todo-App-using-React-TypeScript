class Todo{
    text:string;
    id:string;
    constructor(enteredText:string){
        this.text=enteredText;
        this.id=new Date().toISOString();
    }
}

export default Todo;