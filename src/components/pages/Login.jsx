import { Box } from "@chakra-ui/react";
import LoginForm from "../organisms/LoginForm";

const Login = () => (
  <Box
    minH="100vh"
    bg="gray.800"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <LoginForm />
  </Box>
);

export default Login;