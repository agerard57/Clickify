import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box, Typography } from "@mui/material";
import { Currency, TypeOfDiscountTypes } from "@/contexts/product/typing";
import { ProductChair } from "@/assets";
import { useProducts } from "@/contexts/product";
import { ProductCard } from "@/components/product/Card";
import { ImagesDetails } from "@/components/product-details/ImagesDetails";
import { DescriptionDetails } from "@/components/product-details/DescriptionDetails";
import { useWebsiteSettings } from "../../contexts/websiteSettings";

const FakeProductDetails = {
  SKU: "ikea011",
  name: "ALEX Desk",
  brand: "IKEA",
  shortDescription: "Desk with storage, 131 x 60 cm",
  fullDescription:
    "The ALEX desk is a stylish and functional desk that can be adjusted to your needs. It has a sleek and modern design that fits well in any room. The desk top is made of laminate and the legs are made of steel. The desk has built-in storage for your office supplies.",
  pricing: {
    currentPrice: 249.99,
    typeOfDiscount: TypeOfDiscountTypes.NONE,
    serviceFee: 10,
  },
  photo: {
    url: ProductChair,
    label: "Desk",
  },
  favorite: false,
  stock: 5,
  createdAt: new Date("2022-01-03T00:00:00.000Z"),
  currency: Currency.USD,
};

export const ProductDetailsPage: FC = () => {
  const { t } = useTranslation("Productdetails");
  const productsContext = useProducts(); // TODO for static only
  const { websiteSettings } = useWebsiteSettings();

  return (
    <Box style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <Box style={{ width: "45%" }}>
          <ImagesDetails
            images={[
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
              FakeProductDetails.photo.url,
            ]}
            style={{ height: "500px" }}
          />
        </Box>
        <Box style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <DescriptionDetails product={FakeProductDetails} style={{ height: "500px", width: "100%" }} />
        </Box>
      </Box>
      <Box style={{ display: "flex", flexDirection: "column", maxWidth: "100vw" }}>
        <Typography style={{ fontSize: "16px", padding: "1rem", color: websiteSettings.colors.primary }}>
          {t("You might also like")}
        </Typography>
        <Box style={{ display: "flex", flexDirection: "row", overflowY: "auto" }}>
          {productsContext.map((product, index) => (
            <ProductCard key={index} product={product} style={{ width: "25%", minWidth: "375px" }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
