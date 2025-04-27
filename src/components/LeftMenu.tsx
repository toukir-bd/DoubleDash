'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const LeftMenu = () => {
  const pathname = usePathname()
  const links = [
    { href: '/account', icon: '/img/icons/sec-1.svg' },
    { href: '/insights', icon: '/img/icons/sec-2.svg' },
    { href: '/actions', icon: '/img/icons/sec-3.svg' },
    { href: '/bookings', icon: '/img/icons/sec-4.svg' },
    { href: '/wallets', icon: '/img/icons/sec-5.svg' },
    { href: '/files', icon: '/img/icons/sec-6.svg' },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-auto h-auto bg-[#0C0D11]/[.07] rounded-[70px] p-[10px]">
      {links.map((link) => (
        <Link key={link.href} href={link.href}
          className={`flex items-center justify-center h-[50px] w-[50px] rounded-full transition-colors
            ${pathname === link.href
              ? 'bg-[#0C0D11] text-white hover:bg-[#0C0D11]/[.85]'
              : 'bg-[#0C0D11]/[.1] hover:bg-[#0C0D11]/[0.15]'} `}>
          <Image
            src={link.icon}
            alt="icon"
            width={24}
            height={24}
            className="w-[24px] h-[24px] object-contain"
          />
        </Link>
      ))}
    </div>
  )
}

export default LeftMenu
