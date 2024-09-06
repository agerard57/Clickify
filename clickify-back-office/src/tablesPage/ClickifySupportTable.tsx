import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const ClickifySupportTable: FC = () => {
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
            { id: 1, topic: "Nom Prénom 1", name: "Entreprise 1", status: "Waiting" },
            { id: 2, topic: "Nom Prénom 2", name: "Entreprise 2", status: "In progress" },
            { id: 3, topic: "Nom Prénom 3", name: "Entreprise 3", status: "Resolved" },
            { id: 4, topic: "Nom Prénom 4", name: "Entreprise 4", status: "Unresolved" },
            { id: 5, topic: "Nom Prénom 4", name: "Entreprise 4", status: "Cancelled" },
            { id: 6, topic: "Nom Prénom 4", name: "Entreprise 4", status: "Waiting" },
            { id: 7, topic: "Nom Prénom 4", name: "Entreprise 4", status: "In progress" },
            { id: 8, topic: "Nom Prénom 4", name: "Entreprise 4", status: "Resolved" },
            { id: 9, topic: "Nom Prénom 4", name: "Entreprise 4", status: "Unresolved" },
            { id: 10, topic: "Nom Prénom 4", name: "Entreprise 4", status: "Cancelled" },
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
