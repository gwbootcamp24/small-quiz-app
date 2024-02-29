import { useState, useEffect } from "react";
import Quiz from "./Quiz";

 
const Quizwrapper = (quizDataInit) => {
 
  const [quizData, setQuizData] = useState([quizDataInit])
  const [startQuizState, setStartQuizState] = useState({startIt: false, numQuestions: 1})
  const [startQuizGo, setStartQuizGo] = useState([false])
  const [error, setError] = useState([])
 
  const testquestion = {
    "response_code": 0,
    "results": [
      {
        "type": "multiple",
        "difficulty": "medium",
        "category": "Sports",
        "question": "Who is Manchester United&#039;s top premier league goal scorer?",
        "correct_answer": "Wayne Rooney",
        "incorrect_answers": [
          "Sir Bobby Charlton",
          "Ryan Giggs",
          "David Beckham"
        ]
      }
    ]
  }
  
  const testquestion2 = {
    id: 'cd647d49-62e0-4ff9-8b4d-71e0b4099767',
    question: 'The following Spanish provinces are located in the northern area of Spain except:',
    correctAnswer: 'Murcia',
    answers: ['León', 'Asturias', 'Navarre', 'Murcia'],
  }

//  Ship it
// useEffect(() => {

//   const getUsers = async () => {


//     try {
//       const res = await fetch(`https://opentdb.com/api.php?amount=${startQuizState.numQuestions}&type=multiple`);
//       if (!res.ok) throw new Error('Request failed');
//       const data = await res.json();
//       const questions = data.results
//       const compatibleQuestions = questions.map((q)=>{
//         const compatibleQ = 
//         {
//           id: crypto.randomUUID(),
//           question: q.question,
//           correctAnswer: q.correct_answer,
//           answers: [...q.incorrect_answers, q.correct_answer]
//         }
  
//         return compatibleQ
//       })
//       setQuizData({...quizDataInit, questions: compatibleQuestions, questionsRemains: startQuizState.numQuestions})
//       } catch (error) {
//         setError(error);
//       }

//     };

//     getUsers(); // run it, run it

//   return () => {
//     // this now gets called when the component unmounts
//   };
// }, [startQuizState]);


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


  useEffect(() =>{

    if ( startQuizState.startIt === true) {
      console.log ('FÄÄÄDSCH!')
      fetch(`https://opentdb.com/api.php?amount=${startQuizState.numQuestions}&type=multiple`)
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json();
      })
      .then(
        (data) => {
          const questions = data.results
          const compatibleQuestions = questions.map((q)=>{
            const compatibleQ = 
            {
              id: crypto.randomUUID(),
              question: q.question,
              correctAnswer: q.correct_answer,
              answers: [...q.incorrect_answers, q.correct_answer]
            }

            return compatibleQ
          })

          setQuizData({...quizDataInit, questions: compatibleQuestions, questionsRemains: startQuizState.numQuestions})
      setStartQuizGo(true)

        }
      )
      .catch((error) => setError(error))
    }

  }, [startQuizState]);

  // https://opentdb.com/api.php?amount=10&type=multiple

   



  
  return (
  <>
  <button onClick={() => setStartQuizState({startIt: true, numQuestions: 6})}>{"Start Quiz small"}</button>  
  <button onClick={() => setStartQuizState({startIt: true, numQuestions: 12})}>{"Start Quiz Big"}</button>  
  {startQuizGo === true && <Quiz {...quizData} />}
  </>
  )
}

export default Quizwrapper;