import React, { ReactElement } from 'react'

interface ButtonProps {
    varient: "primary" | "secondary";
    text: string;
    startIcon: ReactElement
}

const varientClasses = {
    "primary": "bg-[#a9a9a9] text-[#1a1a1a]  border border-y-0 border-l-0 border-r-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#a9a9a9] hover:border-r-[#a9a9a9] cursor-pointer ",
    "secondary": "bg-[#1a1a1a] text-[#a9a9a9]  border border-y-0 border-l-0 border-r-[#a9a9a9] hover:bg-[#a9a9a9] hover:text-[#1a1a1a] hover:border-r-[#1a1a1a] cursor-pointer "
}

const defaultStyles = "px-4 font-medium py-2 rounded-l-lg flex items-center"


export default function Button({ varient, text, startIcon }: ButtonProps) {
    return (
        <div className={varientClasses[varient] + "" + defaultStyles}>
            <div className='pr-2 '>
                {startIcon}
            </div>
            {text}
        </div>
    )
}
