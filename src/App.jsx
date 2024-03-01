import questions  from './questions'
import { useState, useEffect } from "react";
import QuizWrapper from './components/QuizWrapper'
import './App.css'
import Wave from '../assets/wave.svg'
import Earth from '../assets/earth.svg'

function App() {


const [quizCategories, setQuizCategories] = useState( false )

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

// async function fetchData() {
//   try {
//       const res = await fetch(
//           'https://openlibrary.org/works/OL4580W.json'
//       );
//       if (!res.ok) throw new Error('Request failed');
//       const data = await res.json();
//       setBook(data);
//   } catch (error) {
//       setError(error);
//   }
// }
// fetchData();


 
  useEffect(() => {
    const getCategories = (async () => {
      try{
        const res = await fetch ('https://opentdb.com/api_category.php')
        console.log("fäädsch")
        if(!res.ok) throw new Error('Request Categories failed');
        const data = await res.json();
        data.trivia_categories.map((c)=>c)
        setQuizCategories(data.trivia_categories.map((c)=>c))
        console.log("quizCategories",quizCategories)
      } catch(error) {
        console.log(error)
      }
    })();
  

  }, [])
 
 
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
      <h1>My Fancy Quiz App</h1>
      <img src={Wave} alt="" srcset="" />
    <div className="main">
      <QuizWrapper {...QUIZ_DATA_START_VALUE} quizCategories={quizCategories} />
    </div>
    <img src={Earth} alt="" srcset="" />

    </main>
    </>
  )
}

export default App
