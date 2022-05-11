import React from "react"
import FlashCards from "./FlashCards"
import Status from "./Status"

const decks = [{
    titulo: "React",
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
}];

export default function Content() {
    // DEPOIS TROCAR 0 PELA POSIÇÃO DO DECK ESCOLHIDO
    const deckEscolhido = [...decks[0].deck].sort(() => Math.random() - 0.5);

    const [questions, setQuestions] = React.useState(deckEscolhido);
    // CONTADOR DE PERGUNTAS CONCLUIDAS
    // VARIAVEL BOOLEANA QUE INDIA SE NO MINIMO UMA RESPOSTA FOI CONCLUIDA

    return (
        <div className="content">
            <header>
                <img className="logo" src="./assets/images/logo.png" alt="Logo do Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <FlashCards questions={questions} setQuestions={setQuestions} />
            <Footer />
        </div>
    )
}

function Footer() {
    return (
        <footer></footer>
    )
}
