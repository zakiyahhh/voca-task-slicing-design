import { Box, Heading, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import UpdateProfileForm from "../organisms/UpdateProfileForm";

const UpdateProfile = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      background="gray.900"
      color="white"
    >
      <Box position="absolute" top="4" left="4">
        <IconButton
          icon={<ArrowBackIcon />}
          colorScheme="purple"
          variant="ghost"
          aria-label="Back"
        />
      </Box>
      <Box textAlign="center">
        <Heading mb={4}>Edit Profile</Heading>
        <UpdateProfileForm />
      </Box>
    </Box>
  );
};

export default UpdateProfile;
