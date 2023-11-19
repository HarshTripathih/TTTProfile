import React from 'react'
import Image from 'next/image'

const navigation = [
  { name: 'Courses', href: '#', current: true },
  { name: 'Home', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto max-w-full px-2 sm:px-6 lg:px-8 bg-neutral-900'>
      <div className='mt-1'>
        <Image
          src='/ttticon.png'
          alt='loading error'
          width='100'
          height='100'
        />
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-yellow-400 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-4 py-3 text-1xl font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      

    </div>
  )
}
{/* <ul className='flex flex-1 text-black items-center space-x-5 px-1'>
          <li><button className='bg-amber-400 px-2 py-1 text-2xl font-semibold rounded-lg'>Home</button></li>
          <li><button className='bg-amber-400 px-2 py-1 text-2xl font-semibold rounded-lg'>Courses</button></li>
        </ul> */}
export default Navbar