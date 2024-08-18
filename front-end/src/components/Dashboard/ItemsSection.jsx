import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { GridElement } from "./GridElement";

export const ItemsSection = ({ products }) => {
  return (
    <Grid
      h="full"
      p={4}
      flexDirection="column"
      templateColumns={{ base: "repeat(30, 1fr)", lg: "repeat(5, 1fr)" }}
      templateRows={{ lg: "repeat(4, 1fr)" }}
      gap={3}
      overflowX="auto"
    >
      {products.map((product) => (
        <GridElement product={product} />
      ))}
    </Grid>
  );
};
