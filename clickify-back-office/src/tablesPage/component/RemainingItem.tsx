import { Panel } from "@/core/components/Panel";
import React, { FC } from "react";
import { colorPalette } from "@/theme/colorPalette";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RemainingItemProps {
  style?: React.CSSProperties;
  isUpgradable?: boolean;
  count: number;
  maxCount: number;
  afterCountLabel: string;
  onUpgrade?: () => void;
  onAdd: () => void;
}

export const RemainingItem: FC<RemainingItemProps> = ({
  style,
  isUpgradable,
  count,
  maxCount,
  afterCountLabel,
  onUpgrade,
  onAdd,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Panel
        style={{
          minHeight: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ...style,
        }}
      >
        Remaining Item
        {isUpgradable ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ borderRadius: 5, width: "100%", backgroundColor: colorPalette.lightGrey, height: 10 }}>
              <div
                style={{
                  backgroundColor: colorPalette.blue,
                  width: `${(count / maxCount) * 100}%`,
                  height: "100%",
                  borderRadius: 5,
                }}
              ></div>
            </div>
            <FontAwesomeIcon icon={faInfo} color={colorPalette.grey} style={{ padding: 10 }} />
          </div>
        ) : (
          <p>Your plan permits you to add as many stores as you want. Enjoy!</p>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            {
              <>
                <span
                  style={{
                    border: "1px solid black",
                    backgroundColor: colorPalette.lightGrey,
                    color: colorPalette.primaryBlack,
                    marginRight: 5,
                  }}
                >
                  {count}
                </span>
                of {maxCount}
              </>
            }
            {` ${afterCountLabel}`}
          </div>
          <div>
            {isUpgradable && onUpgrade && <button onClick={onUpgrade}>Upgrade your plan</button>}
            <button onClick={onAdd}>add</button>
          </div>
        </div>
      </Panel>
    </div>
  );
};
