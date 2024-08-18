import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export const Preferences = () => {
  const pStyle = {
    fontWeight: "medium",
  };
  return (
    <Flex h="full" p={8} flexDirection="column" gap={4}>
      <Heading fontSize="xl">Esta es tu preferencia: Proteína</Heading>
      <Button>Filtrar por preferencia</Button>
    </Flex>
  );
};
