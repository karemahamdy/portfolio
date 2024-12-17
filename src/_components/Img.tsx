"use client";

import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

export function Img() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'anticipate' }}
    >
      <div className="karema-wrapper relative w-[215px] h-[215px] mt-[5px] ml-[2px]">
        <Image
          priority
          className="rounded-full object-cover w-[90%] h-[90%] z-10"
          src="/karema.jpg"
          alt="karema"
          width={200}
          height={200}
        />
      </div>
    </motion.div>
  );
}
