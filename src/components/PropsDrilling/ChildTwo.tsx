import React, { useState } from 'react'
import ChildOne from './ChildOne'

export default function ChildTwo(props: any) {

    console.log('props come from child one compo ', props);

    const { data: { name, phoneNo }, childdata: { Address, Country } } = props

    return (
        <>
            <div>
                <h4>I am Child two component</h4>
                <table className='table' border={1}>
                    <tr >
                        <th>Name</th>
                        <th>PhoneNO</th>
                        <th>Address</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{phoneNo}</td>
                        <td>{Address}</td>
                        <td>{Country}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
