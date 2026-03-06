import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Tasks = () => {
  const { state, dispatch } = useContext(AppContext);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        text,
        completed: false
      }
    });

    setText("");
  };

  const completedCount = useMemo(() => {
    return state.tasks.filter(task => task.completed).length;
  }, [state.tasks]);

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4 fw-bold">
        ✅ Task Manager
      </h2>

      {/* Input Section */}
      <div className="card p-4 shadow-sm mb-4">
        <div className="d-flex gap-2">
          <input
            className="form-control"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter a task..."
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="d-flex justify-content-between mb-3">
        <span className="badge bg-secondary p-2">
          Total: {state.tasks.length}
        </span>

        <span className="badge bg-success p-2">
          Completed: {completedCount}
        </span>
      </div>

      {/* Task List */}
      <div className="card shadow-sm p-3">
        {state.tasks.length === 0 && (
          <p className="text-muted text-center">
            No tasks added yet
          </p>
        )}

        <ul className="list-group list-group-flush">
          {state.tasks.map(task => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer"
                }}
                onClick={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: task.id })
                }
              >
                {task.text}
              </span>

              <button
                className="btn btn-sm btn-danger"
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: task.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Tasks;
