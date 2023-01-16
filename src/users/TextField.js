import React from 'react'


const TextField = ({
    label,
    inputProps,
    value,
    onchange
}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} onChange={onchange} value={value} />
        </div>
    )
}

export default TextField;