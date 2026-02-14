import React from "react";
import styles from "../styles/ProductCard.module.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack
} from "@mui/material";

const ProductCard = ({ product, onRemove = () => {} }) => {

  const handleRemoveClick = () => {
    onRemove(product.id);
  };

  return (
  <Card className={styles.cardClass}>
  <CardContent>
    <Stack spacing={1}>

      <div className={!product.inStock ? "outOfStockClass" : ""}>
        <Typography variant="h6">{product.name}</Typography>
      </div>

      <Typography>Price: ${product.price}</Typography>
      <Typography>{product.inStock ? "In Stock" : "Out of Stock"}</Typography>

      {product.inStock && (
        <Button variant="contained" color="success">Purchase</Button>
      )}

      <Button
        variant="outlined"
        color="error"
        onClick={() => onRemove(product.id)}
      >
        Remove
      </Button>

    </Stack>
  </CardContent>
</Card>

  );
};

export default ProductCard;
