import { ReactNode } from "react"

export interface IUser {
    name: string,
    email: string,
}

export const Home = ( {name, email} : IUser, )  => {
    return (
        <>
            <h1>{name}</h1>
            <h1>{email}</h1>
        </>
    )
}