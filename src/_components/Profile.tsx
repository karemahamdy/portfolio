import  Img  from "./Img";

const Profile: React.FC = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-center relative translate-x-0 translate-y-32 text-white">
    <Img/>
      <h1 className="text-[24px] font-bold">
      Hello, I am Karema Hamdy
      </h1>
      <p className="text-[20px]">
        Frontend  Software  Engineer.
      </p>
    </div>
    </>
  );
};

export default Profile;
