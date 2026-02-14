import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Container, Typography, Button, Stack } from "@mui/material";

const App = () => {
  // Initial product data
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 699, inStock: false },
    { id: 3, name: "Tablet", price: 449, inStock: true },
  ]);

  // Filter state (all | inStock | outOfStock)
  const [filter, setFilter] = useState("all");

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    if (filter === "inStock") return product.inStock;
    if (filter === "outOfStock") return !product.inStock;
    return true;
  });

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product Dashboard
      </Typography>

      {/* Filter Buttons using Material UI */}
      <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
        <Button variant="contained" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant="contained" onClick={() => setFilter("inStock")}>
          In Stock
        </Button>
        <Button variant="contained" onClick={() => setFilter("outOfStock")}>
          Out of Stock
        </Button>
      </Stack>

      {/* Pass filtered products to ProductList */}
      <ProductList products={filteredProducts} handleRemove={handleRemove} />
    </Container>
  );
};

export default App;
