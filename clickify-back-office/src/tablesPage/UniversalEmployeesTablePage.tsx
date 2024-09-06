import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";
import { RemainingItem } from "./component/RemainingItem";

export const UniversalEmployeesTablePage: FC = () => {
  return (
    <>
      <RemainingItem
        isUpgradable
        count={4}
        maxCount={5}
        afterCountLabel="accounts used"
        onAdd={() => {
          console.log("add");
        }}
        onUpgrade={() => {
          console.log("upgrade");
        }}
      />
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
              { id: "employee_name", label: "Employee Name" },
              { id: "employee_type", label: "Employee Type" },
            ]}
            rows={[
              {
                id: 1,
                employee_name: "employee1",
                employee_type: "Consultant",
              },
              {
                id: 2,
                employee_name: "employee2",
                employee_type: "Marchandiser",
              },
              {
                id: 3,
                employee_name: "employee3",
                employee_type: "Consultant",
              },
              {
                id: 4,
                employee_name: "employee4",
                employee_type: "Marchandiser",
              },
              {
                id: 5,
                employee_name: "employee5",
                employee_type: "Consultant",
              },
              {
                id: 6,
                employee_name: "employee6",
                employee_type: "Marchandiser",
              },
              {
                id: 7,
                employee_name: "employee7",
                employee_type: "Consultant",
              },
              {
                id: 8,
                employee_name: "employee8",
                employee_type: "Marchandiser",
              },
              {
                id: 9,
                employee_name: "employee9",
                employee_type: "Consultant",
              },
              {
                id: 10,
                employee_name: "employee10",
                employee_type: "Marchandiser",
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
    </>
  );
};
