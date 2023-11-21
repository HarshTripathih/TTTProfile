import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from './header';
import Profile from './profile';
import Link from 'next/link';

const HomeSection = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    setUsers(data);
    // console.log(data[0].posts)
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <Header />
      <div className=' max-auto p-8 bg-slate-50'>

        <div className='xs:flex xs:flex-wrap sm:flex sm:flex-wrap grid grid-cols-5 gap-10'>

          {
            users && users.map((value) => (
              <div key={value.id} class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
                <div class="relative">
                  <Image class="w-full h-48 object-cover" src={value.avatar_url} alt="Profile Image" sizes='100vw' width={0} height={0} />
                </div>
                <div class="px-6 py-4">
                  <div class="text-xl font-semibold text-gray-800">{value.name}</div>
                  <p class="text-gray-600">{value.bio}</p>
                </div>
                <div class="px-6 py-4">
                  <span class="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Web</span>
                  <span class="inline-block px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">UI/UX</span>
                  <span class="inline-block px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">Design</span>
                </div>
                <div class="px-6 py-4">
                  <a href={`/components/profile?name=${value.name}&followers=${value.followers}&following=${value.following}&pic=${value.avatar_url}&id=${value.id}`} class="text-blue-500 hover:underline">View Profile</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default HomeSection