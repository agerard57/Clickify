import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ChipVariants, TypographyVariants } from "@/theme";
import { PlanTypes } from "@clickify/clickify-common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

import { isUserBelowTier } from "../../helpers";
import { SideBarCategoryProps, SideBarItemProps } from "../../typings";

interface Props {
  category: SideBarCategoryProps;
  item: SideBarItemProps;
  currentCategory: boolean;
  currentPlan: PlanTypes;
}

export const SideBarItem: FC<Props> = ({ category, item, currentCategory, currentPlan }) => {
  const { t } = useTranslation("Core");

  return (
    <Link to={item.link} style={{ textDecoration: "none" }}>
      <ListItem
        sx={{
          "&:hover": {
            opacity: 1,
            transition: "all 0.1s ease-in",
          },
          cursor: "pointer",
          opacity: currentCategory ? 1 : 0.6,
        }}
      >
        <ListItemIcon
          style={{
            fontSize: "2rem",
            color: item.color,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={item.icon} />
        </ListItemIcon>
        <ListItemText primary={t(`sideBar.categories.${category.title}.items.${item.title}.title`)} />
        {isUserBelowTier(currentPlan, item.exclusiveTo) ? (
          <Chip
            variant={ChipVariants.PRIMARY}
            label={<Typography variant={TypographyVariants.CHIP}>{t(`sideBar.chips.${item.exclusiveTo}`)}</Typography>}
            style={{
              backgroundColor: "#6A82FF",
              color: "#fff",
              borderRadius: 5,
              fontSize: "0.8rem",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          />
        ) : null}
      </ListItem>
    </Link>
  );
};
