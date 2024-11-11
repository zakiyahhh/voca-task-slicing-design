import { Input as ChakraInput } from "@chakra-ui/react";

const Input = (props) => (
    <ChakraInput
        borderColor="purple.500"
        focusBorderColor="purple.300"
        {...props}
    />
);

export default Input;
