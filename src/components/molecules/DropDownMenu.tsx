import React from 'react';
import {userStore} from "@/store";
import {ProfilePic} from "@/components/atoms";
import {logoutUser} from "@/api";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const DropDownMenu = () => {
    const router = useRouter()
    const {user, setUser} = userStore()
    const logout = () => {
        logoutUser()
            .then(() => {
                toast.success('Successful')
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
            })
            .finally(() => {
                setUser(null)
                router.push('/login')
                localStorage.removeItem('token')

            })

    }
    return (
        <>
            <ProfilePic classes={"w-[80px] h-[80px]"}>{(user !== null) ? `${user.initials}` : "u"}</ProfilePic>
            <p className={'font-bold text-center'}>
                {(user !== null) ? `${user.first_name} ${user.last_name}` : "user"}
            </p>
            <p className={'font-thin text-center'}>
                {(user !== null) ? user.email : "mail"}
            </p>
            <div className={'border-t mt-2 mb-3 border-gray-300 w-full'}/>
            <div>
                <p className={'cursor-pointer'} onClick={logout}>Logout</p>
            </div>
        </>
    );
};

export default DropDownMenu;
