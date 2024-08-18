import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../api/API_URL";

export const LoginForm = () => {
  // Hooks

  const navigate = useNavigate();

  // Estados

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [hidden, setHidden] = useState(true);

  // Funciones

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = user.email.trim();
    const password = user.password.trim();

    const { data } = await axios.post(
      `${API_URL}/api/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    setUser({
      email: "",
      password: "",
    });

    navigate(`/dashboard`, { replace: true });
  };

  // Estilos

  const inputStyles = {
    w: "3/4",
    bg: "gray.100",
    color: "black",
  };

  const buttonStyles = {
    bg: "#08563e",
    color: "white",
    fontWeight: "bold",
    ":hover": {
      bg: "#249c07",
    },
  };

  return (
    <Box
      h="full"
      maxH="30rem"
      bg="white"
      rounded="xl"
      shadow="2xl"
      maxW="30rem"
      mx="auto"
      px={8}
    >
      <Heading w="full" textAlign="center" p={4}>
        ACCEDE
      </Heading>
      <Text as="p" display={{ base: "none", md: "block" }}>
        Accede con tus credenciales de usuario para poder disfrutar de los
        beneficios que te brindamos
      </Text>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        gap={4}
      >
        <Flex flexDirection="column">
          <FormControl px={8} py={4} w="3/4">
            <FormLabel color="black" fontWeight="bold">
              Email
            </FormLabel>
            <InputGroup>
              <Input
                sx={inputStyles}
                id="email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                variant="filled"
                placeholder="Ingresa tu email"
              />
              <InputRightElement width="4rem">
                <Icon color="gray.100" />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl px={8} py={4} w="3/4">
            <FormLabel color="black" fontWeight="bold">
              Contraseña
            </FormLabel>
            <InputGroup>
              <Input
                sx={inputStyles}
                id="password"
                type={hidden ? "password" : "text"}
                name="password"
                value={user.password}
                onChange={handleChange}
                variant="filled"
                placeholder="Ingresa tu contraseña"
              />
              <InputRightElement width="4rem">
                {hidden ? (
                  <Icon
                    onClick={() => setHidden(false)}
                    as={ViewIcon}
                    color="#08563e"
                  />
                ) : (
                  <Icon
                    onClick={() => setHidden(true)}
                    as={ViewOffIcon}
                    color="#08563e"
                  />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>

        <Button onClick={handleSubmit} sx={buttonStyles} w="3/4" mx="auto">
          Ingresar
        </Button>
      </Flex>
    </Box>
  );
};
