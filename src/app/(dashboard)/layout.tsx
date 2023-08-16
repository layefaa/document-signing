'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {userStore} from "@/store";
import {Header, Navbar} from "@/components/organisms";
import {NavItems} from "@/constants";
import {NavLink} from "@/components/atoms";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
    const {user} = userStore()
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token') || !user) {
            router.push('/login')
        }
    }, [user, router])


    return (
        <div className={'relative bg-gray-200'}>
            <Header classes={'h-[80px]'}
                    name={(user !== null) ? `${user.first_name} ${user.last_name}` : "user"}
                    initials={(user !== null) ? `${user.initials}` : "u"}/>
            <div className={' relative'}>
                <Navbar classes={'flex flex-col w-[200px] pt-[100px] h-[100%] py-[20px]'}>
                    {
                        NavItems.map((link, index) => {
                            return (
                                <NavLink key={index} url={link.url} name={link.name}/>
                            )
                        })
                    }
                </Navbar>
                <div className={'ml-[200px] min-h-screen pt-[100px] p-5 h-full'}>
                    {children}
                </div>
            </div>

        </div>
    )
}
