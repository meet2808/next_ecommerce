'use client'
import { BiShow, BiSolidHide } from "react-icons/bi";
import { useState, useEffect } from "react";

const Input = ({ type, name, label, errors, required, value, placeholder, hasError, fullWidth = false }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
        if (type === "password" && showPassword)
            setInputType("text")

        if (type === "password" && !showPassword)
            setInputType("password")
    }, [type, showPassword])

    return (
        <>
            {
                !fullWidth ? (
                    <div className="flex flex-col my-3 relative">
                        <label className="text-[15px]">{label}</label>

                        <input type={inputType} placeholder={placeholder} name={name} value={value} className="outline-0 ease-in-out dealy-10 border border-neutral-300 h-10 pl-3 focus:border-neutral-400 placeholder:text-neutral-400" />
                        {type === "password" && (
                            <button className="absolute right-3 top-8" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BiShow /> : <BiSolidHide />}
                            </button>
                        )}

                        {hasError && <small className="text-red-600">{errors}</small>}
                    </div>
                ) : (
                    <div className="flex flex-col my-3 relative">
                        <label className="text-[15px]">{label}</label>

                        <textarea name={name} placeholder={placeholder} value={value} className="outline-0 ease-in-out dealy-10 border border-neutral-300 h-20 pl-3 pt-3 focus:border-neutral-400 placeholder:text-neutral-400" rows={10} ></textarea>

                        {hasError && <small className="text-red-600">{errors}</small>}
                    </div>
                )
            }

        </>
    )
}

export default Input;