
// import Time from '@/components/Time'
// import Armory from '@/components/Armory'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function Main() {
  return (

      <Tabs defaultValue="timeline"
        className="w-full flex flex-col gap-6">
        <TabsList className="mx-auto bg-black">
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
        <TabsTrigger value="armory">Armory</TabsTrigger>
      </TabsList>
      <TabsContent value="timeline">
        {/* <Time /> */}
        <p>hello</p>
      </TabsContent>
      <TabsContent value="armory">
        {/* <Armory /> */}
        <p>karema</p>
      </TabsContent>
    </Tabs> 
  )
}
