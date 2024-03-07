import React, { useEffect, useState } from "react";
import { getTodos } from "@/services/page";

const Page = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getTodos(); // Destructure 'data' directly from the response object
        setTodos(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {todos.map(
        (
          { id, userId, title } // Destructure properties directly in map function
        ) => (
          <div className="h-50 gap-5 justify-center my-5" key={id}>
            <div className="p-5 bg-black rounded-xl shadow text-white m-1  hover:saturate-150 ease-in duration-100 hover:scale-[0.99]">
              <p>Id: {id}</p>
              <p>User Id: {userId}</p>
              <p>Title: {title}</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Page;
