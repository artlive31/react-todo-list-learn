import { useState } from "react";
import NewTask from "../components/NewTask";
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    toast.success("Successfully Added!");
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    toast.success("Successfully Delete!");
  };

  const updateTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    toast.success("Successfully Update!");
  };

  return (
    <>
      <NewTask addTask={addTask} />

      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((todo, i) => (
              <TodoItem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
};

export default HomePage;
