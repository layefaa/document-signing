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

//api