import { useState } from "react";
import { useEffect } from "react";


export default function Quiz ({ questions, answers, userName }) {

    console.log( questions, answers, userName);



  /**
   * Using react hooks, set the default state
   */
  const [state, setState] = useState(questions);
  const [question, setQuestion] = useState(questions[0])
 
  /**
   * Declare the update state method that will handle the state values
   */
  const updateState = (newState ) => {
    setState({ ...state, ...newState });
  };


//   const quizData = {

//     "questions": questions.slice(0, -1), //only n Questions (5) 
//     "answers": [],
//     "userName": "John Doe"
        
  
//   }
    const setAnswer = (trueOrFalse ) => {
        const updatedAnswers = answers.concat[trueOrFalse]
        setState( {...state, answers: updatedAnswers } );

        setQuestion( questions[1] );
        console.log(state)
        console.log(question)
    };
    const initialQuestion = questions[0];
  
    const handleAnswer = (e) => {
        console.log (e.target.dataset.answer)
        if (e.target.dataset.answer === question.correctAnswer) {
            setAnswer(true)
        } else {
            setAnswer(false)
        }
    
    }


    return(
        <div className="quiz">

        
        <div className="frage">
          <p>{question.question}</p>
        </div>
        <div className="Antworten">
          <ul>
            {
              question.answers.map((answer, index) => (
                <li onClick={handleAnswer} key={index} data-answer={answer} >{answer}</li>


              ))
            }
          </ul>
        </div>
      </div>

    )
}