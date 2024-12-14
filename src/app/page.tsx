import Canvas from "@/_components/Canvas";
import "./globals.css";
import Profile from "@/_components/Profile";
import Armory from "@/_components/Armory";


const Home: React.FC = () => {
  return (
    <main className="" id="bgWrapper">
    <Canvas/>
      <Profile />
      {/* <Armory/> */}
    </main>
  );
};

export default Home;
