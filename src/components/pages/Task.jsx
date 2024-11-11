import { useState } from "react";
import { HStack, Box } from "@chakra-ui/react";
import ProfileCard from "../molecules/ProfileCard";
import TaskInput from "../molecules/TaskInput";
import TodoList from "../organisms/TodoList";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, name: "To study React fundamentals", isCompleted: false },
  ]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), name: task, isCompleted: false }]);
      setTask("");
    }
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <HStack spacing={6} p={6} bg="gray.800" minH="100vh" align="start">
      <Box flex="0.3">
        <ProfileCard name="Zakiyah" />
      </Box>
      <Box flex="0.7" bg="gray.900" p={6} borderRadius="lg">
        <TaskInput task={task} setTask={setTask} onAddTask={addTask} />
        <TodoList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
      </Box>
    </HStack>
  );
};

export default Task;
