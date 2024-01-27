import { components } from '@/utils/reusableData'
import React from 'react'
import Link from 'next/link'

const BottomNav = () => {
    components.splice(2, 1)

  return (
    <div className='fixed md:hidden text-center w-full bottom-0 flex justify-around px-2 py-3 align-middle min-h-[50px] rounded-t-md bg-white dark:bg-gray-900'>
        {components.map(( icon) => (<Link href={icon.href} className='flex-col flex align-middle text-center justify-center items-center hover:-translate-y-1 hover:text-primary'>
            {icon.icon}
            <p className='text-[0.65rem] text-center py-1'>{icon.title}</p>
            </Link>))}
    </div>
  )
}

export default BottomNav
