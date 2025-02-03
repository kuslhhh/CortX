import React, { ReactElement } from 'react'

export default function SideBarItem({ text, icon }: {
    text: string;
    icon: ReactElement;
}) {
    return (
        <div className='flex items-center'>
            <div className='p-2'>
                {icon}
            </div>
            <div className='text-[#a9a9a9]'>
                {text}
            </div>
        </div>
    )
}
