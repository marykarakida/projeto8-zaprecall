import React from "react";
import FlashCards from "./FlashCards";
import Status from "./Status";

export default function Content(props) {
    const {chosenDeck, toggleMenu} = props;
    // DEPOIS TROCAR 0 PELA POSIÇÃO DO DECK ESCOLHIDO
    // const deckEscolhido = [...decks[0].deck].sort(() => Math.random() - 0.5);

    const [questions, setQuestions] = React.useState(chosenDeck);
    const [answersStatus, setAnswersStatus] = React.useState([]);
    const [hasIncorrect, setHasIncorrect] = React.useState(false);

    function addAnswerStatus(status) {
        setAnswersStatus([...answersStatus, status]);
    }
    function answeredIncorrectly() {
        setHasIncorrect(true);
    }

    return (
        <div className="content">
            <header>
                <img className="logo" src="./assets/images/logo.png" alt="Logo do Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <FlashCards questions={questions} setQuestions={setQuestions} addAnswerStatus={addAnswerStatus} answeredIncorrectly={answeredIncorrectly} />
            <Footer answersStatus={answersStatus} hasIncorrect={hasIncorrect} questions={questions} toggleMenu={toggleMenu} />
        </div>
    )
}

function Footer(props) {
    const { answersStatus, questions, hasIncorrect, toggleMenu } = props;
    const isResultVisible = answersStatus.length === questions.length;

    return (
        <footer className={isResultVisible ? "result" : undefined} >
            {isResultVisible &&
                <>
                    <div className="result-tittle">
                        {hasIncorrect ? <img src="./assets/images/sad.png" alt=""></img> : <img src="./assets/images/party.png" alt=""></img>}
                        {hasIncorrect ? <h2>Putz...</h2> : <h2>Parabéns!</h2> }
                    </div>
                    {hasIncorrect ? <p>Ainda faltam alguns... Mas não desanime!</p> : <p>Você não esqueceu de nenhum flashcard!</p>}
                </>
            }

            <p>{answersStatus.length} / {questions.length} CONCLUÍDOS </p>
            <div className="answers-status">
                {answersStatus.map((status, index) => <Status key={index} status={status} />)}
            </div>
            {true && <div onClick={toggleMenu} className="button--restart"><span>REINICIAR RECALL</span></div>}
        </footer>
    )
}
