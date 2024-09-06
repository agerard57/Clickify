import React, { FC } from "react";
import { PlanTypes } from "@clickify/clickify-common";
import { NavBar, SideBar } from "@/core";

interface Props {
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", marginLeft: 0 }}>
        <SideBar currentPlan={PlanTypes.ADMIN} currentUniverse="Ikea" />
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          {/* TODO Plug in real data */}
          <NavBar
            style={{ position: "fixed", top: 0, width: "calc(100% - 300px)" }}
            title="Dashboard"
            user={{
              name: "GERARD Alexandre",
              role: "Clickify Super Admin",
              avatar:
                "https://lh3.googleusercontent.com/a-/ALV-UjXtOiKt5cb1MPSUphRyIQW8W_DpasRvOQfYcSycyyiLvw=s88-w88-h88-c-k-no",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 75,
              minHeight: "calc(100vh - 95px)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
