import { Img } from "./Img";

const Profile: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-4">
    <Img />
    <h1 className="text-2xl font-bold">Hello, I am Karema Hamdy</h1>
    <p className="text-lg text-[#A06FC2]">Frontend Software Engineer.</p>
  </div>
);


export default Profile;
