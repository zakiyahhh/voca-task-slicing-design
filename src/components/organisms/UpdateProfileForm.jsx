import { VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CheckIcon } from '@chakra-ui/icons';
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import ProfileAvatar from "../molecules/ProfileAvatar";

const UpdateProfileForm = () => {
    return (
        <VStack
            spacing={4}
            background="gray.800"
            p={8}
            borderRadius="lg"
            width="sm"
        >
            <ProfileAvatar />
            <FormField label="Profile URL" placeholder="<Image URL>" />
            <FormField label="Name" placeholder="RA Siti Zakiyah" />
            <FormField label="Email" placeholder="sitizakiyah235@gmail.com" />
            <FormField label="Password" type="password" placeholder="********" />
            <Link to="/todo-task">
                <Button leftIcon={<CheckIcon />}>Submit</Button>
            </Link>
        </VStack>
    );
};

export default UpdateProfileForm;
