'use client'
import React, {useState} from 'react';
import {Button} from "@/components/atoms";
import {InputField} from "@/components/molecules";
import {email_validation, password_validation} from "@/utils/inputValidation";
import {FormProvider, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {getUserProfile, loginUser, setAuthToken} from "@/api";
import {IUser} from "@/interfaces";
import toast from "react-hot-toast";
import handleResponse from "@/utils/ServerResponseCode";


const LoginForm = () => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(false)

    const methods = useForm()

    const NavigateTo = (url: string) => {
        router.push(url)
    }

    const userProfile = () => getUserProfile()
        .then((res) => {
            console.log(res)
        }).catch(err => {
            toast.error(handleResponse(err.code).userResponse)
        })


    const onSubmit = methods.handleSubmit(data => {
        setLoading(true)
        loginUser(data as IUser)
            .then(res => {
                toast.success('Successful, Welcome')
                setAuthToken(res.token)
                userProfile().then(() => NavigateTo('/'))
            })
            .catch(err => {
                toast.error(handleResponse(err.code).userResponse)
            })
            .finally(() => setLoading(false))
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
                                    validation={password_validation}
                        />

                        <Button
                            disabled={isLoading}
                            loading={isLoading}
                            handleClick={onSubmit}
                        >
                            Login
                        </Button>

                    </form>
                </FormProvider>
                <p>
                    New to Us - <span className={'text-blue-500 cursor-pointer font-bold'}
                                      onClick={() => NavigateTo('/register')}>Register</span>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
