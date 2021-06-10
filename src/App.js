import "./App.css";
import { Form } from "./form";
import { List } from "./list";
import { Footer } from "./footer";
import { useState } from "react";

function App() {
  let [data, setData] = useState([
    { id: 1, isCompleted: true, text: "Learn HTML" },
    { id: 2, isCompleted: true, text: "Learn CSS" },
    { id: 3, isCompleted: true, text: "Learn JS" },
    { id: 4, isCompleted: false, text: "Learn React.js" },
    { id: 5, isCompleted: false, text: "Learn Node.js" },
  ]);
  function addTodo(text) {
    setData([
      ...data,
      {
        id: data.length + 1,
        isCompleted: false,
        text,
      },
    ]);
  }
  function changeCheckbox(obj) {
    setData(data.map((el) => (el.id === obj.id ? obj : el)));
  }
  function onDelete(id) {
    setData(data.filter((el) => el.id !== id));
  }
  return (
    <div className="App">
      <Form addFunc={addTodo} />
      <List data={data} changeCheckbox={changeCheckbox} onDelete={onDelete} />
      <Footer
        data={data}
        deleteAll={() => setData(data.filter((el) => !el.isCompleted))}
      />
    </div>
  );
}

export default App;
