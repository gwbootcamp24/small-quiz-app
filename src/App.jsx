import { useState } from 'react'
import { useEffect } from 'react'
import questions  from './questions'
import Quiz from './components/Quiz'
import './App.css'

function App() {



const quizData = {

  "questions": questions.slice(0, -1), //only n Questions (5) 
  "answers": [],
  "userName": "John Doe"

}

  /**
   * Using react hooks, set the default state
   */
  const [state, setState] = useState(quizData);
 
  /**
   * Declare the update state method that will handle the state values
   */
  const updateState = (newState ) => {
    setState({ ...state, ...newState });
  };


// });

  // {
  //   id: '26c4806d-fe05-4344-84ca-3c0092d15477',
  //   question: 'What does CPU stand for?',
  //   correctAnswer: 'Central Processing Unit',
  //   answers: [
  //     'Central Processing Unit',
  //     'Computer Personal Unit',
  //     'Central Process Unit',
  //     'Central Processor Unit',
  //   ],
  // },

  console.log(quizData)

  return (
    <>
    <main>
      <Quiz {...quizData} />
    </main>
    </>
  )
}

export default App
