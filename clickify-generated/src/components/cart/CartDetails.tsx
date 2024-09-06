import React, { CSSProperties, FC } from "react";
import { Product } from "@/contexts/product/typing";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CartDetailsProps {
  product: Product;
  count: number;
  style?: CSSProperties;
  onDelete?: () => void;
}

export const CartDetails: FC<CartDetailsProps> = ({ product, count, style, onDelete }) => {
  return (
    <Box
      style={{
        margin: "1rem",
        padding: "0.5rem",
        width: "375px",
        boxShadow: "0 3px 4px 0 rgba(0, 0, 0, .05), 0 3px 4px 1.5px rgba(0, 0, 0, .05)",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#EFEFEF",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={product.photo.url} style={{ width: "50px", height: "50px" }} />
          <Typography style={{ fontSize: "12px", color: "#7a7a7a" }}>
            {count}x${product.pricing.currentPrice}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontSize: "13px", color: "black" }}>{product.name}</Typography>
          <IconButton
            size="medium"
            aria-label="favorite product"
            style={{ backgroundColor: "#D5D5D5", width: "10px", height: "10px" }}
            onClick={() => {
              if (onDelete) onDelete();
            }}
          >
            <Badge>
              <FontAwesomeIcon icon={faTimes} style={{ color: "#FFF", font: "status-bar", fontSize: "10px" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
