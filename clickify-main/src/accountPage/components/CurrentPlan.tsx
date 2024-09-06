import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { PriceBox } from "@/core";
import { ButtonVariants, TypographyVariants } from "@/theme";
import { MainModels, PlanTypes } from "@clickify/clickify-common";
import { Button, Typography, useTheme } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { DisplayData } from "./DisplayData";

export const CurrentPlan: FC = () => {
  const { t } = useTranslation("AccountPage");
  const theme = useTheme();

  const [companyData] = useOutletContext<[MainModels["Companies"]]>();
  const current = companyData?.planHistory?.find((plan) => plan.current === true);
  const testObject = {
    currentPlan: current?.plan as PlanTypes.BASIC | PlanTypes.CLICKIFY | PlanTypes.PREMIUM,
    // TODO: Type sucks
    since: current?.since.toString(),
    exp: current?.exp.toString(),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant={TypographyVariants.SMALL_TITLE}>{t("plan.title")}</Typography>

      <div style={{ padding: "20px 0" }}>
        <DisplayData label={t("plan.content.since")} placeholders={[testObject.since]} />
        <DisplayData label={t("plan.content.exp")} placeholders={[testObject.exp]} />
      </div>
      <PriceBox plan={testObject.currentPlan} isStatic={true} />
      <Button variant={ButtonVariants.PRIMARY} style={{ width: "100%", margin: 15 }}>
        {t("plan.content.buttons.changePlan")}
      </Button>
      <Button
        variant={ButtonVariants.TEXT}
        style={{ width: "80%", color: theme.app.accountPage.currentPlan.cancelButton }}
      >
        {t("plan.content.buttons.cancelPlan")}
      </Button>
    </div>
  );
};
