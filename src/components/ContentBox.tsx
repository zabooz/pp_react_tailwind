import { Outlet } from "react-router-dom";

function ContentBox() {
  return (
    <div className="pt-20 min-h-[100vh] flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}

export default ContentBox;
