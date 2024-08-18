import { Flex, Heading, Text } from "@chakra-ui/react";

export const CardSection = ({}) => {
  const pStyle = {
    fontWeight: "medium",
  };
  return (
    <Flex h="full" p={8} flexDirection="column">
      <Heading>Bienvenido, Persona</Heading>
      <Text sx={pStyle} as="p">
        ¡Revisa la selección de productos basados en tu lista de preferencia!
      </Text>
    </Flex>
  );
};
