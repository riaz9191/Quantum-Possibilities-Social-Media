import Newsfeed from "../../components/Shared/Newsfeed/Newsfeed";
import RightSidebar from "../../components/Shared/RightSidebar/RightSidebar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Sidebar2 from "../../components/Shared/Sidebar2/Sidebar2";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-2/12">
        <Sidebar2 />
      </div>
      <div className="w-5/12">
        <Newsfeed />
      </div>
      <div className="w-3/12">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
