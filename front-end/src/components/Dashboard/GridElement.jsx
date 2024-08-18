import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export const GridElement = ({ product }) => {
  const gridItemStyles = {
    bg: "#c1e0c1",
    rounded: "xl",
    overflow: "auto",
    maxH: "15rem",
    maxW: "35rem",
    minW: "16.3rem",
  };

  return (
    <GridItem key={product.id} sx={gridItemStyles}>
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={2}
        h="full"
        p={2}
      >
        <GridItem colSpan={1} rowSpan={2}>
          <Image
            objectFit="cover"
            w="full"
            h="full"
            loading="lazy"
            src={`/images/${product.image}`}
          />
        </GridItem>
        <GridItem rowSpan={2} p={4}>
          <Heading fontSize="xl">{product.product_name}</Heading>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <Text fontSize="lg" fontWeight="medium">
            {product.reason}
          </Text>
        </GridItem>
      </Grid>
    </GridItem>
  );
};
