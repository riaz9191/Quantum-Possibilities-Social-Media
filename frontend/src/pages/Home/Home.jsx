import Container from "../../components/Shared/Container";
import Newsfeed from "../../components/Shared/Newsfeed/Newsfeed";
import RightSidebar from "../../components/Shared/RightSidebar/RightSidebar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Sidebar2 from "../../components/Shared/Sidebar2/Sidebar2";

const Home = () => {
  return (
  // <Container>
      <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-2/12">
        <Sidebar2 />
      </div>
      <div className="w-6/12">
        <Newsfeed />
      </div>
      <div className="w-2/12">
        <RightSidebar />
      </div>
    </div>
  // </Container>
  );
};

export default Home;
