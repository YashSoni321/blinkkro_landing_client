"use client"

import { CheckIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // Use next/navigation for App Router
import React from 'react'

const ThankYouModel = ({ onclose }) => {
  const router = useRouter()

  const goToServices = () => {
    router.push('/services')
  }

  const handleModalContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
      onClick={onclose}
    >
      <div
        onClick={handleModalContentClick}
        className='w-150 rounded-lg bg-white p-8 shadow-2xl dark:bg-gray-800'
      >
         <CheckIcon className='text-green-700/80 w-30 h-40 mx-auto mb-10' />

        <h2 className='mt-6 text-4xl font-bold text-gray-900 dark:text-gray-100'>
          Thank You!
        </h2>

        <p className='mt-2 text-base text-gray-600 dark:text-gray-300'>
          We&apos;ve successfully added you to the waitlist for Kart Square. You&apos;ll be among the first to know when we launch! Stay connected with us for updates and sneak peeks
        </p>

        <button
          aria-label='explore-services'
          onClick={goToServices}
          className='mt-6 cursor-pointer rounded-full bg-green-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800'
        >
          Explore Our Services
        </button>

        <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
          Or, return to the{' '}
          <Link
            href='/'
            className='underline text-blue-500 transition-colors hover:text-blue-600'
          >
            Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYouModel