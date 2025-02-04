import PlusIcon from '@/components/icons/plusIcon'
import Button from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function SignUp() {
    return (
        <div className={`min-h-screen transition-colors duration-300 text-white bg-black " 
        }`}>
            <div className="pt-16">
                <div className="flex flex-col items-center justify-center pt-28">
                    <Input  />
                    <Input  />
                </div>
            </div>
        </div>
    )
}
