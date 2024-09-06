import React, { FC } from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { PlanTypes } from "@clickify/clickify-common";
import { useConstants } from "@/constants";
import { SideBarSections } from "../../typings";
import { LogoBo } from "../../assets";
import { SideBarCategory } from "./SideBarCategory";
import { SideBarDocumentation } from "./SideBarDocumentation";

interface Props {
  currentPlan: PlanTypes;
  currentUniverse?: string;
}

// TODO Add opacity, button / optimise and refactor type and this page / hover /
// TODO Add this to a helper
// TODO By god, please pick the HD logo, this one looks sorry to be there

export const SideBar: FC<Props> = ({ currentPlan, currentUniverse }) => {
  const appConstants = useConstants();

  const categoryConstants = appConstants.core.sideBar.categories;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 300,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
      }}
      open={true}
    >
      <List>
        <ListItem>
          <img src={LogoBo} alt="Logo Bo" width={"100%"} height={"auto"} />
        </ListItem>
      </List>
      <List>
        {[categoryConstants[SideBarSections.CLICKIFY], categoryConstants[SideBarSections.UNIVERSES]].map(
          (category, categoryIndex) =>
            (category.adminOnly && currentPlan === PlanTypes.ADMIN) ||
            (!category.adminOnly &&
              (currentPlan === PlanTypes.BASIC ||
                currentPlan === PlanTypes.PREMIUM ||
                currentPlan === PlanTypes.CLICKIFY ||
                currentPlan === PlanTypes.ADMIN)) ? (
              <SideBarCategory
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
                currentPlan={currentPlan}
                currentUniverse={currentUniverse}
              />
            ) : null,
        )}
        <SideBarDocumentation />
      </List>
    </Drawer>
  );
};
