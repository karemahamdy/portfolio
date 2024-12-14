import { Img } from "./Img";

const Profile: React.FC = () => {
  return (
  
    <div className="flex flex-col items-center justify-center text-center  translate-x-0 translate-y-14 text-white">
    <Img/>
      <h1 className="text-[24px] font-bold">
      Hello, I am Karema Hamdy
      </h1>
        <p className="text-[20px] text-[#A06FC2]">
        Frontend  Software  Engineer.
      </p>
    </div>
    
  );
};

export default Profile;
