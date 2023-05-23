import TodoItem from "./components/TodoItem";
import { BiTask } from "react-icons/bi";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./App.css";

function App() {
  const [filteredTodo, setFilteredTodo] = useState("all");
  const [start, setStart] = useState(0);
  const [fraction, setFraction] = useState(0);
  const [newTask, setNewTask] = useState(null);
  const [totalInCompleted, setTotalInCompleted] = useState(0);

  const [storedTodos, setStoredTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(todos.length);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    setTotal(todos.length);
    const filterStart = todos.filter((item) => item.status === true).length;
    const incomplete = todos.filter((item) => item.status === false).length;

    setStart(filterStart);
    setTotalInCompleted(incomplete);
    setFraction(start / total);
    console.log(fraction);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(storedTodos);
  }, [storedTodos]);

  function inputNew(e) {
    setNewTodo(e.target.value);
  }
  function addTodo(e) {
    if (e.keyCode === 13 || e === "addItem") {
      if (newTodo !== "") {
        setTodos([
          ...todos,
          { id: `${todos.length + 1}`, todoName: newTodo, status: false },
        ]);
        setNewTodo("");
        setNewTask(false);
      }
    }
  }
  function deleteTodo(deletedTodo) {
    const newTodos = todos.filter((todo) => todo !== deletedTodo);
    setTodos(newTodos);
  }

  function editTodo(index, newTodo) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === index) {
        return {
          ...todo,
          todoName: newTodo,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodo);
  }

  function updateStatus(index) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === index) {
        return {
          ...todo,
          status: !todo.status,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodo);
  }

  function closeInputBox() {
    setNewTask(null);
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }
  const filterChangeHandler = (filter) => {
    setFilteredTodo(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filteredTodo === "all") {
      return todo;
    } else if (filteredTodo === "active") {
      return todo.status === false;
    } else {
      return todo.status === true;
    }
  });

  const specialLink = `bg-red-400 p-1 w-0 `;
  const widthColor = Math.round((start / total) * 100) + "%";

  function clearCompleted() {
    const updatedTodo = todos.filter((todo) => todo.status === false);
    setTodos(updatedTodo);
  }
  console.log(todos);
  return (
    <div className="mx-auto my-8 container flex flex-col items-center justify-between space-y-8">
      <div className="bg-red-400">
        <div className="flex flex-row items-center justify-between border w-[330px] md:w-[500px] px-4 py-4">
          <h1
            className="text-2xl font-bold text-white uppercase
        "
          >
            Todo
          </h1>
          <BiTask
            className="text-2xl text-white font-bold cursor-pointer"
            size={35}
          />
        </div>
      </div>
      {newTask ? (
        <div className="flex flex-col space-y-2 items-center justify-between">
          <input
            type="text"
            onChange={inputNew}
            value={newTodo}
            onKeyDown={addTodo}
            placeholder="Add New Task "
            className=" swing-in-top-fwd w-[330px] md:w-[500px]   px-4 py-3 uppercase  text-center border-2 border-red-300    text-black-400 text-sm outline-none "
          />
          <div className="flex flex-row items-center space-x-4">
            <button
              className="px-8 py-2 bg-red-400 rounded text-white font-bold uppercase"
              id="addItem"
              onClick={() => {
                addTodo("addItem");
              }}
            >
              Add
            </button>
            <button
              className="px-8 py-2 bg-red-400 rounded text-white font-bold uppercase"
              onClick={closeInputBox}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setNewTask(true)}
          className="bg-red-400 w-[330px] md:w-[500px] py-3 text-white font-bold uppercase rounded-sm text-md "
        >
          Add New Task
        </button>
      )}
      <div className="border-red-400 border-2 px-1 h-4 bg-white w-[330px] md:w-[500px] flex flex-col justify-center">
        <div className={specialLink} style={{ width: widthColor }}></div>
      </div>

      {filteredTodos.length > 0 ? (
        <div className="flex flex-col items-center space-y-2">
          {filteredTodos.map((todo, index) => (
            <TodoItem
              id={todo.id}
              todo={todo}
              onDelete={() => deleteTodo(todo)}
              onEdit={editTodo}
              onStatus={updateStatus}
              todos={todos}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-xl uppercase font-bold">
          No Tasks in <span className="text-red-400">{filteredTodo} </span> Box{" "}
        </h1>
      )}
      <div
        className="flex flex-row items-center space-x-4 font-bold uppercase text-sm w-[330px] md:w-[500px]
      "
      >
        <button
          className={`${
            filteredTodo === "all" ? " bg-red-400 text-white" : ""
          }  px-6 md:px-12 py-2`}
          onClick={() => filterChangeHandler("all")}
        >
          All
        </button>
        <button
          className={`${
            filteredTodo === "active" ? " bg-red-400 text-white" : ""
          }  px-6 md:px-12 py-2 `}
          onClick={() => filterChangeHandler("active")}
        >
          Active
        </button>
        <button
          className={`${
            filteredTodo === "completed" ? " bg-red-400 text-white" : ""
          }  px-6 md:px-12 py-2 `}
          onClick={() => filterChangeHandler("completed")}
        >
          Completed
        </button>
      </div>
      <div
        className="flex flex-row items-center space-x-4 font-bold uppercase text-sm justify-between
      "
      >
        <h1>Total Tasks Remaining : {totalInCompleted}</h1>
        <button
          className="uppercase text-red-400"
          onClick={() => clearCompleted()}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
