import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import { PlanTypes } from "@clickify/clickify-common";
import { Chip, ListItem, ListItemText } from "@mui/material";

import { SideBarCategoryProps, SideBarSections } from "../../typings";
import { SideBarItem } from "./SideBarItem";

interface Props {
  category: SideBarCategoryProps;
  categoryIndex: number;
  currentPlan: PlanTypes;
  currentUniverse?: string;
}

export const SideBarCategory: FC<Props> = ({ category, categoryIndex, currentPlan, currentUniverse }) => {
  const location = useLocation();

  return (
    <div>
      <ListItem>
        <div
          style={{
            display: "flex",
          }}
        >
          <ListItemText
            primary={category.title === SideBarSections.UNIVERSES ? currentUniverse ?? category.title : category.title}
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              textAlign: "left",
              textTransform: "uppercase",
              marginRight: "0.5rem",
            }}
          />
          {category.hasBadge &&
          (currentPlan === PlanTypes.BASIC ||
            currentPlan === PlanTypes.PREMIUM ||
            currentPlan === PlanTypes.CLICKIFY) ? (
            <Chip
              label={currentPlan}
              style={{
                backgroundColor: "#6A82FF",
                color: "#fff",
                fontSize: "0.8rem",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            />
          ) : null}
        </div>
      </ListItem>
      {Object.values(category.items).map((item, itemIndex) => {
        const currentPathName = location.pathname !== "/" ? location.pathname : null;
        const isCurrentCategory = item.link === currentPathName;

        return (
          <SideBarItem
            key={`${categoryIndex}-${itemIndex}`}
            category={category}
            item={item}
            currentCategory={isCurrentCategory}
            currentPlan={currentPlan}
          />
        );
      })}
    </div>
  );
};
