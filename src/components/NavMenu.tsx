
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FilledButton } from './ui/FilledButton'
import DropButton from './DropButton'

const NavMenu = () => {
    const pathname = usePathname()
    const links = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/summary', label: 'Summary' },
        { href: '/account', label: 'Account Info' },
        { href: '/finance', label: 'Finance' },
        { href: '/project', label: 'Project' },
        { href: '/growth', label: 'Growth' },
        { href: '/contacts', label: 'Contacts' },
    ]

    return (
        <div className='fixed top-0 left-0 right-0 pt-[15px] w-full bg-linear-90 from-[#FCDFA0] to-[#ABC2FD] z-10 px-5'>
            <div className='w-full max-w-[1600px] mx-auto'>
                <div className='flex items-center justify-between w-full h-[70px] bg-white/[.3] rounded-[70px] px-[15px] shadow-md'>
                    <Link href="/dashboard" className='w-auto h-[35px] ms-[10px]'>
                        <Image className='w-auto h-[36px]' src='/img/logo.svg' width={180} height={45} alt='logo' priority/>
                    </Link>
                    <div className='flex items-center justify-center space-x-1'>
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} 
                            className={`flex items-center justify-center h-[38px] w-auto px-[25px] rounded-[46px] text-[16px] font-semibold transition-all 
                                ${pathname === link.href
                                    ? 'bg-[#0C0D11] text-white hover:bg-[#0C0D11]/[.85]'
                                    : 'bg-transparent text-[#0C0D11]/[.75] hover:bg-[#fff]/[0.45]'} `}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex items-center justify-center space-x-1 w-auto'>
                        <FilledButton>
                            <Image src='./img/icons/message.svg' width={20} height={20} alt='icons'/>
                            <span className='absolute right-[10px] top-[10px] w-[12px] h-[12px] rounded-[12px] border-3 border-white bg-[#FC352A] shadow-md'></span>
                        </FilledButton>
                        <FilledButton>
                            <Image src='./img/icons/notification.svg' width={20} height={20} alt='icons'/>
                            <span className='absolute right-[10px] top-[10px] w-[12px] h-[12px] rounded-[12px] border-3 border-white bg-[#FC352A] shadow-md'></span>
                        </FilledButton>
                        <DropButton></DropButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu