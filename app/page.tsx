
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Home() {
  return (
    <body>


      <div className="w-screen h-12 rounded-sm flex justify-between">

        <div className="text-white ml-3 mt-3" >
          <Image src="/images/placeholder_logo.svg" alt="" width={90} height={90}/>
        </div>

        <div className="text-white flex justify-between gap-3 mt-3 mr-5 align-middle items-center">

          <div className="text-white">Features</div>
          <div className="text-white">About Us</div>

          <Button className=" text-white rounded-md border-2 p-1">Sign up/Login</Button>
        </div>

      </div>


      <p className="text-lg text-white">
        Find Your Perfect Study Partner
      </p>

    </body>
  )
}