import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { useLanguage } from "@/language";
import { Box, Button, Typography } from "@mui/material";
import { CartProductList } from "@/components/cart/page/CartProductList";
import { useProducts } from "@/contexts/product";
import { InfoBox } from "@/components/infoBox/InfoBox";
import { ButtonVariants } from "@/theme";
import { Table } from "@/components/table/Table";

const infoBoxStyle: React.CSSProperties = {
  width: "auto",
  boxSizing: "border-box",
};

export const OrderHistoryPage: FC = () => {
  const { t } = useTranslation("Orderhistory");
  const { language } = useLanguage();
  const products = useProducts();

  return (
    <Box style={{ display: "flex", flexDirection: "row", minHeight: "100%", width: "100%" }}>
      <Box style={{ padding: "1rem", width: "55%", boxSizing: "border-box" }}>
        <Typography style={{ padding: "1rem", fontWeight: "bold" }}>{t("Order History")}</Typography>
        <Typography style={{ padding: "1rem", color: "#8A8A8A" }}>{t("List")}</Typography>
        <Table
          headCells={[
            { id: "id", label: "ID" },
            { id: "date", label: "Date", searchAvailable: true },
            { id: "orderStatus", label: "Order status" },
            { id: "totalPrice", label: "Total price" },
            { id: "quantity", label: "Quantity" },
          ]}
          rows={[
            { id: 1, date: "Monday 12th, 2021", orderStatus: "Confirmed", totalPrice: "54€", quantity: 7 },
            { id: 2, date: "Monday 13th, 2021", orderStatus: "Pending", totalPrice: "852€", quantity: 2 },
            { id: 3, date: "Monday 14th, 2021", orderStatus: "Canceled", totalPrice: "152€", quantity: 4 },
            { id: 4, date: "Monday 15th, 2021", orderStatus: "Confirmed", totalPrice: "4.99€", quantity: 1 },
            { id: 5, date: "Monday 16th, 2021", orderStatus: "Pending", totalPrice: "12.99€", quantity: 3 },
            { id: 6, date: "Monday 17th, 2021", orderStatus: "Canceled", totalPrice: "54.99€", quantity: 1 },
            { id: 7, date: "Monday 18th, 2021", orderStatus: "Confirmed", totalPrice: "54€", quantity: 7 },
            { id: 8, date: "Monday 19th, 2021", orderStatus: "Pending", totalPrice: "852€", quantity: 2 },
            { id: 9, date: "Monday 20th, 2021", orderStatus: "Canceled", totalPrice: "152€", quantity: 4 },
            { id: 10, date: "Monday 21th, 2021", orderStatus: "Confirmed", totalPrice: "4.99€", quantity: 1 },
            { id: 11, date: "Monday 22th, 2021", orderStatus: "Pending", totalPrice: "12.99€", quantity: 3 },
          ]}
          totalCount={4}
          onDelete={(id) => console.log(id)}
          onEdit={(id) => console.log}
          onUpdate={(id) => console.log(id)}
          onView={(id) => console.log(id)}
          style={{ width: "100%", boxSizing: "border-box", position: "relative", flex: "1" }}
        />
      </Box>
      <Box style={{ padding: "1rem", width: "25%", boxSizing: "border-box", backgroundColor: "#EFEFEF" }}>
        <Typography style={{ padding: "1rem", fontWeight: "bold" }}>{t("Products")}</Typography>
        <CartProductList
          products={products}
          style={{ width: "100%", boxSizing: "border-box", position: "relative", flex: "1" }}
        />
      </Box>
      <Box style={{ width: "20%", boxSizing: "border-box" }}>
        <Box
          style={{
            position: "fixed",
            height: "calc(100% - 64px)",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            padding: "1rem",
          }}
        >
          <Typography style={{ padding: "1rem", fontWeight: "bold" }}>{t("Details")}</Typography>
          <InfoBox title="Order date" lines={["Monday 12th, 2021"]} style={infoBoxStyle} />
          <InfoBox title="Support status" lines={["Confirmed"]} style={infoBoxStyle} />
          <InfoBox
            title="Delivery address"
            lines={["12 rue des Vogues", "57450 Farebersviller"]}
            style={infoBoxStyle}
          />
          <InfoBox title="Payement" lines={["Made with card ending with 3630"]} style={infoBoxStyle} />
          <InfoBox title="Arrival date" lines={["Wednesday 14th, 2021"]} style={infoBoxStyle} />
          <Button
            variant={ButtonVariants.PRIMARY}
            type="submit"
            style={{ width: "75%", margin: "1rem auto", display: "block" }}
          >
            {t("Export billing")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
