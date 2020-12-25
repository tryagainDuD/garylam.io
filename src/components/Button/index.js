import React from 'react'
import { Btn } from './ButtonElements'

const Button = ({ text, padding }) => {
    return (
        <Btn className="special-btn" padding={ padding }>
            <span />
            <span />
            <span />
            <span />
            { text }
        </Btn>
    )
}

export default Button
