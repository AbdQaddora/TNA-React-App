import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function UploadFile({ accept, onChange, name, error }) {
    return (
        <>
            <input type="file" id='file-upload' accept={accept} onChange={onChange} className="file-upload" name={name} />
            <label htmlFor="file-upload" className={`file-upload-label mr-3 fs-1 ${error && 'bg-danger'} rounded-3 d-flex p-1 mt-3 text-white`}><AiOutlinePlus /></label>
        </>
    )
}
