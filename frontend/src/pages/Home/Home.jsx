import Container from "../../components/Shared/Container";
import Newsfeed from "../../components/Shared/Newsfeed/Newsfeed";
import RightSidebar from "../../components/Shared/RightSidebar/RightSidebar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Sidebar2 from "../../components/Shared/Sidebar2/Sidebar2";

const Home = () => {
  return (
  // <Container>
      <div className="flex gap-4">
      <div className="w-2/12 hidden md:flex">
        <Sidebar />
      </div>
      <div className="w-2/12 hidden md:flex">
        <Sidebar2 />
      </div>
      <div className="w-full md:w-6/12">
        <Newsfeed />
      </div>
      <div className="w-2/12 hidden md:flex">
        <RightSidebar />
      </div>
    </div>
  // </Container>
  );
};

export default Home;
