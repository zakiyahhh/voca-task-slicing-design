import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, ...props }) => (
    <ChakraButton
        colorScheme="purple"
        width="full"
        {...props}
    >
        {children}
    </ChakraButton>
);

export default Button;
