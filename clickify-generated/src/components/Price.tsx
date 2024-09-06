import { Box } from "@mui/material";
import React, { FC } from "react";
import { Currency } from "@/contexts/product/typing";

export enum PriceVariant {
  Large = "large",
  Bold = "bold",
  Tag = "tag",
  Discount = "discount",
  Default = "default",
}

interface DisplayPrice {
  currentPrice: number;
  discountPrice?: number;
  currency: Currency;
}

export const Price: FC<{ price: DisplayPrice; priceVariant?: PriceVariant }> = ({
  price,
  priceVariant = PriceVariant.Default,
}) => {
  // let iconElement: JSX.Element | null = null;
  const customStyles: React.CSSProperties = {};
  let displayPrice: string | number;

  switch (priceVariant) {
    case PriceVariant.Bold:
      customStyles.fontWeight = "bold";
      break;
    case PriceVariant.Large:
      customStyles.fontSize = "20px";
      break;
    // TODO
    // case PriceVariant.Tag:
    //   break;
    // case PriceVariant.Discount:
    //   break;
    default:
  }

  switch (price.currency) {
    case Currency.EUR:
      displayPrice = `${price.currentPrice}€`;
      break;
    case Currency.USD:
      displayPrice = `$${price.currentPrice}`;
      break;
    default:
      displayPrice = price.currentPrice;
  }

  return <Box style={customStyles}>{displayPrice}</Box>;
};
