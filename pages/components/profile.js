import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div>
      <div className='md:h-60 sm:h-36 xs:h-28 bg-white' >
        <Image src="/coverpage.jpg" width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }} alt='coverpage'
        />
      </div>
      <div className='xs:w-full xs:px-10 xs:h-32 xs:bg-white sm:w-full sm:flex sm:justify-center sm:h-40 sm:bg-white md:w-full md:flex md:justify-center md:items-center md:h-60'>
        <Image className='xs:-mt-8 xs:border xs:border-2 xs:rounded-full xs:w-20 xs:h-20 md:-mt-48 md:border md:border-2 md:rounded-full md:w-52 md:h-52 sm:-mt-10 sm:border sm:border-2 sm:rounded-full sm:w-28 sm:h-28' src='/userimg.jpeg' width={0} height={0} sizes='100vw' alt='coverpage' />

      </div>

    </div>
  )
}

export default Profile