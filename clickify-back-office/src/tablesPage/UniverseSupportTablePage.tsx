import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const UniverseSupportTablePage: FC = () => {
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
            { id: "topic", label: "Topic" },
            { id: "name", label: "Name" },
            { id: "status", label: "Status" },
          ]}
          rows={[
            {
              id: 1,
              topic: "topic1",
              name: "name1",
              status: "active",
            },
            {
              id: 2,
              topic: "topic2",
              name: "name2",
              status: "inactive",
            },
            {
              id: 3,
              topic: "topic3",
              name: "name3",
              status: "active",
            },
            {
              id: 4,
              topic: "topic4",
              name: "name4",
              status: "inactive",
            },
            {
              id: 5,
              topic: "topic5",
              name: "name5",
              status: "active",
            },
            {
              id: 6,
              topic: "topic6",
              name: "name6",
              status: "inactive",
            },
            {
              id: 7,
              topic: "topic7",
              name: "name7",
              status: "active",
            },
            {
              id: 8,
              topic: "topic8",
              name: "name8",
              status: "inactive",
            },
            {
              id: 9,
              topic: "topic9",
              name: "name9",
              status: "active",
            },
            {
              id: 10,
              topic: "topic10",
              name: "name10",
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
