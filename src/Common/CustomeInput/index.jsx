import React from 'react'

export default function CustomeInput({ type, label, onChange, value, name, isRequired, error }) {
    return (
        <div className="form-floating mb-3">
            {isRequired ?
                <input type={type} className={`form-control bg-transparent border-0 rounded-0 custome-input ${error && "error"}`} id="floatingInput"
                    onChange={onChange}
                    value={value}
                    name={name}
                    placeholder={label}
                    required />
                :
                <input type={type} className="form-control bg-transparent border-0 rounded-0 custome-input" id="floatingInput"
                    onChange={onChange}
                    value={value}
                    name={name}
                    placeholder={label} />
            }
            <label htmlFor="floatingInput">{label}</label>
        </div>
    )
}
