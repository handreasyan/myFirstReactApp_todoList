import "./App.css";
import { Form } from "./form";
import { List } from "./list";
import { Footer } from "./footer";
import { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "delete_all") {
    return state.filter((el) => !el.isCompleted);
  } else if (action.type === "changeChecked") {
    return state.map((el) => {
      return el.id === action.payload.obj.id ? action.payload.obj : el;
    });
  } else if (action.type === "add") {
    return [
      ...state,
      {
        id: state.length + 1,
        isCompleted: false,
        text: action.payload.text,
      },
    ];
  } else if (action.type === "delete") {
    return state.filter((el) => el.id !== action.payload.id);
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, [
    { id: 1, isCompleted: true, text: "Learn HTML" },
    { id: 2, isCompleted: true, text: "Learn CSS" },
    { id: 3, isCompleted: true, text: "Learn JS" },
    { id: 4, isCompleted: false, text: "Learn React.js" },
    { id: 5, isCompleted: false, text: "Learn Node.js" },
  ]);

  return (
    <div className="App">
      <Form
        addFunc={(text) => {
          dispatch({
            type: "add",
            payload: {
              text,
            },
          });
        }}
      />
      <List
        data={data}
        changeCheckbox={(obj) => {
          dispatch({
            type: "changeChecked",
            payload: {
              obj: obj,
            },
          });
        }}
        onDelete={(id) => {
          dispatch({
            type: "delete",
            payload: {
              id,
            },
          });
        }}
      />
      <Footer
        data={data}
        deleteAll={() => {
          dispatch({
            type: "delete_all",
          });
        }}
      />
    </div>
  );
}

export default App;
