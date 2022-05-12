import React from "react"
import Menu from "./Menu";
import Content from "./Content";

const decks = [{
    title: "React",
    deck: [
        {
            statement: "O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "Componentes devem iniciar com __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "Usamos props para __",
            answer: "passar diferentes informações para componentes ",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        }
    ]
}, {
    title: "Baboseira",
    deck: [
        {
            statement: "O que é JSX?",
            answer: "uma extensão de linguagem do JavaScript",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        },
        {
            statement: "Componentes devem iniciar com __",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            isStatementVisible: false,
            isAnswerVisible: false,
            status: ""
        }
    ]
}];

export default function App() {
    const [isMenuVisiblie, setIsMenuVisible] = React.useState(true);
    const [chosenDeck, setChosenDeck] = React.useState({})

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisiblie);
    }

    function prepareDeck(index) {
        const questions = decks[index].deck;
        let newQuestions = questions.map(question => {return {...question}});
        newQuestions = newQuestions.sort(() => Math.random() - 0.5);
        setChosenDeck(newQuestions)
    }

    return (
        <>
            { isMenuVisiblie ? <Menu decks={decks} prepareDeck={prepareDeck} toggleMenu={toggleMenu} /> : <Content chosenDeck={chosenDeck} toggleMenu={toggleMenu} /> }
        </>
    )
}

// QUANDO FAZER O BONUS DE ESCOLHER O DECK, MANDAR OBJETO DO DECK PARA CA OU CRIAR UM ARRAY SEPARADO QUE TEM OS NOMES DE TODOS OS DECKS DISPONIVEIS?