import React from "react";
import Status from "./Status";

export default function FlashCards(props) {
    const { questions, setQuestions } = props;

    const [visibleFlashcardIndex, setVisibleFlashcardIndex] = React.useState()

    function showStatement(index) {
        if (index === visibleFlashcardIndex) {
            return;
        }
        const newQuestions = [...questions];

        if (visibleFlashcardIndex !== undefined) {
            const visibleFlashcard = newQuestions[visibleFlashcardIndex];
            visibleFlashcard.isStatementVisible = false;
        }

        const question = newQuestions[index];
        question.isStatementVisible = true;

        setVisibleFlashcardIndex(index)
        setQuestions(newQuestions)
    }

    function showAnswer(event, index) {
        const newQuestions = [...questions];
        const question = newQuestions[index];
        question.isStatementVisible = false;
        question.isAnswerVisible = true;

        setQuestions(newQuestions)

        event.stopPropagation();
    }

    function updateStatus(event, index, status) {
        const newQuestions = [...questions];
        const question = newQuestions[index];
        question.isAnswerVisible = false;
        question.status = status;

        setQuestions(newQuestions)

        event.stopPropagation();
    }

    return (
        <div className="flashcards">
            <ul>
                {questions.map((question, index) => <Flashcard key={index} question={question} index={index} showStatement={showStatement} showAnswer={showAnswer} updateStatus={updateStatus} />)}
            </ul>
        </div>
    )
}

function Flashcard(props) {
    const { question, index, showStatement, showAnswer, updateStatus } = props;
    const { statement, answer, isStatementVisible, isAnswerVisible, status } = question;

    // DA PARA PEGAR O STATUS E MONTAR UM SWITCH OU CRIAR UMA CLASS NAME COM O NOME DO STATUS E SO ADICIONAR NO CLASSNAME DA DIV OU DO P

    return (
        <li onClick={status ? null : () => showStatement(index)} className={`flashcard ${(isStatementVisible || isAnswerVisible) && "flashcard--open"}`}>

            {!isStatementVisible && !isAnswerVisible &&
                <div className="question">
                    <p className={status} >Pergunta {index + 1}</p>
                    {status ? <Status status={status} /> : <ion-icon name="play-outline"></ion-icon> }
                </div>
            }

            {isStatementVisible &&
                <div className="statement">
                    <p>{statement}</p>
                    <img onClick={(event) => showAnswer(event, index)} className="arrow" src="./assets/images/setinha.png" alt=""></img>
                </div>
            }

            {isAnswerVisible &&
                <div className="answer">
                    <p>{answer}</p>
                    <div className="buttons">
                        <div onClick={(event) => updateStatus(event, index, "incorrect")} className="button button--incorrect"><span>Não lembrei</span></div>
                        <div onClick={(event) => updateStatus(event, index, "effortful")} className="button button--effortful"><span>Quase não lembrei</span></div>
                        <div onClick={(event) => updateStatus(event, index, "correct")} className="button button--correct"><span>Zap!</span></div>
                    </div>
                </div>
            }
        </li>
    )
}
