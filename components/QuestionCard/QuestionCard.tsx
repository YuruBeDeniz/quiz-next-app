//helpers
import { getBGColor } from "./helpers";

type QuestionCardProps = {
    currentQuestionIndex: number;
    question: string;
    answers: Array<string>; /* string[] */
    userAnswer: string | undefined;
    correctAnswer: string;
    onClick: (answer: string, currentQuestionIndex: number) => void
};

const QuestionCard = ({ currentQuestionIndex, question, answers, userAnswer, correctAnswer, onClick}: QuestionCardProps ) => {

  return (  
    <div>
      <p className="text-[20px] max-w-[400px]" dangerouslySetInnerHTML={{__html: question}}></p>
      <div  className="flex flex-col items-center pt-8">
         {answers.map(answer => (
           <div 
             key={answer} 
             className={`${getBGColor(userAnswer, correctAnswer, answer)}
             cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[10px]`} 
             onClick={() => onClick(answer, currentQuestionIndex)}
           >
            <span className="truncate text-black" dangerouslySetInnerHTML={{ __html: answer }} />
           </div>
         ))}
      </div>  
    </div>
  )
};

export default QuestionCard;