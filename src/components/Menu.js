import React from "react";
import logo from "../assets/images/logo.png"

export default function Menu(props) {
    const { decks, prepareDeck, setChosenZap, setIsMenuVisible } = props;

    const [isDeckSelectionVisible, setIsDeckSelectionVisible] = React.useState(true);
    const [isZapSelectionVisible, setIsZapSelectionVisible] = React.useState(false);
    const [isReady, setIsReady] = React.useState(false);
    const [maxQuestions, setMaxQuestions] = React.useState(0)

    function chooseDeck(event) {
        const index = event.target.value;

        setIsDeckSelectionVisible(false);
        setIsZapSelectionVisible(true);
        setMaxQuestions(decks[index].deck.length);

        prepareDeck(index);
    }

    function chooseZap(event) {
        const zap = event.target.value;

        setChosenZap(zap)
        setIsReady(true)
    }

    return (
        <div className="menu">
            <img className="logo" src={logo} alt="Logo do Zap Recall" />
            <h1>ZapRecall</h1>

            {isDeckSelectionVisible &&
                <select onChange={chooseDeck} name="cars">
                    <option value="">Escolha seu deck</option>
                    { decks.map((deck, index) => <option key={index} value={index}>{deck.title}</option>) }
                </select>
            }

            {isZapSelectionVisible &&
                <input onChange={chooseZap} type="number" placeholder="Digite sua meta de zaps..." min={1} max={maxQuestions}></input>
            }

            <div onClick={() => isReady ? setIsMenuVisible(false) : null} className={`button--begin ${!isReady && "button--not-ready"}`}><span>Iniciar Recall</span></div>
        </div>
    )
}