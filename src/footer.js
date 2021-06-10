import "./App.css";

export function Footer({ data, deleteAll }) {
  const completeds = data.filter((el) => el.isCompleted).length;
  return (
    <div className="footer">
      <span>
        {completeds}/{data.length} Completed
      </span>
      <button onClick={deleteAll} className="clearAllComleteds">
        Clear All completeds
      </button>
    </div>
  );
}
