import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

import QuestionList from '../../Quiz';
// import Timers from "../Timer/Timer";
import './Main.css'

const Main = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const handleCorrectAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);
  };

  const handleNextQuestion = () => {
    setClicked(false);
    if (currentQuestion < QuestionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowScore(true);
    }
  }
  return (

    <div>
      
        {showScore ? (
          <div>
            <div>
              <h1 className="completed">Completed</h1>
              <h2 className="score-section">Your Score :{score}/{QuestionList.length}</h2>
            </div>
          </div>
        ) : (
      
      
      <div className="container">
            {/* <Timers /> */}
        <div className="Question">
          <p>Question {currentQuestion + 1} of {QuestionList.length}</p>

          <h3>{QuestionList[currentQuestion].question}</h3>


        </div>

        <div className="options">
          {QuestionList[currentQuestion].answersList.map((answerOption) => (

            
           <div className="answer-list" key={uuidv4()}>
              <button className={`answerbutton ${clicked && answerOption.isCorrect ? "correct" : ""}`}
                onClick={() => handleCorrectAnswer(answerOption.isCorrect)}
              >
                <h3 className="option">{answerOption.answer}
                </h3>

                </button>
           </div>
          
          ))}


        </div>
        <div>
        <button className="next-button" onClick={handleNextQuestion}>Next</button>
            </div>
      </div>

        )}
      </div>
      )
}

      export default Main;
