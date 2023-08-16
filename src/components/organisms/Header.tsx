import React, {useState} from 'react';
import {ProfilePic} from "@/components/atoms";
import {DropDownMenu} from "@/components/molecules";

const Header = (
    {name, initials, classes}: { name: string, initials: string, classes: string }) => {

    const [showMenu, setMenu] = useState(false)

    return (
        <div
            className={`fixed z-10 top-0  bg-white w-full shadow-md px-[30px] flex justify-between items-center ${classes}`}>
            <div>
                <p className={'font-bold text-lg'}>Company Logo</p>
            </div>
            <div className={'flex justify-end items-center'}>
                <p className={'font-bold pr-[15px]'}>
                    {name}
                </p>
                <div onClick={() => setMenu(!showMenu)}>
                    <ProfilePic>{initials}</ProfilePic>
                </div>

                <div
                    className={`${(!showMenu) ? 'hidden' : 'flex'} mt-[90px] gap-y-2 p-5  flex-col items-center top-0 absolute min-w-[150px] h-fit w-fit bg-white rounded shadow-md`}>
                    <DropDownMenu/>
                </div>
            </div>

        </div>
    );
};

export default Header;
