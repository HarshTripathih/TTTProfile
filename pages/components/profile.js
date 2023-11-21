import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from './header'
import { useRouter } from 'next/router';
import Head from 'next/head';





const Profile = () => {
  const router = useRouter();
  const { name, followers, following, pic, id } = router.query;

  const [articles,setArticles] = useState([]);
  // console.log(id)

  const getPosts = async () =>{
    const response = await fetch("https://ttt-profiles.onrender.com/users");
    const data = await response.json();
    setArticles(data[0].posts);
  }
  
  useEffect(()=>{
    getPosts();
  },[id])

  return (
    <div className='bg-white'>
      <Header />
      <div className='md:h-60 sm:h-36 xs:h-36 bg-white' >
        <Image src="/coverpage.jpg" width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} alt='coverpage'
        />
      </div>
      <div className='xs:w-full xs:px-10 xs:h-8 xs:bg-white sm:w-full sm:flex sm:justify-center sm:h-16 sm:bg-white md:w-full md:flex md:justify-center md:h-20'>
        <Image className='xs:-mt-8 xs:border xs:border-2 xs:rounded-full xs:w-24 xs:h-24 md:-mt-24  md:border md:border-2 md:rounded-full md:w-44 md:h-44 sm:-mt-10 sm:border sm:border-2 sm:rounded-full sm:w-28 sm:h-28' src={pic} width={0} height={0} sizes='100vw' alt='coverpage' />
      </div>
      <div className='mx-auto w-full h-48'>
        <div className='mx-auto w-full bg-white text-black text-2xl font-bold tracking-tighter font-mono text-center'><h1 className='xs:ml-16'>{name}</h1></div>
        <div className='mx-auto w-full flex justify-center items-center bg-white'>
          <div className='w-20 p-1 border-2 border-slate-300 rounded-lg text-slate-400 text-2xl font-bold tracking-tighter font-serif text-center xs:ml-16'><h1>{followers}</h1></div>&nbsp;&nbsp;
          <div className='w-20 p-1 border-2 border-slate-300 rounded-lg text-slate-400 text-2xl font-bold tracking-tighter font-serif text-center'><h1>{following}</h1></div>
        </div>
        <div className='mx-auto w-full flex justify-center items-center bg-white'>
          <div className='w-20 text-lg tracking-tighter font-thin text-slate-400 text-center xs:ml-16'><span className="inline-block align-top">Followers</span></div>&nbsp;&nbsp;
          <div className='w-20 text-lg tracking-tighter font-thin text-slate-400 text-center'><span className="inline-block align-top">Following</span></div>
        </div>
        <div className='mx-auto p-0 w-full text-2xl font-sans text-black text-center flex justify-center items-center bg-white'>
          <p className='xs:text-base'>Co-founder & CEO at Terribly Tiny Tales</p>
        </div>
        <div className='mx-auto p-0 w-full text-xl font-sans text-blue-500 text-center flex justify-center items-center bg-white'>
          <a className='xs:text-base' href='#'>http://www.instagram.com/anujgosalia</a>
        </div>
        <div className='mx-auto w-full flex justify-center items-center bg-white'>
          <div className='p-1 bg-blue-500 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xs:w-3 xs:h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>&nbsp;&nbsp;&nbsp;
          <h3 className='text-black font-serif'>125</h3>&nbsp;&nbsp;&nbsp;
          <div className='p-1 bg-yellow-400 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xs:w-3 xs:h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
          </div>&nbsp;&nbsp;&nbsp;
          <h3 className='text-black font-serif'>125</h3>&nbsp;&nbsp;&nbsp;
          <div className='p-1 bg-gray-400 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xs:w-3 xs:h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>&nbsp;&nbsp;&nbsp;
          <h3 className='text-black font-serif'>125</h3>&nbsp;&nbsp;&nbsp;
          <div className='p-1 bg-pink-700 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xs:w-3 xs:h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>&nbsp;&nbsp;&nbsp;
          <h3 className='text-black font-serif'>125</h3>&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <div className='p-2 flex xs:flex-wrap grid md:grid-cols-3 sm:grid-cols-2 gap-3 bg-white'>
        {
          articles && articles.map((post,index) => (
            <div key={index} class="flex bg-white border-2 shadow-lg rounded-lg mx-4 md:mx-4 my-11 max-w-md md:max-w-2xl ">
              <div class="flex items-start px-4 py-6">
                <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                <div class="">
                  <div class="flex items-center justify-between">
                    <h2 class="text-lg font-semibold text-gray-900 -mt-1">{post.title}</h2>
                    <small class="text-sm text-gray-700">{post.time}</small>
                  </div>
                  <p class="text-gray-700">{post.publishdate} </p>
                  <p class="mt-3 text-gray-700 text-sm">
                    {post.description}
                  </p>
                  <div class="mt-4 flex items-center">
                    <div class="flex mr-2 text-gray-700 text-sm mr-3">
                      <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>12</span>
                    </div>
                    <div class="flex mr-2 text-gray-700 text-sm mr-8">
                      <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>8</span>
                    </div>
                    <div class="flex mr-2 text-gray-700 text-sm mr-4">
                      <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <span>share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile