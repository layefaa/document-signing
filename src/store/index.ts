import {create} from 'zustand'
import {createJSONStorage, devtools, persist} from 'zustand/middleware'
import {IUserInfo} from "@/interfaces";

type Store = {
    user: IUserInfo
    setUser: (info: IUserInfo) => void
}

// @ts-ignore
export const userStore = create<Store>()(
    devtools(
// @ts-ignore
        persist((set, get) => ({
                    user: null,
                    setUser: (info) => {
                        set({user: info})
                    }
                }
            ),
            {
                name: 'user',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
)