import { Box, Heading } from "@chakra-ui/react";
import { LoginForm } from "../components/Login/LoginForm";

export const Login = () => {
  return (
    <Box h="100vh" pt={28} px={4}>
      <LoginForm />
    </Box>
  );
};
