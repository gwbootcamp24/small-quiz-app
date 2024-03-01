import { useState } from "react";
import { useEffect } from "react";


export default function Quiz (quizData) {

  //  console.log(quizData) 

  /**
   * Using react hooks, set the default state
   */
  const [state, setState] = useState(quizData);
  const [question, setQuestion] = useState(quizData.questions[0])
  const [showReplay, setShowReplay] = useState(false)
 
  /**
   * Declare the update state method that will handle the state values
   */
  // const updateState = (newState ) => {
  //   setState({ ...state, ...newState });
  // };

//   const quizData = {

//     "questions": questions.slice(0, -1), //only n Questions (5) 
//     "answers": [],
//     "userName": "John Doe"
 //  questionsRemains: questions.slice(0, -1).length
        
//   }

 
// case "nextList": {
//   let thisId = action.allLists.findIndex((list) => list.id === action.currentList.id)
//   return(action.allLists[(thisId + 1) % action.allLists.length])
// } 

// case "lastList": {
//   let thisId = action.allLists.findIndex((list) => list.id === action.currentList.id)
//   return(action.allLists[(thisId + action.allLists.length - 1) % action.allLists.length ])
// } 

// useEffect(() => {
//   if (state.questionsRemains < 2) {
//     setState({...state, showResult: true})
//   }
// }, [state]);

// useEffect(() => {
//   setQuestion
// }, []);

useEffect(() => {
  if (state.questionsRemains < 1) {
    const timeout = setTimeout(() => setShowReplay(true), 3000);
    return () =>{
      clearInterval(timeout)
    }    
  } 

}, [state.questionsRemains])
  
    const setAnswer = (trueOrFalse ) => {
        const updatedAnswers = state.answers.concat([trueOrFalse])

        setState( {...state, answers:  updatedAnswers, questionsRemains: state.questionsRemains - 1} );
        const thisId = state.questions.findIndex((q) => q.id === question.id)
        const nextId = (thisId + 1) % state.questions.length
        setQuestion( state.questions[nextId] );
   
    };

  
    const handleAnswer = (e) => {
      if (e.target.dataset.answer === question.correctAnswer) {
          setAnswer(true)
      } else {
          setAnswer(false)
      }
  
    }

    const restartQuiz = (e) => {
      setState(quizData);
    } 

    console.log("question",question) 
    console.log("state.questionsRemains",state.questionsRemains) 

    const {startQuizState, setStartQuizState} = quizData

    return((state.questionsRemains > 0)?(
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
      :(<><div className="finish">Du hattest {state.answers.reduce((acc, a) => acc += (a === true) && 1)} Antworten richtig
      <br/><br/>

      {/* {showReplay === true && <button onClick={() => setStartQuizState({...startQuizState, startIt: false, numQuestions: 2, categoryId: 9})}>Nochmal spielen?</button>} */}
      {showReplay === true && <button onClick={restartQuiz}>Nochmal spielen?</button>}

      </div>
      </>
      )

    )
    
}