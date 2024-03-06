"use client";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {


  const [todos, setTodos] = useState([]);


  const handleRequest = async () => {
    const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    console.log(todo.data.slice(0,2));
    setTodos(todo.data.slice(0,2))
  }

  useEffect(() => {
    handleRequest()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center justify-between  text-sm lg:flex">
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus rem,
          corrupti odit quas, ex enim, atque cum dolore necessitatibus assumenda
          cupiditate aut et numquam laboriosam accusamus ipsam placeat
          blanditiis! Deleniti.
        </p> */}

        {todos.map((todo) => {
          return (
            <div className="flex flex-col gap-5">
              <p>{todo.userId}</p>
              <p>{todo.title}</p>
            </div>
          )
        })}

      </div>
    </main>
  );
}





// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [description, setDescription] = useState("");
  
//   const handleRequest = async () => {
//     const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/');
//     console.log(todo.data.slice(0,2));
//     setTodos(todo.data.slice(0,2));
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handlePutRequest = async (id) => {
//     try {
//       const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         title: inputValue,
//         description: description
//       });
//       console.log("PUT request response:", response.data);
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   useEffect(() => {
//     handleRequest();
//   }, []);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="max-w-5xl w-full items-center justify-between text-sm lg:flex">
//         <div>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter title"
//           />
//           <textarea
//             value={description}
//             onChange={handleDescriptionChange}
//             placeholder="Enter description"
//           />
//           <button onClick={() => handlePutRequest(1)}>Update Todo</button>
//         </div>

//         {todos.map((todo) => {
//           return (
//             <div key={todo.id} className="flex flex-col gap-5">
//               <p>{todo.userId}</p>
//               <p>{todo.title}</p>
//             </div>
//           );
//         })}
//       </div>
//     </main>
//   );
// }
