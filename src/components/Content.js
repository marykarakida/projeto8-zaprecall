import React from "react";
import FlashCards from "./FlashCards";
import Status from "./Status";
import logo from "../assets/images/logo.png";
import partyEmoticon from "../assets/images/party.png";
import sadEmoticon from "../assets/images/sad.png";

export default function Content(props) {
    const {chosenDeck, chosenZapp, setIsMenuVisible} = props;

    const [questions, setQuestions] = React.useState(chosenDeck);
    const [answersStatus, setAnswersStatus] = React.useState([]);

    function addAnswerStatus(status) {
        setAnswersStatus([...answersStatus, status]);
    }

    return (
        <div className="content">
            <header>
                <img className="logo" src={logo} alt="Logo do Zap Recall" />
                <h1>ZapRecall</h1>
            </header>
            <FlashCards questions={questions} setQuestions={setQuestions} addAnswerStatus={addAnswerStatus} />
            <Footer answersStatus={answersStatus} questions={questions} chosenZapp={chosenZapp} setIsMenuVisible={setIsMenuVisible} />
        </div>
    )
}

function Footer(props) {
    const { answersStatus, questions, chosenZapp, setIsMenuVisible } = props;

    const zapCounter = answersStatus.filter(status => status === "correct");

    // MUDAR DEPOIS AKI
    const isResultVisible = answersStatus.length === questions.length;
    const isZapGoalReached = zapCounter.length >= chosenZapp;

    return (
        <footer className={isResultVisible ? "result" : undefined} >
            {isResultVisible &&
                <>
                    <div className="result-tittle">
                        {!isZapGoalReached ? <img src={sadEmoticon} alt=""></img> : <img src={partyEmoticon} alt=""></img>}
                        {!isZapGoalReached ? <h2>Putz...</h2> : <h2>Parabéns!</h2> }
                    </div>
                    
                    {!isZapGoalReached ? <p>Ainda faltam alguns... Mas não desanime!</p> : <p>Você não esqueceu de nenhum flashcard!</p>}
                </>
            }

            <p>{answersStatus.length} / {questions.length} CONCLUÍDOS </p>
            <div className="answers-status">
                {answersStatus.map((status, index) => <Status key={index} status={status} />)}
            </div>
            {isResultVisible && <div onClick={() => setIsMenuVisible(true)} className="button--restart"><span>REINICIAR RECALL</span></div>}
        </footer>
    )
}