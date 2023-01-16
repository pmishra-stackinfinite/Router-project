import React, { Children } from 'react'

const button = ({ onClick, button }) => {
    return (
        <div onClick={Children}>{button}</div>
    )
}

export default button