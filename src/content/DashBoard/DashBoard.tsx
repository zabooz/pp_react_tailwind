import { Tabs } from "flowbite-react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import "./styles/dashboard.css";

import Profile from "./Profile";
import LeaderBoard from "./LeaderBoard";
import Settings from "./Settings";

function DashBoard() {
  return (
    <div className="self-stretch min-h-[100vh] p-5 ">
      <Tabs aria-label="Tabs with underline" variant="underline"  >
        <Tabs.Item active title="Profile" icon={HiUserCircle} >
          <Profile />
        </Tabs.Item>
        <Tabs.Item title="Leaderboard" icon={MdDashboard}>
          <LeaderBoard />
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          <Settings />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default DashBoard;
