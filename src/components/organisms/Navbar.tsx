import React from 'react';

const Navbar = ({children, classes}: { children: React.ReactNode, classes?: string }) => {
    return (
        <div className={`bg-white fixed left-0 shadow-md ${classes}`}>
            {children}
        </div>
    );
};

export default Navbar;
