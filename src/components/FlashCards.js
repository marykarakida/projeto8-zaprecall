import React from "react";
import Status from "./Status";

const decks = [{
    titulo: "React",
    deck: [
        {
            statement: "O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript"
        },
        {
            statement: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            statement: "Componentes devem iniciar com __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            statement: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            statement: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            statement: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            statement: "Usamos props para __",
            answer: "passar diferentes informações para componentes "
        },
        {
            statement: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    ]
}];

export default function FlashCards() {
    // DEPOIS TROCAR 0 PELA POSIÇÃO DO DECK ESCOLHIDO
    const deckEscolhido = [...decks[0].deck].sort(comparador);

    const [questions, setQuestions] = React.useState(deckEscolhido)

    return (
        <div className="flashcards">
            <ul>
                { questions.map((question, index) => <Flashcard key={index} question={question} index={index} />) }
            </ul>
        </div>
    )
}

function Flashcard(props) {
    const {question, index} = props;
    const {statement, answer} = question;

    return (
        <li className="flashcard question">
            <p className="number">Pergunta {index + 1}</p>
            <Status />
            <p className="statement">{statement}</p>
            <p className="answer">{answer}</p>
            <img className="arrow" src="./assets/images/setinha.png" alt=""></img>
            <div className="buttons">
                <div className="button button--incorrect"><span>Não lembrei</span></div>
                <div className="button button--effortful"><span>Quase não lembrei</span></div>
                <div className="button button--correct"><span>Zap!</span></div>
            </div>
        </li>
    )
}

function comparador() { 
	return Math.random() - 0.5; 
}