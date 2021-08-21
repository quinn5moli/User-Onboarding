import React from 'react';
import '../App.css'


export default function userDisplay(props) {

    const {values} = props;

    return (
        <div className='Display'>
            <h4>{values.username}</h4>
            <p>{values.email}</p>
        </div>
    )
}