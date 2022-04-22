import { ReactNode } from "react"

type Photo = {
    legend : string,
    children : ReactNode
}
export const Photo = ( { legend, children }: Photo ) => {
    return (
        <>
           {children}
            <p>{legend}</p>
        </>
    )
}