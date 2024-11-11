import { Box, Text, Heading } from "@chakra-ui/react";

const FormHeader = ({ title, subtitle }) => (
    <Box textAlign="center" mb={8}>
        <Heading color="purple.300" size="lg">
            {title}
        </Heading>
        <Text color="whiteAlpha.700" fontSize="sm">
            {subtitle}
        </Text>
    </Box>
);

export default FormHeader;
