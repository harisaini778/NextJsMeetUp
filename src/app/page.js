import React from 'react';
import "./styles/styles.css"
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav className='flex flex-col lg:flex-row items-center bg-orange-600 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6 mb-2 lg:mb-0'>
          <span className='font-semibold text-xl tracking-wider'>
            NextJsMeetUps
          </span>
        </div>
        <div className='w-full flex lg:flex-row lg:items-center lg:w-auto lg:justify-end sm:justify-center'>
          <div className='lg:mr-2 lg:mb-0'>
            <div className="bg-orange-700 rounded-lg inline-block p-2 hover:bg-orange-800 mr-2 ">
              <Link href="/all-meetups" className='text-orange-100 hover:text-white'>
                Show All Meetups
              </Link>
            </div>
          </div>
          <div>
            <div className='bg-orange-700 rounded-lg hover:bg-orange-800 p-2 '>
              <Link href="/add-meetups" className='text-orange-100 hover:text-white'>
                Add a new meetup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
