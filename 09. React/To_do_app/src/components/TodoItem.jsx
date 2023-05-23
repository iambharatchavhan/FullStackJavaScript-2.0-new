import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { HiOutlineCheck } from "react-icons/hi";
import { FiEdit2 } from "react-icons/fi";

const TodoItem = ({ todo, onDelete, onEdit, onStatus }) => {
  const [editableTodo, setEditableTodo] = useState(todo.todoName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditableTodo(todo.todoName);
  };

  const handleInputChange = (event) => {
    setEditableTodo(event.target.value);
  };
  const handleSave = () => {
    setIsEditing(false);
    onEdit(todo.id, editableTodo);
  };
  const completeClass = `capitalize ${
    todo.status === true ? "text-red-400 line-through" : ""
  }`;

  const updateCheckbox = () => {
    onStatus(todo.id);
  };

  return (
    <div className=" swing-in-top-fwd flex flex-row items-center justify-between border-2 space-x-4 shadow bg-white w-[330px] md:w-[500px] px-8 py-3 rounded border-red-300">
      {isEditing ? (
        <input
          type="text"
          value={editableTodo}
          onChange={handleInputChange}
          className="capitalize border-b-2 border-red-300 py-1 text-red-500 outline-none w-full"
        />
      ) : (
        <div className="flex flex-row items-center justify-start space-x-4 cursor-pointer">
          <input
            type="checkbox"
            value={todo.status}
            id={`status ${todo.id}`}
            onChange={updateCheckbox}
            checked={todo.status}
            className="h-5 w-5 text-red-400 p-2"
          />
          <label htmlFor={`status ${todo.id}`}>
            <h1 className={completeClass}>{todo.todoName}</h1>{" "}
          </label>
        </div>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <div className="flex flex-row items-center space-x-2">
            <div className="bg-[#4c956c] rounded-full text-white p-2 transform-all-0.4s hover:opacity-90">
              <HiOutlineCheck
                onClick={() => handleSave()}
                className="cursor-pointer text-3xl hover:shadow-sm"
                size={25}
              />
            </div>
            <div className="bg-red-400 rounded-full text-white p-4 transform-all-0.4s hover:opacity-90">
              <ImCross
                onClick={handleCancel}
                className="cursor-pointer text-3xl hover:shadow-sm"
                size={11}
              />
            </div>
          </div>
        ) : (
          <div
            className="bg-red-400 rounded-full cursor-pointer text-white p-4 transform-all-0.4s hover:opacity-90"
            onClick={onDelete}
          >
            <ImCross
              className="cursor-pointer text-3xl hover:shadow-sm"
              size={11}
            />
          </div>
        )}
        {!isEditing && (
          <button
            className={`p-3 rounded-full text-white  hover:text-white transition-all duration-200 ease-in-out ${
              todo.status ? "pointer-events-none bg-black " : "bg-blue-500"
            }`}
            onClick={handleEdit}
            disabled={todo.status}
          >
            <FiEdit2 className="cursor-pointer hover:shadow-sm" size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
