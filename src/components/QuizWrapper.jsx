import { useState, useEffect } from "react";
import Quiz from "./Quiz";

 
const Quizwrapper = (quizDataInit) => {
  const [quizData, setQuizData] = useState([quizDataInit])
  const [startQuizState, setStartQuizState] = useState({startIt: false, numQuestions: 1, categoryId: 9})
  const [quizView, setQuizView] = useState({'selectQuizOptions': true, 'showQuiz': false})
  const [error, setError] = useState([])
 console.log(quizDataInit)
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
      fetch(`https://opentdb.com/api.php?amount=${startQuizState.numQuestions}&category=${startQuizState.categoryId}&type=multiple`)
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
              answers: [...q.incorrect_answers, q.correct_answer].toSorted((a, b) => 0.5 - Math.random())
            }

            return compatibleQ
          })

          setQuizData({...quizDataInit, questions: compatibleQuestions, questionsRemains: startQuizState.numQuestions})
      setQuizView({'selectQuizOptions': false, 'showQuiz': true})

        }
      )
      .catch((error) => setError(error))
    }

  }, [startQuizState]);

  // https://opentdb.com/api.php?amount=10&type=multiple

   
  // const [quizView, setQuizView] = useState({'selectQuizOptions': true, 'showQuiz': false})

  // https://opentdb.com/api_category.php



  return (
  (quizView.selectQuizOptions === true)?  
  <> 
  <select name="quiz_category" onChange={(e) => setStartQuizState({...startQuizState, categoryId: e.target.value})} value={startQuizState.categoryId}>
  {Array.isArray(quizDataInit.quizCategories)&&quizDataInit.quizCategories.map((cat, index) => (
                <> 
                <option value={cat.id} key={index} data-name={cat.name}>{cat.name}</option>
                </>
    ))
  }
  </select>  
  <button onClick={() => setStartQuizState({...startQuizState, startIt: true, numQuestions: 6})}>{"Small Quiz (6 Fragen)"}</button>
  <button onClick={() => setStartQuizState({...startQuizState, startIt: true, numQuestions: 12})}>{"Big Quiz (12 Fragen)"}</button>
  </>
  :
  <> 
  {quizView.showQuiz === true && <Quiz {...quizData} startQuizState={startQuizState} setStartQuizState={setStartQuizState} />}

   
  </>

  )
}

export default Quizwrapper;