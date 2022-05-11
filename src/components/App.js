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

// QUANDO FAZER O BONUS DE ESCOLHER O DECK, MANDAR OBJETO DO DECK PARA CA OU CRIAR UM ARRAY SEPARADO QUE TEM OS NOMES DE TODOS OS DECKS DISPONIVEIS?