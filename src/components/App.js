import React from "react"
import Menu from "./Menu";
import Content from "./Content";

export default function App() {
    const [isStarted, setIsStarted] = React.useState(false);

    function startRecall() {
        setIsStarted(true);
    }

    return (
        <>
            { !isStarted ? <Menu startRecall={startRecall} /> : <Content /> }
        </>
    )
}