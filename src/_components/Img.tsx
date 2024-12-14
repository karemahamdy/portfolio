import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Img() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'anticipate' }}
    >
    <div className="w-[210px] h-[210px]">
      <Image
        priority
        className="rounded-full object-cover w-[80%] h-[80%]" 
        src="/karema.jpg"
        alt="karma"
        width={200}
        height={200}
    
      />
    </div>

     </motion.div>
  )
}
