import React, { CSSProperties, FC, useState } from "react";
import { Box, Button, Checkbox, Chip, Divider, FormControlLabel, Icon, IconButton, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faLink } from "@fortawesome/free-solid-svg-icons";
import { Product } from "@/contexts/product/typing";
import { ButtonVariants } from "@/theme";
import { ColorSelector } from "../filter/ColorSelector";
import { SizeSelector } from "../filter/SizeSelector";
import { Price, PriceVariant } from "../Price";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

interface DescriptionDetailsProps {
  product: Product;
  style?: CSSProperties;
}

export const DescriptionDetails: FC<DescriptionDetailsProps> = ({ product, style }) => {
  const { websiteSettings } = useWebsiteSettings();

  return (
    <Box style={{ display: "flex", flexDirection: "column", padding: "20px", ...style }}>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Typography style={{ fontSize: "18px" }}>{product.brand}</Typography>
          <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>{product.name}</Typography>
        </Box>
        <Box style={{ display: "flex", flexDirection: "column", marginTop: "auto", marginLeft: "5px" }}>
          <Price
            price={{ currentPrice: product.pricing.currentPrice, currency: product.currency }}
            priceVariant={PriceVariant.Discount}
          />
        </Box>
        <Box style={{ display: "flex", flexDirection: "column", marginLeft: "auto" }}>
          <Typography style={{ fontSize: "18px" }}>{product.shortDescription}</Typography>
        </Box>
      </Box>
      <Box style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}>
        <Box style={{ display: "flex", flexDirection: "row", marginTop: "16px", gap: "16px" }}>
          <Chip label="Gaming" style={{ marginTop: "16px" }} />
          <Chip label="Chair" style={{ marginTop: "16px" }} />
          <Chip label="Reading" style={{ marginTop: "16px" }} />
        </Box>
        <IconButton
          size="large"
          aria-label="favorite product"
          style={{ backgroundColor: "transparent", marginLeft: "auto", padding: "5px" }}
        >
          <FontAwesomeIcon
            icon={faLink}
            style={{ color: websiteSettings.colors.primary, font: "status-bar", fontSize: "20px" }}
          />
        </IconButton>
        <Button variant={ButtonVariants.PRIMARY} type="submit" style={{ width: "max-content", marginTop: "16px" }}>
          <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "8px" }} />
          Add to Basket
        </Button>
      </Box>
      <Divider sx={{ marginY: "16px" }} />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "16px",
          height: "100px",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <ColorSelector colors={["black", "#bd6f6f", "#bababa"]} label="Choose a color" />
        <SizeSelector sizeList={["XS", "S", "M", "XXL"]} label="Choose a size" />
      </Box>
      <Divider sx={{ marginY: "16px" }} />
      <Box style={{ margin: "16px" }}>
        <Typography style={{ fontSize: "18px", fontWeight: "bold" }}>About this Item:</Typography>
        <Typography style={{ fontSize: "15px", marginTop: "8px", color: "#8a8a8a" }}>
          {product.fullDescription}
        </Typography>
      </Box>
    </Box>
  );
};
