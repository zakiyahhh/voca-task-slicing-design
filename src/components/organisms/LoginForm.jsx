import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InputField from "../atoms/InputField";
import Button from "../atoms/Button";
import FormHeader from "../molecules/FormHeader";
import { CheckIcon } from '@chakra-ui/icons';

const LoginForm = () => (
    <Box
        bg="gray.900"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="sm"
        mx="auto"
    >
        <FormHeader title="VOCA" subtitle="Task" />
        <InputField label="Email" type="email" placeholder="sitizakiyah235@gmail.com" />
        <InputField label="Password" type="password" placeholder="********" />
        <Link to="/todo-task">
            <Button leftIcon={<CheckIcon />}>Sign In</Button>
        </Link>
    </Box>
);

export default LoginForm;
