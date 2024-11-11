import { VStack, Avatar, Text, Button } from "@chakra-ui/react";
import { EditIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ProfileCard = ({ name }) => (
    <VStack bg="gray.900" p={6} borderRadius="lg" spacing={4} align="center">
        <Avatar size="xl" bg="purple.400" />
        <Text color="white" fontWeight="bold">Welcome Back, {name}!</Text>
        <Link to="/edit-profile">
            <Button leftIcon={<EditIcon />} colorScheme="gray" variant="outline" size="sm">
                Edit Profile
            </Button>
        </Link>
        <Link to="/login">
            <Button leftIcon={<ArrowRightIcon />} colorScheme="red" variant="solid" size="sm">
                Sign Out
            </Button>
        </Link>
    </VStack>
);

export default ProfileCard;
