import { HStack, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const TaskInput = ({ task, setTask, onAddTask }) => (
    <HStack mb={6} spacing={3}>
        <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            bg="gray.800"
            borderColor="purple.500"
            _placeholder={{ color: "gray.500" }}
            focusBorderColor="purple.300"
            color="white"
        />
        <IconButton icon={<AddIcon />} colorScheme="purple" onClick={onAddTask} />
    </HStack>
);

export default TaskInput;
