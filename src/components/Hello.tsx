import React from 'react'

export default (props: {name: string}) => {
    return (
        <div id="hello">Hello {props.name}</div>
    )
}