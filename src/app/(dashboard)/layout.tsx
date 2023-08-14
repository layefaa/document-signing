'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {userStore} from "@/store";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    const {user} = userStore()
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token') && !user) {
            router.push('/login')
        }
    }, [])


    return (
        <div className={'relative bg-gray-200'}>
            <div className={'fixed top-0 h-[50] lg:h-[80px] bg-white w-full shadow-md'}>
                <p>
                    {(user !== null) ? user.id : null}
                </p>

            </div>
            <div>
                <div></div>
                <div>
                    {children}
                </div>
            </div>

        </div>
    )
}
