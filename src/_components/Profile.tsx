"use client";
import { motion } from 'framer-motion'
import { Img } from "./Img";

const Profile: React.FC = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-4">
    <Img />
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >

    <h1 className="text-2xl font-bold">Hello, I am Karema Hamdy</h1>
    <p className="text-lg text-[#A06FC2]">Frontend Software Engineer.</p>
    </motion.div>
  </div>
);


export default Profile;
