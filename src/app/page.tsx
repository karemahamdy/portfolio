import Canvas from "@/_components/ui/Canvas";
import "./globals.css";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full ">
    <Canvas/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">
          Hello, I'm Karema. A passionate Frontend Engineer.
        </h1>
        <p className="text-xl mt-4">
          JavaScript and React/Next.js developer
        </p>
      
      </div>
    </div>
  );
};

export default Home;
