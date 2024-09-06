import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const UniverseOrderTablePage: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        margin: 20,
        flex: 1,
      }}
    >
      <div style={{ flex: 1 }}>
        <Table
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            marginTop: 20,
            minHeight: 100,
          }}
          headCells={[
            { id: "order_id", label: "Order ID" },
            { id: "topic", label: "User" },
            { id: "name", label: "Date" },
            { id: "status", label: "Status" },
            { id: "tprice", label: "Total price" },
            { id: "quantity", label: "Qte" },
          ]}
          rows={[
            {
              id: 1,
              order_id: 1,
              topic: "Nom Prénom 1",
              name: "Entreprise 1",
              status: "Shipped",
              tprice: 100,
              quantity: 1,
            },
            {
              id: 2,
              order_id: 2,
              topic: "Nom Prénom 2",
              name: "Entreprise 2",
              status: "Pending",
              tprice: 200,
              quantity: 2,
            },
            {
              id: 3,
              order_id: 3,
              topic: "Nom Prénom 3",
              name: "Entreprise 3",
              status: "Confirmed",
              tprice: 300,
              quantity: 3,
            },
            {
              id: 4,
              order_id: 4,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Dropped",
              tprice: 400,
              quantity: 4,
            },
            {
              id: 5,
              order_id: 5,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Done",
              tprice: 500,
              quantity: 5,
            },
            {
              id: 6,
              order_id: 6,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Cancelled",
              tprice: 600,
              quantity: 6,
            },
            {
              id: 7,
              order_id: 7,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Shipped",
              tprice: 700,
              quantity: 7,
            },
            {
              id: 8,
              order_id: 8,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Pending",
              tprice: 800,
              quantity: 8,
            },
            {
              id: 9,
              order_id: 9,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Confirmed",
              tprice: 900,
              quantity: 9,
            },
            {
              id: 10,
              order_id: 10,
              topic: "Nom Prénom 4",
              name: "Entreprise 4",
              status: "Dropped",
              tprice: 1000,
              quantity: 10,
            },
          ]}
          totalCount={10}
          onDelete={() => {
            console.log("delete");
          }}
          onEdit={() => {
            console.log("edit");
          }}
          onView={() => {
            console.log("view");
          }}
        ></Table>
      </div>
      <Panel
        style={{
          width: "30%",
          height: "100%",
          minHeight: "100%",
          margin: 20,
        }}
      >
        test
      </Panel>
    </div>
  );
};
