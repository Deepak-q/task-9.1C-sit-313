import React from 'react'
import './CSS/App.css'

const Input = (props) => {
    return <div>
        <input className='field' name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    </div>

}
export default Input