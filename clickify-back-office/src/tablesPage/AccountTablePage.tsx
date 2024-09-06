import React, { FC } from "react";
import { Panel } from "@/core/components/Panel";
import { Table } from "./component/Table";

export const AccountTablePage: FC = () => {
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
            { id: "company_name", label: "Compagny Name" },
            { id: "current_plan", label: "Current plan" },
            { id: "domain_name", label: "Domain" },
            { id: "account_status", label: "Status" },
          ]}
          rows={[
            {
              id: 1,
              company_name: "Company 1",
              current_plan: "Plan 1",
              domain_name: "domain1.com",
              account_status: "Active",
            },
            {
              id: 2,
              company_name: "Company 2",
              current_plan: "Plan 2",
              domain_name: "domain1.fr",
              account_status: "Banned",
            },
            {
              id: 3,
              company_name: "Company 3",
              current_plan: "Plan 3",
              domain_name: "domain1.ru",
              account_status: "Active",
            },
            {
              id: 4,
              company_name: "Company 4",
              current_plan: "Plan 4",
              domain_name: "domain1.xyz",
              account_status: "Inactive",
            },
            {
              id: 5,
              company_name: "Company 5",
              current_plan: "Plan 5",
              domain_name: "domain1.net",
              account_status: "Active",
            },
            {
              id: 6,
              company_name: "Company 6",
              current_plan: "Plan 6",
              domain_name: "domain1.org",
              account_status: "Active",
            },
            {
              id: 7,
              company_name: "Company 7",
              current_plan: "Plan 7",
              domain_name: "domain1.com",
              account_status: "Active",
            },
            {
              id: 8,
              company_name: "Company 8",
              current_plan: "Plan 8",
              domain_name: "domain1.com",
              account_status: "Active",
            },
            {
              id: 9,
              company_name: "Company 9",
              current_plan: "Plan 9",
              domain_name: "domain1.com",
              account_status: "Active",
            },
            {
              id: 10,
              company_name: "Company 10",
              current_plan: "Plan 10",
              domain_name: "domain1.com",
              account_status: "Active",
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
