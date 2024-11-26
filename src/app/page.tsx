import Canvas from "@/_components/Canvas";
import "./globals.css";
import Profile from "@/_components/Profile";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full ">
    <Canvas/>
    <Profile/>
    </div>
  );
};

export default Home;
