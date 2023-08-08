import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser()
  return (
   <div className='m-12'>
    { JSON.stringify(user) }
   </div>
  )
}
