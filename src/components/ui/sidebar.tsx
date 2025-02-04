import SideBarItem from './SidebarItem'
import XIcon from '../icons/XIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import SpotifyIcon from '../icons/SpotifyIcon'
import LogoIcon from '../icons/logoIcon'
import InstaIcon from '../icons/InstaIcon'

export default function Sidebar() {

    return (
        <div className=' h-screen bg-[#1a1a1a] w-56 fixed rounded-r-[40] border border-y-0 border-l-0 border-r-[#a9a9a9]'>

            {/* <Image alt='Cortex' src="/cortex-logo.png" width={300} height={300} /> */}
            <div className='-m-4 '>
                <LogoIcon />
            </div>

            <div className='pt-5 p-7'>
                <SideBarItem icon={<XIcon />} text='Tweets' />
                <SideBarItem icon={<YouTubeIcon />} text='YouTube' />
                <SideBarItem icon={<SpotifyIcon />} text='Spotify' />
                <SideBarItem icon={<InstaIcon />} text='Instagram' />
            </div>
        </div>
    )
}
