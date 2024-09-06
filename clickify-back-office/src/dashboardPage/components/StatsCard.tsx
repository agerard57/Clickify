import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Panel } from "@/core/components/Panel";
import { Typography } from "@mui/material";
import { TypographyVariants } from "@/theme";
import { colorPalette } from "@/theme/colorPalette";

interface StatsCardProps {
  icon: IconDefinition;
  statsTitle: string;
  statValue: number;
  percentChange: number;
  circleColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, statsTitle, statValue, percentChange, circleColor }) => {
  return (
    <Panel>
      <div style={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography variant={TypographyVariants.GRAPH_TITLE}>{statsTitle}</Typography>
            <Typography variant={TypographyVariants.GRAPH_VALUE}>{statValue}</Typography>
          </div>
          <div
            style={{
              backgroundColor: circleColor,
              borderRadius: "50%",
              width: 35,
              height: 35,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={icon} color={colorPalette.white} width={40} height={40} />
          </div>
        </div>
        <div
          style={{
            paddingTop: 5,
          }}
        >
          <Typography variant={TypographyVariants.SUBTITLE}>
            <span style={{ color: percentChange < 0 ? "red" : "green" }}>
              {percentChange < 0 ? "" : "+"} {percentChange}%{" "}
            </span>
            Since the mount before
          </Typography>
        </div>
      </div>
    </Panel>
  );
};

export default StatsCard;
