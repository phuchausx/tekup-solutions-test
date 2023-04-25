import React from "react";

import mapModifiers from "utils/functions";

interface TabProps {
  label?: string;
  active?: boolean;
  handleClick?: () => void;
}

interface TabsProps {
  children: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ active, label, handleClick }) => (
  <div
    onClick={handleClick}
    className={mapModifiers("tabs_tab", active && "active")}
  >
    <span className="tabs_label">{label}</span>
  </div>
);

export const Tabs: React.FC<TabsProps> = ({ children }) => (
  <div className="tabs">
    <div className="tabs_labels">{children}</div>
  </div>
);

Tab.defaultProps = {
  label: "",
  active: false,
  handleClick: undefined,
};

export default Tabs;
