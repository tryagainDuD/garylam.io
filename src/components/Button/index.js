import React from 'react'
import { Btn } from './ButtonElements'

const Button = ({ id, text, padding }) => {
    return (
        <Btn id={ id } className="special-btn" padding={ padding } >
            <span />
            <span />
            <span />
            <span />
            { text }
        </Btn>
    )
}

export default Button
