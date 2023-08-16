'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from 'next/navigation';


const NavLinks = ({url, name}: { url: string, name: string, icon?: React.ReactNode }) => {
    const currentRoute = usePathname();

    return (

        <Link
            passHref
            className={` leading-[165%] p-5 py-3 rounded-lg hover:bg-amber-50  ${currentRoute === url ? "shadow bg-amber-100 border border-gray-200" : "bg-transparent"}`}
            href={url}>

            {name}
        </Link>
    );
};

export default NavLinks;
