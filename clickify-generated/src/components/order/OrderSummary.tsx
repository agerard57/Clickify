import React, { FC } from "react";
import { Box, Typography, Divider } from "@mui/material";

interface OrderSummaryProps {
  itemCount: number;
  itemPrice: number;
  taxCollected: number;
  shippingCost: number;
  style?: React.CSSProperties;
}

export const OrderSummary: FC<OrderSummaryProps> = ({ itemCount, itemPrice, taxCollected, shippingCost, style }) => {
  const total = itemPrice + taxCollected + shippingCost;

  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "300px",
        backgroundColor: "#f9f9f9",
        ...style,
      }}
    >
      <Typography gutterBottom sx={{ fontSize: "18px", fontWeight: "bold" }}>
        Order Summary
      </Typography>
      <Divider sx={{ marginBottom: "16px" }} />
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ fontSize: "15px", marginBottom: "8px" }}>Items ({itemCount}):</Typography>
        <Typography>${itemPrice.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ fontSize: "15px", marginBottom: "8px" }}>Tax collected:</Typography>
        <Typography>${taxCollected.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ fontSize: "15px", marginBottom: "8px" }}>Shipping:</Typography>
        <Typography>${shippingCost.toFixed(2)}</Typography>
      </Box>
      <Typography color="textSecondary" sx={{ marginTop: "4px" }}>
        4 day-delivery
      </Typography>
      <Divider sx={{ marginY: "16px" }} />
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ fontSize: "18px" }}>Order total:</Typography>
        <Typography>${total.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
