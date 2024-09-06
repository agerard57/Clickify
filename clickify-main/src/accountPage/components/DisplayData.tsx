import { Typography } from "@mui/material";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { TypographyVariants } from "@/theme";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "label placeholder";
  margin-bottom: 10px;
  padding: 0 10%;
`;

interface DisplayDataProps {
  label: string;
  placeholders: string[];
}

export const DisplayData: FC<DisplayDataProps> = ({ label, placeholders }) => {
  const { t } = useTranslation("AccountPage");

  return (
    <LayoutGrid>
      <div style={{ gridArea: "label", display: "flex", flexDirection: "column" }}>
        <Typography variant={TypographyVariants.INPUT_LABEL}>{label}</Typography>
      </div>

      <div style={{ gridArea: "placeholder", display: "flex", flexDirection: "column" }}>
        {placeholders.length > 0 ? (
          placeholders.map((placeholder, index) => (
            <Typography key={index} variant={TypographyVariants.INPUT_PLACEHOLDER}>
              {placeholder}
            </Typography>
          ))
        ) : (
          <Typography variant={TypographyVariants.INPUT_PLACEHOLDER}>{t("company.content.display.noData")}</Typography>
        )}
      </div>
    </LayoutGrid>
  );
};
