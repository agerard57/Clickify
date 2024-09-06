import React, { FC } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useConstants } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarSections } from "../../typings";

export const SideBarDocumentation: FC = () => {
  const appConstants = useConstants();

  const categoryConstants = appConstants.core.sideBar.categories;

  return (
    <>
      <ListItem>
        <div
          style={{
            display: "flex",
          }}
        >
          <ListItemText
            primary={categoryConstants[SideBarSections.DOCUMENTATION].title}
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              textAlign: "left",
              textTransform: "uppercase",
              marginRight: "0.5rem",
            }}
          />
        </div>
      </ListItem>
      <ListItem style={{ opacity: 0.6 }}>
        <ListItemIcon
          style={{
            fontSize: "2rem",
            color: categoryConstants[SideBarSections.DOCUMENTATION].items.default.color,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={categoryConstants[SideBarSections.DOCUMENTATION].items.default.icon} />
        </ListItemIcon>
        <ListItemText
          primary="Getting started" // TODO CHANGE
        />
      </ListItem>
    </>
  );
};
