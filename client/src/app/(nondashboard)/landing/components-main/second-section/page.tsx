

'use client'

import React from "react"
import Image from "next/image"

import Link from "next/link";
import { Button } from "@/components/ui/button";




const SecondSection = () => {
    return ( 
    <div className="">
        <div className="
md:flex-row
      
flex-col
items-center
flex  justify-center pb-10
        
        ">
            <div className="p-5 justify-center md:w-1/3">
                <div className="
                bg-gradient-to-r
                from-orange-800
                to-green-300
                bg-clip-text
                text-transparent
                text-4xl
                md:text-6xl
                font-bold
                pb-10
                
                ">
                  

                </div>
                
               <Link href="/search">          
 <Button className="
    text-lg
    mt-6
    rounded-[40px]
    text-[#eff0ff]
    font-medium
    p-6
    
    hover:scale-110
    hover:shadow-indigo-500
    transition-all
    duration-300
    shadow-md

        " size="lg">
            Continue
            </Button>
          </Link> 

                </div>
                

                <video className="rounded-xl md:w-2/5 p-4 md:p-0 "  autoPlay muted loop >
                    <source src="/content/video-2.mp4" type="video/mp4" />

                </video>

            </div>

           
        </div>



  );
}
 
export default SecondSection;