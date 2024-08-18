import { Box, Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { CardSection } from "../components/Dashboard/CardSection";
import { ItemsSection } from "../components/Dashboard/ItemsSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api/API_URL";

export const Dashboard = () => {
  // Estados
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${API_URL}/api/products`);
      setProducts(data);
      setAllProducts(data);
    };

    const fetchUser = async () => {
      const { data } = await axios.get(`${API_URL}/api/user`, {
        withCredentials: true,
      });
      setUser(data);
    };

    fetchUser();
    fetchProducts();
  }, []);

  const filterProductsByPreference = () => {
    const filteredProducts = allProducts.filter(
      (product) => product.preference === user.preferences
    );
    setProducts(filteredProducts);
  };

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
          <CardSection user={user} />
        </GridItem>

        <GridItem sx={gridItemStyles} bg="white" colSpan={2} rowSpan={1}>
          <Flex h="full" p={8} flexDirection="column" gap={4}>
            <Heading fontSize="xl">
              Esta es tu preferencia: {user.preferences}
            </Heading>
            <Button onClick={filterProductsByPreference}>
              Filtrar por preferencia
            </Button>
          </Flex>
        </GridItem>

        <GridItem sx={gridItemStyles} colSpan={2} bg="white">
          <ItemsSection products={products} />
        </GridItem>
      </Grid>
    </Box>
  );
};
