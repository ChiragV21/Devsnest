import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./action/action";
const UserInput = () => {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <div>
      <input
        className="user-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="user-input"
        onClick={() => {
          dispatch(addNote(input));
          setInput("");
        }}
      >
        Add Note
      </button>
    </div>
  );
};

export default UserInput;
