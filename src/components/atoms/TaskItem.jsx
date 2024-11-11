import { HStack, Text, IconButton } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

const TaskItem = ({ task, onComplete, onDelete }) => (
    <HStack spacing={3} justify="space-between" bg="gray.800" p={4} borderRadius="md" mb={3}>
        <Text as={task.isCompleted ? "s" : undefined} color={task.isCompleted ? "green.300" : "whiteAlpha.900"}>
            {task.name}
        </Text>
        <HStack>
            <IconButton icon={<CheckIcon />} size="sm" colorScheme="green" onClick={onComplete} />
            <IconButton icon={<DeleteIcon />} size="sm" colorScheme="red" onClick={onDelete} />
        </HStack>
    </HStack>
);

export default TaskItem;
