import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "@/language";
import { Box, Button, Divider, Icon, Link, Typography } from "@mui/material";
import { CartProductList } from "@/components/cart/page/CartProductList";
import { useProducts } from "@/contexts/product";
import OrderSummary from "@/components/order/OrderSummary";
import { ButtonVariants } from "@/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { MapSection } from "@/components/core/MapSection";

const position = [6.176372569195507, 49.10684302392727] as [number, number];

export const RecapPage: FC = () => {
  const { t } = useTranslation("Cart");
  const { language } = useLanguage();
  const products = useProducts();

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%", width: "100%" }}>
      <Box style={{ width: "20%", boxSizing: "border-box" }}>
        <Box
          style={{
            position: "fixed",
            backgroundColor: "#EFEFEF",
            height: "calc(100% - 64px)",
            width: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography style={{ padding: "1rem", fontWeight: "bold" }}>{t("Your order")}</Typography>
          <Divider />
          <CartProductList
            products={products}
            style={{ width: "100%", boxSizing: "border-box", position: "relative", flex: "1" }}
          />
        </Box>
      </Box>
      <Box style={{ padding: "1rem", width: "30%", boxSizing: "border-box" }}>
        <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>{t("Order Recap :")}</Typography>
        <Typography
          style={{ fontSize: "16px", margin: "1rem auto", display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#4CAF50", fontSize: "25px" }} />
          {t(" Congrats, your order is being prepared!")}
        </Typography>

        <Typography style={{ fontSize: "16px", margin: "1rem auto 0", color: "black" }}>
          {t("Transaction Date:")}
        </Typography>
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
          {new Date().toLocaleDateString()}
        </Typography>

        <Typography style={{ fontSize: "16px", margin: "1rem auto 0", color: "black" }}>
          {t("Estimated Pick-up Date:")}
        </Typography>
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
          {new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString()}
        </Typography>

        <Typography style={{ fontSize: "16px", margin: "1rem auto 0", color: "black" }}>
          {t("Payement Method:")}
        </Typography>
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
          {t("Credit Card")}
        </Typography>
      </Box>
      <Box style={{ padding: "1rem", width: "30%", boxSizing: "border-box" }}>
        <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>{t("Pick-up Location :")}</Typography>
        <MapSection
          tripCoordinates={{
            position,
          }}
          style={{ margin: "8px" }}
        />
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>{t("Ikea Metz")}</Typography>
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
          {t("Rue du trou aux Serpents")}
        </Typography>
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
          {t("57140 La maxe, Metz")}
        </Typography>
        <Typography style={{ fontSize: "16px", margin: "0.5rem auto", color: "#8a8a8a" }}>
          {t("09 69 36 20 06")}
        </Typography>
      </Box>
      <Box style={{ padding: "1rem", width: "20%", boxSizing: "border-box" }}>
        <OrderSummary
          itemCount={products.length}
          itemPrice={products.reduce((acc, product) => acc + product.pricing.currentPrice, 0)}
          shippingCost={15}
          taxCollected={10}
          style={{ margin: "1rem auto" }}
        />
        <Button
          variant={ButtonVariants.PRIMARY}
          type="submit"
          style={{ width: "75%", margin: "1rem auto", display: "block" }}
        >
          {t("See my order history")}
        </Button>
        <Typography style={{ fontSize: "12px", textAlign: "center", marginTop: "8px", color: "#8a8a8a" }}>
          <Link style={{ fontSize: "12px", textAlign: "center", marginTop: "8px", color: "#8a8a8a" }} href="/products">
            {t("see other products")}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
