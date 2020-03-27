export default ({ name, href }) => {

    return (
        <a className={`button`} href={`${href}`}>
            {name}
        </a>
    )
}
