import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const DemoRequestTablePage: FC = () => {
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
            { id: "fullName", label: "Nom Complet" },
            { id: "company", label: "Entreprise" },
            { id: "status", label: "Status" },
          ]}
          rows={[
            { id: 1, fullName: "Nom Prénom 1", company: "Entreprise 1", status: "Terminé" },
            { id: 2, fullName: "Nom Prénom 2", company: "Entreprise 2", status: "En cours" },
            { id: 3, fullName: "Nom Prénom 3", company: "Entreprise 3", status: "Annulé" },
            { id: 4, fullName: "Nom Prénom 4", company: "Entreprise 4", status: "Terminé" },
            { id: 5, fullName: "Nom Prénom 5", company: "Entreprise 5", status: "Terminé" },
            { id: 6, fullName: "Nom Prénom 6", company: "Entreprise 6", status: "Terminé" },
            { id: 7, fullName: "Nom Prénom 7", company: "Entreprise 7", status: "Terminé" },
            { id: 8, fullName: "Nom Prénom 8", company: "Entreprise 8", status: "Terminé" },
            { id: 9, fullName: "Nom Prénom 9", company: "Entreprise 9", status: "Terminé" },
            { id: 10, fullName: "Nom Prénom 10", company: "Entreprise 10", status: "Terminé" },
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
