import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { MapSection } from "@/components/core/MapSection";
import { useLanguage } from "@/language";
import { Box, Button, Divider, Link, Typography, useTheme } from "@mui/material";
import { CartProductList } from "@/components/cart/page/CartProductList";
import { useProducts } from "@/contexts/product";
import OrderSummary from "@/components/order/OrderSummary";
import { ButtonVariants } from "@/theme";
import { CustomSelect } from "@/components/filter/CustomSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { colorPalette } from "@/theme/colorPalette";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { DeliveryForm } from "./forms/DeliveryForm";
import { PayementForm } from "./forms/PayementForm";

export const CartPage: FC = () => {
  const { t } = useTranslation("Cart");
  const { language } = useLanguage();
  const products = useProducts();
  const theme = useTheme();

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
          <Typography style={{ padding: "1rem", fontWeight: "bold" }}>{t("Your Cart")}</Typography>
          <Divider />
          <CartProductList
            products={products}
            style={{ width: "100%", boxSizing: "border-box", position: "relative", flex: "1" }}
          />
        </Box>
      </Box>
      <Box style={{ padding: "3rem", width: "30%", boxSizing: "border-box" }}>
        <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <FontAwesomeIcon icon={faLocationPin} style={{ marginRight: "0.5rem", color: theme.palette.primary.main }} />

          {t("Delivery Information")}
        </Typography>
        <Divider />
        <CustomSelect choices={["Home", "Office", "New Address"]} defaultChoice="Home" label={t("Delivery Address")} />
        <DeliveryForm onSubmit={(datas) => console.log(datas)} />
      </Box>
      <Box style={{ padding: "3rem", width: "30%", boxSizing: "border-box" }}>
        <Typography style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "0.5rem", color: theme.palette.primary.main }} />
          {t("Payment Information")}
        </Typography>
        <Divider />
        <CustomSelect
          choices={["Credit Card", "Paypal", "New credit card"]}
          defaultChoice="Credit Card"
          label={t("Payment Method")}
        />
        <PayementForm onSubmit={(datas) => console.log(datas)} />
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
          {t("Checkout")}
        </Button>
        <Typography style={{ fontSize: "12px", textAlign: "center", marginTop: "8px", color: "#8a8a8a" }}>
          {t("By placing your order, you agree to our company's ")}
          <Link style={{ fontSize: "12px", textAlign: "center", marginTop: "8px", color: "#8a8a8a" }} href="#">
            {t("Privacy Policy and Conditions of Use")}
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};
