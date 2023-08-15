import React from 'react';

const ProfilePic = ({children, classes}: { children: React.ReactNode, classes?: string }) => {
    return (
        <div
            className={`cursor-pointer h-[35px] w-[35px] rounded-full flex justify-center items-center bg-amber-200 ${classes}`}>
            {children}
        </div>
    );
};

export default ProfilePic;
