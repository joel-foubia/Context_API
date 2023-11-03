// import React, { createContext, useState } from 'react'
// const INITIALVALUE = {
//     id: Math.floor(Math.random() * 100),
//     name: "Joel Foubia",
//     age: 30,
//     profession: "Software Engineer"
// }

// function TodoProvider({children}) {

//     function handleAdd(value) {
//         if (!value) {
//           return false;
//         }
//         const newTodo = {
//           id: Math.floor(Math.random() * 100),
//           name: value,
//           age: 30,
//           profession: "Software Engineer"
//         }
//         setIsToggle((isToggle) => !isToggle);
//         setTodo((todo) => [...todo, newTodo]);
//         setText("")
//       }

//       function handleDelete(id) {
//         setTodo(todo.filter((valueTodo) => valueTodo.id !== id));
//       }
    
//     const [text, setText] = useState("");
//     const [todo, setTodo] = useState([INITIALVALUE]);
//     const [isToggle, setIsToggle] = useState(false);

//    let TodoContext = createContext();
//    return<TodoContext.Provider value={{
//     text,
//       setText,
//       isToggle,
//       todo,
//       handleAdd,
//       handleDelete
//    }}>
//     {children}
//    </TodoContext.Provider>
// }

// export {TodoProvider,TodoContext}  
