import { Search, Bell, RotateCw } from "react-feather";
import React from "react";

function Topbar() {
  return (
    <div className="flexbtw p-2" style={{ background: "white", borderBottom: "1px solid silver" }}>
      <div className="flex topbar_left_ah">
        <input placeholder="Try Frontend" type="search" />
        <Search width='16px' height="16px" />
      </div>
      <div className="flex topbar_right_ah">
        <div className="refresh">
          <Bell width='16px' height="16px" />
        </div>
        <div>
          <p className="flex refresh">Refresh  <RotateCw width='16px' /></p>
        </div>
      </div>
    </div>

  );
}
export default Topbar;
