import React, { useRef } from 'react';

const FileInputField = ({ label, accept, max, handleChange }: {
    accept: string[],
    max: number,
    label: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleContainerClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <div onClick={handleContainerClick} className={'bg-amber-50 border border-dashed w-full cursor-pointer flex items-center justify-center h-[200px]'}>
                {label}
            </div>
            <input
                max={max}
                ref={fileInputRef}
                className={'invisible'}
                type="file"
                accept={accept.join(',')}
                onChange={handleChange}
            />
        </>
    );
};

export default FileInputField;
