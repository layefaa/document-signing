'use client'
import {m} from 'framer-motion'
import {framerError} from "@/utils/motion";
import {MdError} from 'react-icons/md'

const ErrorMessage = ({error}: { error: string }) => {
  return (
      <m.span
          {...framerError}
          className="flex items-center text-[1.2rem]  gap-1 px-2 pb-3 font-semibold text-red-500 filter rounded-md">
        <MdError/>

        {error}
      </m.span>
  );
};

export default ErrorMessage;
