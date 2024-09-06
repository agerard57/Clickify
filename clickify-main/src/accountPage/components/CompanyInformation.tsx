import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { ButtonVariants, TypographyVariants } from "@/theme";
import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { MainModels } from "@clickify/clickify-common";
import { DisplayData } from "./DisplayData";

const DataSection = styled.section`
  margin-bottom: 20px;
`;

export const CompanyInformation: FC = () => {
  const { t } = useTranslation("AccountPage");
  const [companyData] = useOutletContext<[MainModels["Companies"]]>();

  const testObject = {
    legalName: companyData?.legalName,
    tradingName: companyData?.tradingName,
    email: companyData?.email,
    billingAddress: [
      `${companyData?.billingAddress?.number} ${companyData?.billingAddress?.streetName}`,
      `${companyData?.billingAddress?.zip} ${companyData?.billingAddress?.city}`,
      `${companyData?.billingAddress?.state} ${companyData?.billingAddress?.country}`,
    ],
    registeredOn: companyData?.registeredOn.toString(),
    lastPasswordGen: companyData?.lastPasswordGen.toString(),
    updatedOn: companyData?.updatedOn.toString(),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>{t("company.title")}</Typography>
      <div
        style={{
          borderRadius: 36,
          border: "1px solid #848484",
          background: "#FAFAFA",
          width: 535,
          flexShrink: 0,
          margin: 20,
          padding: 20,
          display: "grid",
        }}
      >
        <DataSection>
          <DisplayData label={t("company.content.display.legalName")} placeholders={[testObject.legalName]} />
          <DisplayData label={t("company.content.display.tradingName")} placeholders={[testObject.tradingName]} />
        </DataSection>
        <DataSection>
          <DisplayData label={t("company.content.display.email")} placeholders={[testObject.email]} />
        </DataSection>
        <DataSection>
          <DisplayData
            label={t("company.content.display.billingAddress")}
            placeholders={[...testObject.billingAddress]}
          />
        </DataSection>
        <DataSection>
          <DisplayData label={t("company.content.display.registeredOn")} placeholders={[testObject.registeredOn]} />
          <DisplayData
            label={t("company.content.display.lastPasswordGen")}
            placeholders={[testObject.lastPasswordGen]}
          />
          <DisplayData label={t("company.content.display.updatedOn")} placeholders={[testObject.updatedOn]} />
        </DataSection>
        <Button variant={ButtonVariants.PRIMARY}>{t("company.content.display.button")}</Button>
      </div>
    </div>
  );
};
