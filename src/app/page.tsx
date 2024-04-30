'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [userList, setUserList] = useState([]);

    const fetchDate = async () =>{
      const userslist= await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await userslist.json();
      setUserList(data);
    }

   

    const handleClick = () =>{
      console.log("This is serveraction printed on server console")
    }
  return (
    <div className="grid place-items-center mt-10">
      <button className="bg-[white] text-black p-5" onClick={handleClick}>Do Server Action</button>

      <button className="mt-10 bg-[white] text-black p-5" onClick={fetchDate}>Get users data</button>


      <table className="mt-10 border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-800 py-1 px-3">ID</th>
            <th className="border border-gray-800 py-1 px-3">Name</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-800 py-1 px-3"><Link href={`posts/${user.id}`}>{user.id}</Link></td>
              <td className="border border-gray-800 py-1 px-3">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}