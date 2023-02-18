import React from 'react'

import { 
    FaTrash
} from 'react-icons/fa'

// react app using web hook

function About() {

    const [todos, setTodos] = React.useState([
        { text: "Learn about React",  isCompleted: false },
        { text: "Meet friend for lunch",  isCompleted: false },
        { text: "Build really cool todo app",  isCompleted: false }
      ]);

    const [value, setValue] = React.useState("");

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };

      const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };

      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

  return (
    <div className='text-white items-center justify-center'>
        <h1 className=' text-center font-extrabold  text-2xl text-yellow-400'>Todo</h1>
        
        <TodoForm addTodo={addTodo} />
        
        {todos.map((todo, index)=>(

        // this button is removed cause it cant access the function from outside 
        // <Todo key={index} index={index} todo={todo} />

        <div className=" border-b-cyan-700 shadow-sm shadow-sky-800 p-2 bg-slate-800 my-5 rounded-sm mx-5 flex items-center justify-between">
         <p className={todo.isCompleted?' line-through':''}>   {todo.text}</p>
         <div>
        
         <button className=' mx-5' onClick={() => removeTodo(index)} > <FaTrash className=' text-red-400 flex'/></button>
         <button className=' bg-slate-400 p-1 rounded-sm ' onClick={() => completeTodo(index)} >Completed</button>
         </div>
          
        </div>

        ))}


      
        


  </div>
  )
}




export default About

// inapp function

function Todo({ todo }) {
    return (
      <div className=" border-b-cyan-700 shadow-sm shadow-sky-800 p-2 bg-slate-800 my-5 rounded-sm mx-5 flex items-center justify-between">
        {todo.text}
       <button > <FaTrash className=' text-red-400 flex'/></button>
      </div>
    );
  };
  


  function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2 mx-5 w-64 rounded-sm text-gray-800"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }