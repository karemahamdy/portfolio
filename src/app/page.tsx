import Armory from "@/ui/Armory";
import "./globals.css";
import Main from "@/app/Main";
import Profile from "@/_components/Profile";
import Canvas from "@/_components/Canvas";


const Home: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Canvas/>
      <Profile/>
      <Main/>

    </main>

  );
};

export default Home;
