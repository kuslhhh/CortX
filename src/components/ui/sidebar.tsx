import React, { ReactElement } from 'react'

export default function Sidebar({ text, icon }: {
    text: string,
    icon: ReactElement
}) {

    return (
        <div className=' h-screen bg-[#1a1a1a] w-72 fixed rounded-r-[40] border border-y-0 border-r-0 border-l-[#a9a9a9]'>

        </div>
    )
}
