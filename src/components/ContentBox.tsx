import { Outlet } from "react-router-dom";

function ContentBox() {
  return (
    <div className="pt-20">
      <Outlet />
    </div>
  );
}

export default ContentBox;
