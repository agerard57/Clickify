import React, { FC } from "react";
import { Box } from "@mui/material";
import { useProducts } from "@/contexts/product";
import { ProductCard } from "./Card";

export const ProductCardsList: FC = () => {
  const productsContext = useProducts();

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {productsContext.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            style={{ width: 375, height: 170 }}
            onClick={() => {
              // TODO Oh no you don't
              window.location.href = `/products/1`;
            }}
          />
        ))}
      </Box>
    </>
  );
};
