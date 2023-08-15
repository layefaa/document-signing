'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {userStore} from "@/store";
import {Header} from "@/components/organisms";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    const {user} = userStore()
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token') || !user) {
            router.push('/login')
        }else {
            router.push('/home')
        }
    }, [])


    return (
        <div className={'relative bg-gray-200'}>
            <Header name={(user !== null) ? `${user.first_name} ${user.last_name}` : "user"}
                    initials={(user !== null) ? `${user.initials}` : "u"}/>
            <div>
                <div></div>
                <div>
                    {children}
                </div>
            </div>

        </div>
    )
}
