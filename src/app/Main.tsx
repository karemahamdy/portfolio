import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Armory from '../ui/Armory'
// import Time from '@/components/Time'
// import Armory from '@/components/Armory'

export default function Main() {
  return (
    <Tabs defaultValue="timeline"
      className="w-full flex flex-col gap-6">
      <TabsList className="mx-auto bg-black">
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
        <TabsTrigger value="armory">Armory</TabsTrigger>
      </TabsList>
      <TabsContent value="timeline">
        <Armory />
        {/* <Time /> */}
      </TabsContent>
      <TabsContent value="armory">
        {/* <Armory /> */}
      </TabsContent>
    </Tabs>
  )
}