import React, { CSSProperties, FC } from "react";
import { Product } from "@/contexts/product/typing";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { CartDetails } from "../CartDetails";

interface CartProductListProps {
  products: Product[];
  style?: CSSProperties;
}

const noScrollBarVisible = {
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const CartProductList: FC<CartProductListProps> = ({ products, style }) => {
  return (
    <Box
      sx={{
        ...style,
        height: "100%",
        overflowY: "scroll",
        ...noScrollBarVisible,
      }}
    >
      <Box style={{ height: "max-content", display: "flex", flexDirection: "column", gap: "1rem", margin: "1rem 0" }}>
        {products.map((product, index) => (
          <CartDetails
            key={index}
            product={product}
            count={Math.floor(Math.random() * 10)}
            style={{ width: "90%", boxSizing: "border-box", margin: "0 auto" }}
          />
        ))}
      </Box>
    </Box>
  );
};
