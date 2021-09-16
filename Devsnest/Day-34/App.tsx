import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import UserInput from "./UserInput";
import { reducerType } from "./reducer";
import { removeNote } from "./action/action";
function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <UserInput />
      <div className="notes-container">
        {notes.length === 0 ? (
          <h3>Add Notes</h3>
        ) : (
          <div>
            {notes.map((val: string, idx: number) => (
              <div className="note-item">
                <span>{val}</span>
                <span onClick={() => dispatch(removeNote(idx))}>
                  <h4>X</h4>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
