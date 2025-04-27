
"use client";
import Image from 'next/image'
import { signOut } from "next-auth/react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const DropButton = () => {
    const handleSignOut = async () => {
        await signOut({callbackUrl: "/sign-in"});
    };
    const menuOptions = [
        { label: 'Account Settings', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'License', href: '#' },
    ]
    return (
        <Menu as="div" className="relative inline-block text-left h-[50px]">
            <MenuButton className="w-[50px] h-[50px] rounded-[50px] cursor-pointer bg-white overflow-hidden border-2 border-white">
                <Image src="./img/users/user.svg" width={50} height={50} alt="user" className='hover:opacity-90'/>
            </MenuButton>
        
            <MenuItems transition
            className="absolute right-0 z-10 mt-1 min-w-56 w-auto max-w-full origin-top-right rounded-[26px] bg-white shadow-lg data-[state=closed]:scale-95 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100 transition-transform focus-visible:outline-0"
            >
            <div className="p-2">
                {menuOptions.map((item) => (
                    <MenuItem key={item.label}>
                        <a href={item.href}
                        className="block px-4 py-2 rounded-[20px] text-sm font-semibold text-[#0C0D11] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 focus:outline-none focus-visible:outline-0"
                        >
                        {item.label}
                        </a>
                    </MenuItem>
                ))}
                <MenuItem>
                    <button onClick={handleSignOut}
                    className="block w-full px-4 py-2 rounded-[20px] text-left text-sm font-semibold text-red-800 bg-red-100 data-[focus]:bg-red-300 data-[focus]:text-[#0C0D11] focus:outline-none cursor-pointer"
                    >
                    Sign out
                    </button>
                </MenuItem>
            </div>
            </MenuItems>
        </Menu>
    )
}

export default DropButton