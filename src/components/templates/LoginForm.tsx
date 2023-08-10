'use client'
import React, {useState} from 'react';
import {InputField} from "@/components/molecules";
import {email_validation} from "@/utils/inputValidation";
import {FieldValues, FormProvider, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
// import {useRouter} from 'next/router'

const LoginForm = () => {
    const router = useRouter()

    const [isLoading, setLoading] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [isError, setError] = useState(false)

    const NavigateTo = () => {
        router.push('/register')
    }
    // const sendMail = async (data: FieldValues) => {
    //     const res = await fetch('/api/mail',
    //         {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(data)
    //         })
    //     console.log(res.status)
    //     return res;
    // }


    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        setLoading(true)
        // sendMail(data)
        //     .then(
        //         (res) => {
        //             if (res.status === 200) {
        //                 setSuccess(true)
        //             }
        //             if (res.status === 500) {
        //                 setError(true)
        //             }
        //         })
        //     .finally(() => {
        //         setTimeout(() => {
        //             setLoading(false)
        //             setSuccess(false)
        //             setError(false)
        //             methods.reset()
        //         }, 1000)
        //     })
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
                        <InputField label={'password'} id={'password'} name={'password'} placeholder={'e.g ******'}
                                    type={'password'}
                                    validation={email_validation}/>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                        >
                            Login
                        </button>

                    </form>
                </FormProvider>
                <p>
                    New to Us - <span className={'text-blue-500 cursor-pointer font-bold'} onClick={NavigateTo}>Register</span>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
