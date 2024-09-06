import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const UniverseStoreTablePage: FC = () => {
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
            { id: "id", label: "ID" },
            { id: "store_id", label: "Store ID" },
            { id: "store_name", label: "Store Name" },
            { id: "store_status", label: "Store Status" },
          ]}
          rows={[
            {
              id: 1,
              store_id: "Store1",
              store_name: "store1",
              store_status: "active",
            },
            {
              id: 2,
              store_id: "Store2",
              store_name: "store2",
              store_status: "inactive",
            },
            {
              id: 3,
              store_id: "Store3",
              store_name: "store3",
              store_status: "active",
            },
            {
              id: 4,
              store_id: "Store4",
              store_name: "store4",
              store_status: "inactive",
            },
            {
              id: 5,
              store_id: "Store5",
              store_name: "store5",
              store_status: "active",
            },
            {
              id: 6,
              store_id: "Store6",
              store_name: "store6",
              store_status: "inactive",
            },
            {
              id: 7,
              store_id: "Store7",
              store_name: "store7",
              store_status: "active",
            },
            {
              id: 8,
              store_id: "Store8",
              store_name: "store8",
              store_status: "inactive",
            },
            {
              id: 9,
              store_id: "Store9",
              store_name: "store9",
              store_status: "active",
            },
            {
              id: 10,
              store_id: "Store10",
              store_name: "store10",
              store_status: "inactive",
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
