export default function Page(props:{params:{name:string}}) {
    return (
        <div>{props.params.name}</div>
    )
}