import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { RocketIcon } from "lucide-react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [image, setImage] = useState(null);
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const now = new Date();
    const today = now.toDateString();
    const hasNotified = localStorage.getItem("notifiedToday") === today;

    const notifyTasks = tasks.filter(
      (task) =>
        task.dueDate &&
        !task.completed &&
        new Date(task.dueDate).toDateString() === today
    );

    if (!hasNotified && notifyTasks.length > 0) {
      toast("You have tasks due today!", { icon: "⏰" });
      localStorage.setItem("notifiedToday", today);

      if ("Notification" in window && Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            notifyTasks.forEach((task) => {
              new Notification("📌 Task Due Today", {
                body: task.text,
              });
            });
          }
        });
      }
    }
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([
      ...tasks,
      { text: task, completed: false, dueDate, priority, image },
    ]);
    setTask("");
    setDueDate("");
    setPriority("low");
    setImage(null);
    toast.success("Task added!");
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
    toast.success("Task status updated!");
  };

  const deleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
    toast.success("Task deleted!");
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "priority") {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortBy === "dueDate") {
        return (
          new Date(a.dueDate || Infinity) - new Date(b.dueDate || Infinity)
        );
      }
      return 0;
    });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-red-500";
      case "medium":
        return "border-yellow-500";
      default:
        return "border-green-500";
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 text-black min-h-screen flex flex-col items-center justify-start p-4 transition-all duration-300">
      <Toaster position="top-right" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 tracking-tight text-blue-900 drop-shadow"
      >
        📝 Todo List
      </motion.h1>

      <div className="flex w-full max-w-xl flex-wrap mb-4 gap-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow px-4 py-2 rounded-xl border border-gray-300 focus:outline-none shadow-sm"
          placeholder="Enter your task"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          className="border rounded-xl p-2 shadow-sm"
        />
        <button
          onClick={addTask}
          className="px-14 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition duration-300 shadow-md"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-xl flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none shadow-sm"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl shadow-sm"
        >
          <option value="none">Sort By</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>

      <div className="mb-4 space-x-2">
        {[
          { label: "All", value: "all" },
          { label: "Completed", value: "completed" },
          { label: "Incomplete", value: "incomplete" },
        ].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-1 rounded-xl transition shadow-sm duration-300 ${
              filter === value
                ? "bg-blue-800 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <AnimatePresence>
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md text-center max-w-sm w-full flex flex-col items-center"
          >
            <RocketIcon className="w-8 h-8 text-gray-500 mb-2" />
            <h2 className="text-xl font-semibold mb-2">No tasks found</h2>
            <p className="text-gray-500">
              Try adding some tasks or change your filter/search.
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
          <AnimatePresence>
            {filteredTasks.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl overflow-hidden shadow-lg p-4 bg-white flex flex-col justify-between resize-none ${
                  item.completed ? "opacity-70 line-through" : ""
                } ${getPriorityColor(item.priority)}`}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt="task"
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                )}
                <div className="flex-1 overflow-auto">
                  <p className="text-base break-words whitespace-pre-wrap">
                    {item.text}
                  </p>
                  {item.dueDate && (
                    <p className="text-sm text-gray-500 mt-1">
                      Due: {item.dueDate}
                    </p>
                  )}
                  <p className="text-xs italic text-gray-500 mt-1">
                    Priority: {item.priority}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={() => toggleComplete(index)}
                    className="text-sm px-3 py-1 bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 shadow-sm"
                  >
                    {item.completed ? "Undo" : "Done"}
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="text-sm px-3 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-sm"
                  >
                    Delete
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default TodoList;
