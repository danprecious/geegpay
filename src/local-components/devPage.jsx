import Link from 'next/link'
import React from 'react'

const DevPage = () => {
  return (
    <div className='text-center min-h-[95vh] flex flex-col justify-center align-middle'>
        <h1 className='text-secondary font-extrabold text-xl my-2'>This page is still under development</h1>
        <p><Link href="/" className='text-sm'/>Go back to dashboard home</p>
    </div>
  )
}

export default DevPage