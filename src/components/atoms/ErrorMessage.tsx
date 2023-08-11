'use client'
import {m} from 'framer-motion'
import {framerError} from "@/utils/motion";
import {MdError} from 'react-icons/md'

const ErrorMessage = ({error}: { error: string }) => {
    return (
        <m.span
            {...framerError}
            className="flex items-center text-[.8rem]  gap-1 px-2 pb-2 font-semibold text-red-500 filter rounded-md">
            <MdError/>
            {error}



        </m.span>
    );
};

export default ErrorMessage;
