import "./button.scss"

function Button({text, id, className, onClick}) {
    return <button className={`button ${className}`} id={id} onClick={onClick}>{text}</button>
}

export default Button;
