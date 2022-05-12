import React from "react";

export default function Menu(props) {
    const { decks, prepareDeck, toggleMenu } = props;
    
    const [isReady, setIsReady] = React.useState(false)

    function chooseDeck(event) {
        const index = event.target.value;

        if (index !== "") {
            setIsReady(true);
        } else {
            setIsReady(false);
            return;
        }

        prepareDeck(index)
    }

    return (
        <div className="menu">
            <img className="logo" src="./assets/images/logo.png" alt="Logo do Zap Recall" />
            <h1>ZapRecall</h1>
            <select onChange={chooseDeck} name="cars">
                <option value="">Escolha seu deck</option>
                { decks.map((deck, index) => <option key={index} value={index}>{deck.title}</option> ) }
            </select>
            <div onClick={isReady ? toggleMenu : null } className={`button--begin ${!isReady && "button--not-ready"}`}><span>Iniciar Recall</span></div>
        </div>
    )
}