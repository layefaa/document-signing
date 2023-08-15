import React from 'react';
import {ProfilePic} from "@/components/atoms";
import {DropDownMenu} from "@/components/molecules";

const Header = ({name, initials}: { name: string, initials: string }) => {
    return (
        <div
            className={'fixed top-0 h-[60] lg:h-[80px] bg-white w-full shadow-md px-[40px] flex justify-end items-center'}>
            <p className={'font-bold pr-[15px]'}>
                {name}
                {/*{(user !== null) ? user.id : null}*/}
            </p>
            <ProfilePic>{initials}</ProfilePic>
            <div className={'mt-[90px] gap-y-2 p-5 flex flex-col items-center top-0 absolute min-w-[150px] h-fit w-fit bg-white rounded shadow-md'}>
                <DropDownMenu/>
            </div>
        </div>
    );
};

export default Header;
