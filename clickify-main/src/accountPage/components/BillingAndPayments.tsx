import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { useOutletContext } from "react-router-dom";
import { MainModels } from "@clickify/clickify-common";
import { DisplayData } from "./DisplayData";

const DataSection = styled.section`
  margin-bottom: 10px;
`;

export const BillingAndPayments: FC = () => {
  const { t } = useTranslation("AccountPage");
  const [companyData] = useOutletContext<[MainModels["Companies"]]>();

  // TODO Add transformers instead of these objects
  const testObject = {
    billingAddress: [
      `${companyData?.billingAddress?.number} ${companyData?.billingAddress?.streetName}`,
      `${companyData?.billingAddress?.zip} ${companyData?.billingAddress?.city}`,
      `${companyData?.billingAddress?.state} ${companyData?.billingAddress?.country}`,
    ],
    cardInformation: ["GERARD Alexandre", "••••	•••• •••• 1234", "••/••", "•••"],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>
        {t("billing.content.display.billingAddress.title")}
      </Typography>
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
          <DisplayData
            label={t("billing.content.display.billingAddress.title")}
            placeholders={[...testObject.billingAddress]}
          />
        </DataSection>
        <Button variant={ButtonVariants.PRIMARY}>{t("billing.content.display.billingAddress.button")}</Button>
      </div>
      <Typography variant={TypographyVariants.SMALL_TITLE} style={{ marginTop: 40 }}>
        {t("billing.content.display.paymentMethod.title")}
      </Typography>
      <div
        style={{
          borderRadius: 36,
          border: "1px solid #848484",
          background: "#FAFAFA",
          width: 535,
          flexShrink: 0,
          margin: 10,
          padding: 20,
          display: "grid",
        }}
      >
        <DataSection>
          <DisplayData
            label={t("billing.content.display.paymentMethod.cardInformation.label")}
            placeholders={[...testObject.cardInformation]}
          />
        </DataSection>
        <Button variant={ButtonVariants.PRIMARY}>{t("billing.content.display.paymentMethod.button")}</Button>
      </div>
    </div>
  );
};
