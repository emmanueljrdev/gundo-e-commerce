import { Box, Grid, GridItem } from "@chakra-ui/react";
import { CardSection } from "../components/Dashboard/CardSection";
import { ItemsSection } from "../components/Dashboard/ItemsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api/API_URL";
import { Preferences } from "../components/Dashboard/Preferences";

export const Dashboard = () => {
  // Estados
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${API_URL}/api/products`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Estilos
  const gridItemStyles = {
    rounded: "xl",
    shadow: "2xl",
  };

  return (
    <Box h="100vh" overflow="auto">
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap={2}
        h="full"
        p={{ base: 4, lg: 20 }}
        overflow={{ base: "hidden", lg: "auto" }}
      >
        <GridItem sx={gridItemStyles} bg="white" colSpan={2} rowSpan={1}>
          <CardSection />
        </GridItem>

        <GridItem sx={gridItemStyles} bg="white" colSpan={2} rowSpan={1}>
          <Preferences />
        </GridItem>

        <GridItem sx={gridItemStyles} colSpan={2} bg="white">
          <ItemsSection products={products} />
        </GridItem>
      </Grid>
    </Box>
  );
};
