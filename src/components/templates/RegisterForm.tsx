'use client'
import React, {useState} from 'react';
import {Button} from "@/components/atoms";
import {InputField} from "@/components/molecules";
import {email_validation, password_validation, text_validation} from "@/utils/inputValidation";
import {FormProvider, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {registerUser} from "@/api";
import {IUser} from "@/interfaces";
import toast from "react-hot-toast";


const RegisterForm = () => {
    const [isLoading, setLoading] = useState(false)

    const router = useRouter()

    const NavigateTo = () => {
        router.push('/login')
    }


    const methods = useForm()

    const onSubmit = methods.handleSubmit(data => {
        setLoading(true)
        registerUser(data as IUser)
            .then(() => {
                NavigateTo()
                toast.success('Successful')
            })
            .catch(err => {
                toast.error(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    })
    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-2xl font-bold">Register</h1>
                <p>Fill in your details</p>
                <FormProvider {...methods}>
                    <form
                        onSubmit={e => e.preventDefault()}
                        noValidate
                    >
                        <InputField label={'first name'} id={'first_name'} name={'first_name'} placeholder={'e.g James'}
                                    type={'text'}
                                    validation={text_validation}/>
                        <InputField label={'last name'} id={'last_name'} name={'last_name'} placeholder={'e.g Obahor'}
                                    type={'text'}
                                    validation={text_validation}/>
                        <InputField label={'email'} id={'email'} name={'email'} placeholder={'e.g johndoe@mail.com'}
                                    type={'email'}
                                    validation={email_validation}/>

                        <InputField label={'password'} id={'password'} name={'password'} placeholder={'e.g ******'}
                                    type={'password'}
                                    validation={password_validation}
                        />
                        <InputField label={'confirm  password'} id={'password'} name={'password'}
                                    placeholder={'e.g ******'}
                                    type={'password'}
                                    validation={password_validation}
                        />

                        <Button
                            disabled={isLoading}
                            loading={isLoading}
                            handleClick={onSubmit}
                        >
                            Register
                        </Button>

                    </form>
                </FormProvider>
                <p>
                    Have an Account ? - <span className={'text-blue-500 cursor-pointer font-bold'}
                                              onClick={NavigateTo}>Login</span>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
