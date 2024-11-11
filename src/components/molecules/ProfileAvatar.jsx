import { Avatar, Box } from "@chakra-ui/react";

const ProfileAvatar = ({ src }) => (
    <Box display="flex" justifyContent="center" my={4}>
        <Avatar size="xl" src={src} bg="purple.500" />
    </Box>
);

export default ProfileAvatar;
