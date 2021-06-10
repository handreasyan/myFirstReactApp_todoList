import "./App.css";

export function TodoItem({ el, changeCheckbox, onDelete }) {
  return (
    <div className="list_item">
      <input
        type="checkbox"
        checked={el.isCompleted}
        onChange={(e) => {
          changeCheckbox({ ...el, isCompleted: e.target.checked });
        }}
      />
      <span>{el.text}</span>
      <button
        onClick={() => {
          onDelete(el.id);
        }}
      >
        X
      </button>
    </div>
  );
}
