import * as React from "react";
import { Navbar } from "./Navbar/Navbar";
import Container from "./Container/Container";



export const App = () => {
    const [currentLayout, setCurrentLayout] = React.useState("")

    return (
        <React.Fragment>
            <Navbar onSelectLayout={(layout: string) => setCurrentLayout(layout)} />
            <Container currentLayout={currentLayout} />
        </React.Fragment>
    )
};