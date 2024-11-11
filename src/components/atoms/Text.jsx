import { Text as ChakraText } from "@chakra-ui/react";

const Text = ({ children, ...props }) => (
    <ChakraText color="gray.300" fontWeight="bold" {...props}>
        {children}
    </ChakraText>
);

export default Text;
