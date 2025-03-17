'use client';
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // State Variables
  const [expand, setExpand] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  return (
    <div>
      <div className="flex h-screen">
        {/*-- sidebar -- */}
        <div> 
          <div> 
            <Image clasName="rotate-180" src={assets.menu_icon} alt =""/>
            <Image clasName="opacity-70" src={assets.chat_icon} alt =""/>

          </div>
        </div>
      </div>
    </div>
  );
}
