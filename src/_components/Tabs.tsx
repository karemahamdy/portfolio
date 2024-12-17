'use client';
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
      className="container mx-auto px-4"
    >
      <Tabs defaultValue="timeline" className="w-full max-w-4xl mx-auto flex flex-col gap-6">
        <TabsList className="bg-gray-800 p-1 rounded-full mx-auto inline-flex space-x-2 shadow-lg">
          <TabsTrigger
            value="timeline"
            className="
              px-6 py-2 
              text-sm font-medium 
              rounded-full 
              transition-all duration-300 
              hover:bg-gray-700 
              data-[state=active]:bg-white 
              data-[state=active]:text-gray-900
              text-gray-300
            "
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="armory"
            className="
              px-6 py-2 
              text-sm font-medium 
              rounded-full 
              transition-all duration-300 
              hover:bg-gray-700 
              data-[state=active]:bg-white 
              data-[state=active]:text-gray-900
              text-gray-300
            "
          >
            Skills
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="timeline"
          className="
            p-6 
            transition-all 
            duration-500 
            ease-in-out
          "
        >
          <Time />
        </TabsContent>
        <TabsContent
          value="armory"
          className="  
            p-6 
            transition-all 
            duration-500 
            ease-in-out
          "
        >
          <Armory />
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}