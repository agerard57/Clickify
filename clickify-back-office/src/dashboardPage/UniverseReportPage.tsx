import { Panel } from "@/core/components/Panel";
import React, { FC } from "react";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import BarChart from "@/core/components/chartJS/BarChart";
import PieChart from "@/core/components/chartJS/PieChart";
import StatsCard from "./components/StatsCard";

export const UniverseReportPage: FC = () => {
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
        <PieChart
          holeSize={0}
          style={{
            width: "100%",
            height: "100%",
            gridArea: "1 / 1 / 3 / 3",
          }}
        ></PieChart>
        <PieChart
          holeSize={0}
          style={{
            width: "100%",
            height: "100%",
            gridArea: "1 / 3 / 3 / 5",
          }}
        ></PieChart>
        <Panel
          style={{
            gridArea: "1 / 5 / 3 / 8",
            width: "100%",
            height: "100%",
            minHeight: 100,
          }}
        >
          <>3</>
        </Panel>

        <Panel
          style={{
            gridArea: "1 / 8 / 3 / 11",
            width: "100%",
            height: "100%",
            minHeight: 100,
          }}
        >
          <>4</>
        </Panel>

        <div style={{ gridArea: "3 / 5 / 4 / 7" }}>
          <StatsCard
            percentChange={-6.4}
            statValue={320}
            statsTitle="support requests"
            icon={faMessage}
            circleColor="#6F6"
          />
        </div>

        <div style={{ gridArea: "3 / 7 / 4 / 9" }}>
          <StatsCard
            percentChange={-6.4}
            statValue={320}
            statsTitle="support requests"
            icon={faMessage}
            circleColor="#6F6"
          />
        </div>

        <div style={{ gridArea: "3 / 9 / 4 / 11" }}>
          <StatsCard
            percentChange={-6.4}
            statValue={320}
            statsTitle="support requests"
            icon={faMessage}
            circleColor="#6F6"
          />
        </div>
        <BarChart
          style={{
            width: "100%",
            height: "100%",
            gridArea: "3 / 1 / 5 / 5",
          }}
        ></BarChart>

        <Panel
          style={{
            gridArea: "5 / 1 / 6 / 5",
            width: "100%",
            height: "100%",
            minHeight: 100,
          }}
        >
          <>9</>
        </Panel>

        <Panel
          style={{
            gridArea: "4 / 5 / 6 / 9",
            width: "100%",
            height: "100%",
            minHeight: 100,
          }}
        >
          <>10</>
        </Panel>

        <Panel
          style={{
            gridArea: "4 / 9 / 6 / 11",
            width: "100%",
            height: "100%",
            minHeight: 100,
          }}
        >
          <>11</>
        </Panel>
      </div>
    </>
  );
};
