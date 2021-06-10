import "./App.css";
import { TodoItem } from "./todoItem";

export function List({ data, changeCheckbox, onDelete }) {
  return (
    <div className="list_items">
      {data.map((el) => {
        return (
          <TodoItem
            key={el.id}
            el={el}
            changeCheckbox={changeCheckbox}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}
