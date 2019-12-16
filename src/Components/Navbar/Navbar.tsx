import * as React from 'react';

interface IProps {

}


export const Navbar = (props: IProps) => {

    return (
        <div className="navbar">
            <h1 className="title">Layout Generator</h1>
            <select className="dropDown" onChange={(e) => {
                console.log(e.target.value)
            }}>
                <option value="XL"> XL </option>
                <option value="L"> L </option>
                <option value="SM"> SM </option>
            </select>
        </div>
    )
}