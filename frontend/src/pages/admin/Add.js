import React, { useState } from 'react'
import FormComponent from './FormComponent'

export default function Add() {
    const [flag, setFlag] = useState(false);
    const [editdata, setEditData] = useState("")
    const handleSubmit = (e) => {
        setEditData(`Add ${e.target.name}`)
        setFlag(!flag)
    }
    return (
        <div>
            {!flag&&(<div className='grid grid-4' >
                <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    name='Service'
                    onClick={(e) => handleSubmit(e)}>
                    Add Services
                </button>
                <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    name='Industry'
                    onClick={(e) => handleSubmit(e)}>
                    Add Industry
                </button>
            </div>
            )}
            {flag && <FormComponent adddata={editdata} />}
        </div>
    )
}
