function InputWrapper({value, className, id, type, placeholder, label, onChange}) {
    return(
        <div className={className}>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                />
        </div>
    )
}

export default InputWrapper;
