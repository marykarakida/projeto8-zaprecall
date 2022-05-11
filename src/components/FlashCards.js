import React from "react";
import Status from "./Status";

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

export default function FlashCards() {
    // DEPOIS TROCAR 0 PELA POSIÇÃO DO DECK ESCOLHIDO
    const deckEscolhido = [...decks[0].deck].sort(() => Math.random() - 0.5);

    const [questions, setQuestions] = React.useState(deckEscolhido)

    return (
        <div className="flashcards">
            <ul>
                {questions.map((question, index) => <Flashcard key={index} question={question} index={index} />)}
            </ul>
        </div>
    )
}

function Flashcard(props) {
    const { question, index } = props;
    const { statement, answer, isStatementVisible, isAnswerVisible, status } = question;

    return (
        <li className={`flashcard ${(isStatementVisible || isAnswerVisible) && "flashcard--open"}`}>
            {!isStatementVisible && !isAnswerVisible && <Question index={index} status={status} />}

            {isStatementVisible && <Statement statement={statement} />}

            {isAnswerVisible && <Answer answer={answer} />}
        </li>
    )
}

function Question(props) {
    const {index, status} = props;

    return (
        <div className="question">
            <p>Pergunta {index + 1}</p>
            <Status status={status} />
        </div>
    )
}

function Statement(props) {
    const {statement} = props;

    return (
        <div className="statement">
            <p>{statement}</p>
            <img className="arrow" src="./assets/images/setinha.png" alt=""></img>
        </div>
    )
}

function Answer(props) {
    const {answer} = props;

    return (
        <div className="answer">
            <p>{answer}</p>
            <div className="buttons">
                <div className="button button--incorrect"><span>Não lembrei</span></div>
                <div className="button button--effortful"><span>Quase não lembrei</span></div>
                <div className="button button--correct"><span>Zap!</span></div>
            </div>
        </div>
    )
}
