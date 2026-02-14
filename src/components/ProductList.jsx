import React from "react";
import ProductCard from "./ProductCard";
import { Typography } from "@mui/material";

const ProductList = ({ products, handleRemove }) => {
  return (
    <>
      {/* Conditional rendering if no products are available */}
      {products.length === 0 ? (
        <Typography variant="h6">
          No products available.
        </Typography>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onRemove={handleRemove} />
        ))
      )}
    </>
  );
};

export default ProductList;


