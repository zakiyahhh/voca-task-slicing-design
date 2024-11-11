import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputField = ({ label, type, placeholder, ...props }) => (
    <FormControl mb={4}>
        <FormLabel color="whiteAlpha.800">{label}</FormLabel>
        <Input
            type={type}
            placeholder={placeholder}
            bg="gray.800"
            borderColor="purple.500"
            _placeholder={{ color: "gray.500" }}
            focusBorderColor="purple.300"
            color="white"
            {...props}
        />
    </FormControl>
);

export default InputField;
