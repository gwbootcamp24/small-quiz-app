import questions  from './questions'
import QuizWrapper from './components/QuizWrapper'
import './App.css'

function App() {


const QUIZ_DATA_START_VALUE = {

  "questions": [],  
  "answers": [], 
  "userName": "John Doe",
  questionsRemains:  0 ,
  showResult: false

  // "questions": questions.slice(0), //only n Questions (5) 
  // "answers": [], 
  // "userName": "John Doe",
  // questionsRemains: questions.slice(0).length,
  // showResult: false



}
 

  /**
   * Using react hooks, set the default state
   */
  // const [state, setState] = useState(quizData);
 
  /**
   * Declare the update state method that will handle the state values
   */
  // const updateState = (newState ) => {
  //   setState({ ...state, ...newState });
  // };


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


  return (
    <>
    <main>
      <QuizWrapper {...QUIZ_DATA_START_VALUE} />
    </main>
    </>
  )
}

export default App
