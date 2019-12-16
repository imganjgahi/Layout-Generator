import * as React from 'react';

interface IProps {
    onSelectLayout: (layout: string) => void
}


export const Navbar = (props: IProps) => {
    const onChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
            props.onSelectLayout(e.currentTarget.value)
    }

    return (
        <div className="navbar">
            <h1 className="title">Layout Generator</h1>
            <select className="dropDown"
                onChange={onChangeHandler}>
                <option value=""> Choose a Layout </option>
                <option value="XL"> XL </option>
                <option value="2XL"> 2XL </option>
                <option value="4L">4L </option>
                <option value="XL/2L">XL / 2L </option>
                <option value="XL/L/2SM"> XL / L / 2SM </option>
            </select>
        </div>
    )
}