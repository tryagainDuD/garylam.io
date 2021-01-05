import React from 'react'
import { Btn } from './ButtonElements'

const Button = ({ id, text, padding, href, target, to, smooth, duration, spy, offset }) => {
    return (
        <Btn id={ id } className="special-btn" padding={ padding } href={ href } target={ target }
             offset={ offset } to={ to } smooth={ smooth } duration={ duration } spy={ spy }>
            <span />
            <span />
            <span />
            <span />
            { text }
        </Btn>
    )
}

export default Button
