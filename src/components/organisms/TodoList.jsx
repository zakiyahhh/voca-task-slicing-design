import { VStack, Text } from "@chakra-ui/react";
import TaskItem from "../atoms/TaskItem";

const TodoList = ({ tasks, onCompleteTask, onDeleteTask }) => (
    <VStack align="stretch">
        <Text color="whiteAlpha.700" mb={2}>Tasks to do - {tasks.filter(task => !task.isCompleted).length}</Text>
        {tasks.filter(task => !task.isCompleted).map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onComplete={() => onCompleteTask(task.id)}
                onDelete={() => onDeleteTask(task.id)}
            />
        ))}
        <Text color="whiteAlpha.700" mt={6}>Done - {tasks.filter(task => task.isCompleted).length}</Text>
        {tasks.filter(task => task.isCompleted).map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onComplete={() => onCompleteTask(task.id)}
                onDelete={() => onDeleteTask(task.id)}
            />
        ))}
    </VStack>
);

export default TodoList;
