//utils
import { shuffleArray } from "@/utils/arrayUtils";
//components
import Quiz from "./Quiz";
//types
import { Difficulty, QuestionsState, Question } from "@/types/quiz";

const TOTAL_QUESTIONS = 10;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    //we have 2 awaits here; first for fetching, second for converting the data to json
    const data = await (await fetch(endpoint, { cache: "no-store" })).json();
    /* const data: { results: Array<Question> }  */


    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}

//we create a seperate component that we make a client component (Quiz component)
//and we fetch the data before (here in this server component); this is what we can
// fetch the data server-side
const Home = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

  return (
    <Quiz questions={questions} totalQuestions={TOTAL_QUESTIONS} />
  )
};

export default Home;