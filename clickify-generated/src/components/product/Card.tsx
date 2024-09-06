import React, { CSSProperties, FC } from "react";
import { Badge, Box, IconButton, Tooltip, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { height } from "dom-helpers";
import { Product } from "@/contexts/product/typing";
import { Price, PriceVariant } from "../Price";

interface CardProps {
  product: Product;
  style?: CSSProperties;
  onClick?: () => void;
}

export const ProductCard: FC<CardProps> = ({ product, style, onClick }) => {
  return (
    <Box
      style={{
        margin: "1rem",
        width: 400,
        height: "fit-content",
        boxShadow: "0 7px 8px 0 rgba(0, 0, 0, .05), 0 6px 7px 3px rgba(0, 0, 0, .05)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FAFAFA",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      <Box
        style={{
          position: "relative",
          borderRadius: "20px",
          width: "50%",
          paddingBottom: "50%",
          padding: "0.5rem",
          display: "flex",
          alignItems: "center",
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
              style={{ color: "#FAD700", font: "status-bar", fontWeight: 20, width: 20, height: 20 }}
            />
          </Badge>
        </IconButton>
        <img alt={product.name} src={product.photo.url} style={{ display: "block", width: "100%", height: "auto" }} />
      </Box>

      <Box
        style={{
          padding: "0.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Tooltip title={product.name}>
            <Typography
              style={{
                fontSize: 20,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "90%",
              }}
            >
              {product.name}
            </Typography>
          </Tooltip>
          <Typography style={{ color: "#7a7a7a" }}>{product.brand}</Typography>
          <Typography style={{ color: "#7a7a7a" }}>{product.shortDescription}</Typography>
        </div>
        <Price
          price={{ currentPrice: product.pricing.currentPrice, currency: product.currency }}
          priceVariant={PriceVariant.Large}
        />
      </Box>
    </Box>
  );
};
