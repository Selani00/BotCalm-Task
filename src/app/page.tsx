'use client'
import Image from "next/image";

export default function Home() {
    
    const handleClick = () =>{
      console.log("This is serveraction printed on server console")
    }
  return (
    <div className="grid place-items-center mt-10">
      <button className="bg-[white] text-black p-5" onClick={handleClick}>Do Server Action</button>


      <div className="usersdata">
        
      </div>
    </div>
  );
}