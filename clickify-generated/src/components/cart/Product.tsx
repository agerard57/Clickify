import React, { CSSProperties, FC } from "react";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { Product } from "@/contexts/product/typing";
import { Price, PriceVariant } from "../Price";

interface CardProps {
  product: Product;
  style?: CSSProperties;
}

export const CartProduct: FC<CardProps> = ({ product, style }) => {
  return (
    <Box
      style={{
        margin: "1rem",
        padding: "0.5rem",
        boxShadow: "0 7px 8px 0 rgba(0, 0, 0, .05), 0 6px 7px 3px rgba(0, 0, 0, .05)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FAFAFA",
        ...style,
      }}
    >
      <Box
        style={{
          position: "relative",
          backgroundColor: "#EFEFEF",
          borderRadius: "20px",
          padding: "0.5rem",
        }}
      >
        <IconButton
          size="medium"
          aria-label="favorite product"
          style={{ backgroundColor: "#FAFAFA", position: "absolute", top: "0.5rem", right: "0.5rem", padding: "5px" }}
          // TODO
          // onClick={() => { product.favorite = !product.favorite; }}
        >
          <Badge>
            <FontAwesomeIcon
              icon={product.favorite ? faStarSolid : faStarRegular}
              style={{ color: "#FAD700", font: "status-bar" }}
            />
          </Badge>
        </IconButton>
        <img src={product.photo.url} />
      </Box>

      <Box
        style={{
          padding: "0.75rem",
        }}
      >
        <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>{product.name}</Typography>
        <Typography style={{ color: "#7a7a7a" }}>{product.brand}</Typography>
        <Typography style={{ color: "#7a7a7a" }}>{product.shortDescription}</Typography>
        <Price
          price={{ currentPrice: product.pricing.currentPrice, currency: product.currency }}
          priceVariant={PriceVariant.Large}
        />
      </Box>
    </Box>
  );
};
