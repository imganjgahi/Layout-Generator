import * as React from 'react';

interface IProps {
    onSelectLayout: (layout: string) => void
}


export const Navbar = (props: IProps) => {
    const onChangeHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        if(e.currentTarget.value !==""){
            props.onSelectLayout(e.currentTarget.value)
        }
    }

    return (
        <div className="navbar">
            <h1 className="title">Layout Generator</h1>
            <select className="dropDown"
                onChange={onChangeHandler}>
                <option value=""> Choose a Layout </option>
                <option value="XL"> XL </option>
                <option value="L"> L </option>
                <option value="SM"> SM </option>
            </select>
        </div>
    )
}