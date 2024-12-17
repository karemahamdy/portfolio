import "./globals.css";
import Main from "@/_components/Tabs";
import Profile from "@/_components/Profile";
import Canvas from "@/_components/Canvas";
import  Links  from "@/_components/Links"


const Home: React.FC = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Canvas/>
      <Profile/>
      <Main />
      <Links/>
    </main>

  );
};

export default Home;
