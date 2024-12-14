import Canvas from "@/_components/Canvas";
import "./globals.css";
import Profile from "@/_components/Profile";
import Main from "@/_components/Main";

const Home: React.FC = () => {
  return (
    <main className="" id="bgWrapper">
    <Canvas/>
      <Profile />
      <Main/>
    </main>
  );
};

export default Home;
