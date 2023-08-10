'use client'
import {ErrorMessage, Label} from "@/components/atoms";
import {IInput} from "@/interfaces";
import {useFormContext} from "react-hook-form";
import {findInputError} from "@/utils/findInputError";
import {isFormInvalid} from "@/utils/isFormInvalid";
import {AnimatePresence} from "framer-motion";


const InputField = ({label, type, placeholder, validation, multiline, id}: IInput) => {
  const {register, formState} = useFormContext()

  const inputError = findInputError(formState.errors, id)
  const isInvalid = isFormInvalid(inputError)

  // @ts-ignore
  return (
      <div className={'mb-[1.5rem] sm:mb-[2rem] lg:mb-[3rem] flex flex-col w-full'}>
        <div className={'flex justify-between items-center'}>
          <Label label={label}/>
          <AnimatePresence mode="wait" initial={false}>
            {isInvalid && (
                <ErrorMessage
                    // @ts-ignore
                    error={inputError.error.message}
                    // @ts-ignore
                    key={inputError.error.message}
                />
            )}
          </AnimatePresence>
        </div>
        {
          (multiline) ?
              <textarea
                  {...register(id, validation)}
                  className={`px-[1.6rem] py-[1.5rem] font-[400] text-16 placeholder:text-16 outline-none relative rounded bg-gray-400 overflow-hidden  text-ce-secondary-white border-ce-tertiary-white focus:border-ce-primary-white border inline-flex rounded-[5px] h-[12rem]`} placeholder={placeholder}/>
              :
              <input placeholder={placeholder} type={type}
                     className={`px-[.5rem] py-[.5rem] font-[400] text-16 placeholder:text-16 outline-none relative rounded bg-gray-200 overflow-hidden  text-ce-secondary-white border-ce-tertiary-white focus:border-ce-primary-white border inline-flex rounded-[5px]`}
                     {...register(id, validation)}
              />
        }
      </div>
  );
};

export default InputField;
