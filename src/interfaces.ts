export interface IInput {
    label: string
    type?: string
    validation?: object
    placeholder?: string
    name: string
    multiline?: boolean
    id: string

}



//api
export interface IUser {
    first_name?: string,
    last_name?: string,
    role?: string,
    email: string,
    password?: string
}


interface IProfileUser {
    access_locker_documents: boolean;
    address: string | null;
    avatar: string | null;
    bvn: string | null;
    city: string | null;
    country: string | null;
    created_at: string;
    dob: string | null;
    drivers_license_no: string | null;
    email: string;
    first_name: string;
    gender: string | null;
    id: string;
    identity_number: string | null;
    identity_type: string | null;
    image: string;
    initials: string;
    ip_address: string;
    is_business: boolean;
    is_complete: string | boolean;
    is_online: boolean;
    last_name: string;
    national_verification: boolean;
    nin: string | null;
    permissions: string[] | [];
    phone: string | null;
    role: string[] | [];
    state: string | null;
    system_verification: boolean;
    updated_at: string;
}

export type IUserInfo = IProfileUser | null

//api