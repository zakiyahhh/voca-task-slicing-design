import { IconButton as ChakraIconButton } from "@chakra-ui/react";

const IconButton = ({ icon, colorScheme, ...props }) => (
    <ChakraIconButton icon={icon} colorScheme={colorScheme} {...props} />
);

export default IconButton;
