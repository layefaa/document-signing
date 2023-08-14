import React from "react";

const Button = ({loading, disabled, children, handleClick}: {
    loading: boolean,
    disabled: boolean,
    children: React.ReactNode,
    handleClick: () => void
}) => {


    return (
        <button
            className={`w-full ${(loading) ? 'opacity-50' : 'opacity-100'} bg-blue-500 text-white py-2 rounded-md`}
            disabled={disabled || loading}
            onClick={handleClick}
            type="button"
        >
            {loading ? <span>Loading</span> : children}
        </button>
    );
};


export default Button

