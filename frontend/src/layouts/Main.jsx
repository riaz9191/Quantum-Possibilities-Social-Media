import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <div className="bg-[#E5E6EC]">
        <Navbar />
        {/* <Sidebar /> */}
        <div className="">
          <div className="pt-20 min-h-[calc(100vh-68px)]">
            <Outlet />
          </div>
        </div>
          {/* <RightSidebar /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;

{
  /* <div className='pt-24 min-h-[calc(100vh-68px)]'>
<Outlet />
</div> */
}
