import React, { useState, useRef } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface iTask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<iTask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  const addTask = (name: string) => {
    const newTasks: iTask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (i: number) => {
    const newTasks: iTask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  const removeTask = (i: number) => {
    const newTasks: iTask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                  ref={taskInput}
                  autoFocus
                />
                <div className="card mt-2">
                  <button
                    className="btn btn-outline-success"
                    onClick={() => handleSubmit}
                  >
                    Save Task
                  </button>
                </div>
              </form>
            </div>
          </div>

          {tasks.map((t: iTask, i: number) => (
            <div className="card card-body mt-2" key={i}>
              <button
                className="btn btn-info"
                onClick={() => toggleDoneTask(i)}
                style={
                  { backgroundColor: t.done ? "#99ff99" : "#FF9999" } || {
                    textDecoration: t.done ? "line-through" : "",
                  }
                }
              >
                {t.name}
              </button>
              <div>
                <button className="btn btn-dark" onClick={() => removeTask(i)}>
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
