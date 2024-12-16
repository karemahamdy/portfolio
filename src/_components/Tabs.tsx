"use client";

import { motion } from 'framer-motion'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Armory from '../ui/Armory'
import Time from './Time'


export default function Main() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'anticipate' }}
    >
      <Tabs defaultValue="timeline"
        className="w-full flex flex-col gap-6">
        <TabsList className="mx-auto bg-black">
          <TabsTrigger value="timeline">About</TabsTrigger>
          <TabsTrigger value="armory">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline">
          <Time/>
        </TabsContent>
        <TabsContent value="armory">
          <Armory />
        </TabsContent>
      </Tabs>
          </motion.div>
    )
  }
