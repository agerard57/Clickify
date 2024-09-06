import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { TypographyVariants } from "@/theme";
import { Languages, MainModels } from "@clickify/clickify-common";
import { Typography } from "@mui/material";
import {
  DataGrid,
  enUS,
  frFR,
  GridActionsCellItem,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";
import { useLanguage } from "../../language";

export const SubscriptionHistory: FC = () => {
  const { t } = useTranslation("AccountPage");
  const { language } = useLanguage();
  const [companyData] = useOutletContext<[MainModels["Companies"]]>();

  const columns: GridColDef[] = [
    { field: "plan", headerName: t("history.table.headers.plan"), sortable: false, width: 130 },
    // TODO datetime
    { field: "since", headerName: t("history.table.headers.since"), width: 130 },
    // TODO datetime
    { field: "exp", headerName: t("history.table.headers.exp"), width: 130 },
    {
      field: "price",
      headerName: t("history.table.headers.price"),
      width: 130,
      sortable: false,
      valueGetter: (params: GridValueGetterParams) => t("history.table.content.price", { price: params.row.price }),
    },
    {
      field: "export",
      type: "actions",
      headerName: t("history.table.headers.export"),
      sortable: false,
      disableColumnMenu: true,
      /* TODO https://mui.com/x/react-data-grid/export/#custom-export-format */
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={0}
          icon={<FontAwesomeIcon icon={faFilePdf} size="1x" />}
          label={t("history.table.headers.export")}
          onClick={() => {
            console.log(params.row.exportLink);
          }}
        />,
      ],
      width: 160,
    },
  ];

  const rows = [
    {
      id: `${companyData?.planHistory[0]?.plan}-${companyData?.planHistory[0]?.since}`,
      plan: companyData?.planHistory[0]?.plan, // TODO Add translations for the plans
      since: companyData?.planHistory[0]?.since.toString(),
      exp: companyData?.planHistory[0]?.exp.toString(),
      price: companyData?.planHistory[0]?.price,
      exportLink: "x",
    },
    {
      id: "0b7e92f6-70c3-11ee-b962-0242ac120002",
      plan: "Premium",
      since: "12/05/23",
      exp: "03/20/23",
      price: 3249,
      exportLink: "x",
    },
    {
      id: "11c3fb74-70c3-11ee-b962-0242ac120002",
      plan: "Basic",
      since: "06/23/22",
      exp: "02/20/22",
      price: 5923,
      exportLink: "x",
    },
    {
      id: "11c3eb74-70c3-11ee-b962-0242ac120002",
      plan: "Cancelled",
      since: "10/12/21",
      exp: "09/10/21",
      price: 5324,
      exportLink: "x",
    },
    {
      id: "11c2fb74-70c3-11ee-b962-0242ac120002",
      plan: "Basic",
      since: "05/01/21",
      exp: "04/03/21",
      price: 34,
      exportLink: "x",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>{t("history.title")}</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        style={{ width: "100%", marginTop: 20 }}
        hideFooterSelectedRowCount
        localeText={
          language === Languages.EN
            ? enUS.components.MuiDataGrid.defaultProps.localeText
            : frFR.components.MuiDataGrid.defaultProps.localeText
        }
      />
    </div>
  );
};
