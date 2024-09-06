import { TypographyVariants } from "@/theme";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";

interface UserDetails {
  name: string;
  role: string;
  avatar: string;
}

interface NavBarProps {
  title: string;
  user: UserDetails;
  style?: React.CSSProperties;
}

export const NavBar: FC<NavBarProps> = ({ title, user, style }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        ...style,
      }}
    >
      <AppBar
        position="relative"
        sx={{
          paddingTop: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 13px -3px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Toolbar style={{ position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
            <Typography
              style={{
                alignSelf: "end",
                fontWeight: "bold",
                fontSize: "14px",
                paddingBottom: "5px",
              }}
            >
              {title}
            </Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Typography
                  variant={TypographyVariants.USERNAME}
                  style={{
                    textAlign: "left",
                    alignSelf: "end",
                    marginTop: "5px",
                  }}
                >{`${user.name}`}</Typography>
                <Typography
                  variant={TypographyVariants.SUBTITLE}
                  style={{
                    textAlign: "left",
                    alignSelf: "end",
                    marginBottom: "5px",
                  }}
                >
                  {" "}
                  {`${user.role}`}
                </Typography>
              </div>
              <img
                src={user.avatar}
                alt="avatar"
                style={{ borderRadius: "50%", marginLeft: "1.5rem", height: "50px" }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
