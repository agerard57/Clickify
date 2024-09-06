import React, { FC } from "react";
import { faBox, faUser, faCartArrowDown, faFolder, faPodcast, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Panel } from "@/core/components/Panel";
import PieChart from "@/core/components/chartJS/PieChart";
import BarChart from "@/core/components/chartJS/BarChart";
import StatsCard from "./components/StatsCard";

export const UniverseDashboardPage: FC = () => {
  return (
    <>
      <div
        style={{
          margin: 10,
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          gridColumnGap: 10,
          gridRowGap: 10,
        }}
      >
        <div style={{ gridArea: "1 / 1 / 2 / 3" }}>
          <StatsCard percentChange={1.23} statValue={543.456} statsTitle="Traffic" icon={faBox} circleColor="#FF0" />
        </div>
        <div style={{ gridArea: "1 / 3 / 2 / 5" }}>
          <StatsCard percentChange={2.45} statValue={201.156} statsTitle="accounts" icon={faUser} circleColor="#00F" />
        </div>
        <div style={{ gridArea: "1 / 5 / 2 / 7" }}>
          <StatsCard
            percentChange={4.23}
            statValue={65.562}
            statsTitle="websites generated"
            icon={faCartArrowDown}
            circleColor="#0FF"
          />
        </div>
        <PieChart
          holeSize={0}
          style={{
            gridArea: "1 / 7 / 3 / 9",
            width: "100%",
            height: "100%",
          }}
        />
        <PieChart
          holeSize={50}
          style={{
            width: "100%",
            height: "100%",
            gridArea: "1 / 9 / 3 / 11",
          }}
        ></PieChart>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 13px -3px",
            gridArea: "2 / 1 / 5 / 4",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 13px -3px",
            gridArea: "2 / 4 / 5 / 7",
          }}
        ></div>
        <Panel
          style={{
            width: "100%",
            height: "100%",
            gridArea: "3 / 7 / 6 / 11",
          }}
        >
          map
        </Panel>
        <div style={{ gridArea: "5 / 1 / 6 / 3" }}>
          <StatsCard percentChange={3.2} statValue={101.52} statsTitle="turnover" icon={faFolder} circleColor="#55F" />
        </div>
        <div style={{ gridArea: "5 / 3 / 6 / 5" }}>
          <StatsCard
            percentChange={-5.5}
            statValue={25}
            statsTitle="demo requests"
            icon={faPodcast}
            circleColor="#F77"
          />
        </div>
        <div style={{ gridArea: "5 / 5 / 6 / 7" }}>
          <StatsCard
            percentChange={-6.4}
            statValue={320}
            statsTitle="support requests"
            icon={faMessage}
            circleColor="#6F6"
          />
        </div>
      </div>
    </>
  );
};
