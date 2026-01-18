import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from 'react-icons/fa'


import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8  mb-20">
      <BackgroundBlur className="-top-40 md:top-0" />
      <Nav />
      <div className="mt-8 flex flex-wrap justify-center flex-row items-center gap-48">

        <div className=" space-y-7">
          <motion.h1 initial={{opacity:0 , x:-200}} transition={{ease:easeInOut,duration:1}} animate={{opacity:1,x:0}} className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-[40px]">
            Zain General Store App
  <span className="text-muted-foreground block">
    Smart Shopping Made Easy.
  </span>
          </motion.h1>
          <motion.p initial={{opacity:0 , y:200}} transition={{ease:easeInOut,duration:1}} animate={{opacity:1,y:0}} className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
            A simple way to shop for your daily needs.
            Easy ordering, reliable service, and quality products you can trust.        </motion.p>
          <motion.div initial={{opacity:0 , y:200}} transition={{ease:easeInOut,duration:1}} animate={{opacity:1,y:0}} className='flex justify-center flex-col sm:flex-row gap-4  mt-5'>
            <a href="" target="_blank" className='flex transition-all duration-300 group items-center border border-gray-400 p-3 gap-3 rounded-md hover:bg-blue-950 '>
              <FaApple className='text-3xl group-hover:text-white transition-all duration-300' />
              <div>
                <p className='text-gray-800 group-hover:text-white transition-all duration-300  dark:text-gray-400 text-sm md-text-base'>Download on the</p>
                <p className='font-bold group-hover:text-white'>App Store</p>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.zain.generalstore" target="_blank" className='flex transition-all duration-300 group items-center border border-gray-400 p-3 gap-3 rounded-md hover:bg-blue-950 '>
              <FaGooglePlay className='text-3xl group-hover:text-white transition-all duration-300' />
              <div>
                <p className='text-gray-800 group-hover:text-white transition-all duration-300  dark:text-gray-400 text-sm md-text-base'>Download on the</p>
                <p className='font-bold group-hover:text-white'>Google Play</p>
              </div>
            </a>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0 , x:200}} transition={{ease:easeInOut,duration:1, delay:1.3}} animate={{opacity:1,x:0}}>

          <Image src="/Mock-1-.png" alt="Hero" width={280} height={445} />
        </motion.div>
      </div>
    </div>
  );
}
