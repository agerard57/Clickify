import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const UniverseUsersTablePage: FC = () => {
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
            { id: "user_name", label: "User Name" },
            { id: "status", label: "Status" },
          ]}
          rows={[
            {
              id: 1,
              user_name: "user1",
              status: "active",
            },
            {
              id: 2,
              user_name: "user2",
              status: "inactive",
            },
            {
              id: 3,
              user_name: "user3",
              status: "active",
            },
            {
              id: 4,
              user_name: "user4",
              status: "inactive",
            },
            {
              id: 5,
              user_name: "user5",
              status: "active",
            },
            {
              id: 6,
              user_name: "user6",
              status: "inactive",
            },
            {
              id: 7,
              user_name: "user7",
              status: "active",
            },
            {
              id: 8,
              user_name: "user8",
              status: "inactive",
            },
            {
              id: 9,
              user_name: "user9",
              status: "active",
            },
            {
              id: 10,
              user_name: "user10",
              status: "inactive",
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
