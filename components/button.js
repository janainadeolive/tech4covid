export default ({ name, href, modifiers }) => {

    return (
        <a className={`button ${modifiers}`} href={`${href}`}>
            {name}
        </a>
    )
}
