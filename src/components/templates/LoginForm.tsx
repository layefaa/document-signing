'use client'
import React from 'react';
import {InputField} from "@/components/molecules";
import {email_validation, text_validation} from "@/utils/inputValidation";
import {FormProvider, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const router = useRouter()

    const NavigateTo = () => {
        router.push('/register')
    }


    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-2xl font-bold">Login</h1>
                <FormProvider {...methods}>
                    <form
                        onSubmit={e => e.preventDefault()}
                        noValidate
                    >
                        <InputField label={'email'} id={'email'} name={'email'} placeholder={'e.g johndoe@mail.com'}
                                    type={'email'}
                                    validation={email_validation}/>

                        {/*<InputField label={'password'} id={'password'} name={'password'} placeholder={'e.g ******'}*/}
                        {/*            type={'password'}*/}
                        {/*            validation={text_validation}*/}
                        {/*            />*/}

                        <button
                            type="submit"
                            onClick={onSubmit}
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                        >
                            Login
                        </button>

                    </form>
                </FormProvider>
                <p>
                    New to Us - <span className={'text-blue-500 cursor-pointer font-bold'}
                                      onClick={NavigateTo}>Register</span>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
