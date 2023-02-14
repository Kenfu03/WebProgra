import React, { useState, useRef } from "react";
import "./TaskApp.css";
import trash from "../../assets/img/trashcan.png";
import { DecorationDiv } from "../../containers";


export const TaskApp = () => {
  type FormElement = React.FormEvent<HTMLFormElement>;

  interface iTask {
    name: string;
    done: boolean;
  }

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
    <div className="taskApp-container">
      <div className="saveInput-container">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            maxLength={40}
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            ref={taskInput}
            autoFocus
          />
          <button onClick={() => handleSubmit}>Save Task</button>
        </form>
      </div>
      <div className="tasks-container">
        {tasks.map((t: iTask, i: number) => (
          <div className="tasks" key={i}>
            <button
              className="task"
              onClick={() => toggleDoneTask(i)}
              style={{ textDecoration: t.done ? "line-through" : "" }}
            > 
              <DecorationDiv width={10} height={10} firstCo="#a88c43" secondCo="#ffffff" flag= {t.done} ></DecorationDiv>
              {t.name}
            </button>
            <button className="deleteBtn" onClick={() => removeTask(i)}>
              <img src={trash} alt="basura" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
