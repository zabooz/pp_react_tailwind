import { Outlet } from "react-router-dom";

function ContentBox() {
  return (
    <div className="min-h-[100vh] pt-[5rem] px-4 lg:pt-[4rem] bg-[#23bbb870]  dark:bg-slate-800 content-center  flex-col items-center mb-40 justify-center">
      <Outlet />
    </div>
  );
}

export default ContentBox;
