import "./globals.css";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full ">
    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold">
          Hello, I'm Karema. A passionate Frontend Engineer.
        </h1>
        <p className="text-xl mt-4">
          JavaScript and React/Next.js developer
        </p>
        <div className="mt-6">
          <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-md">Download CV</a>
          <a href="#contact" className="ml-4 px-6 py-3 bg-gray-700 text-white rounded-md">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
