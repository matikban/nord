import "./logo.scss"

function Logo({redirect, title, src}) {
    return(
        <a href={redirect} title={title} target="_self">
            <img src={src} alt={title} />
        </a>
    )
}

export default Logo;
