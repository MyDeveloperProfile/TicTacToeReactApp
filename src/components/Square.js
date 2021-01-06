//created with rfc
//rfc is an ES7 react-function-component and is an easy hotkey to instantly create a functional component whose name mirrors the file name exactly.

import React from 'react'

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
