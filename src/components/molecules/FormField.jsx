import { VStack } from "@chakra-ui/react";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

const FormField = ({ label, ...inputProps }) => (
    <VStack align="start" spacing={1} width="full">
        <Text>{label}</Text>
        <Input {...inputProps} />
    </VStack>
);

export default FormField;
