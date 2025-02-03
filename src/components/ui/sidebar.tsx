import React, { ReactElement } from 'react'
import SideBarItem from './SidebarItem'
import XIcon from '../icons/XIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import SpotifyIcon from '../icons/SpotifyIcon'

export default function Sidebar() {

    return (
        <div className=' h-screen bg-[#1a1a1a] w-56 fixed rounded-r-[40] border border-y-0 border-l-0 border-r-[#a9a9a9]'>
            <div className='pt-20 p-7'>
                <SideBarItem icon={<XIcon />} text='Tweets' />
                <SideBarItem icon={<YouTubeIcon />} text='YouTube' />
                <SideBarItem icon={<SpotifyIcon />} text='Spotify' />
            </div>
        </div>
    )
}
