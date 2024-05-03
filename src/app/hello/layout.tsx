import {ReactNode} from "react";

export default function Layout(props:{children:ReactNode}) {
    return (
        <div>
            hello {props.children}
        </div>
    )
}