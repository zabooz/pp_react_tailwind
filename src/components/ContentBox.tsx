import { Outlet } from "react-router-dom";

function ContentBox() {
  return (
    <div className="pt-20 dark:bg-slate-800">
      <Outlet />
    </div>
  );
}

export default ContentBox;
