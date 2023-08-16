'use client'
import {useEffect} from "react";
import {userStore} from "@/store";
import {useRouter} from "next/navigation";

export default function Home() {
    const {user} = userStore()
    const router = useRouter()
    useEffect(() => {
        if (!localStorage.getItem('token') || !user) {
            router.push('/login')
        } else {
            router.push('/home')
        }
    }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <p>Loading</p>
        </main>
    )
}
