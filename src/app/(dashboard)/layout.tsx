'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('tk')) {
            router.push('/login')
        }
    }, [])
    return (
        <div>
            <div>

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
