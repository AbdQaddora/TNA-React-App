import React from 'react'

export default function BtnBlack({ children, onClick }) {
    return (
        <button className='btn my-btn-2 text-white rounded-pill fs-5 mt-3' onClick={onClick ? onClick : () => { }} >
            {children}
        </button>
    )
}
