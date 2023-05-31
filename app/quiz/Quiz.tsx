"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
//components
import Button from "@/components/Button/Button";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
//types
import { QuestionsState } from "@/types/quiz";

type QuizProps = {
    questions: QuestionsState;
    totalQuestions: number;
};

const Quiz = ({ questions, totalQuestions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  //alternative to Record type: <{ [id: number]: string}> 
  //console.log(questions); 

  //to see if the user answered correct or not: from the userAnswers and the current
  //QuestionIndex; if we have that one in this userAnwers object, we know that question
  //is answered and then it'll be true; otherwise false
  const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;

  //we want to push the user back to the home page, when it is finished
  const router = useRouter();

  const handleOnAnswerClick = (answer: string, currentQuestionIndex: number) => {
    //if user has already answered, do nothing:
    if(isQuestionAnswered) return;

    //otherwise check answer against correct answer:
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;

    //add score if answer is correct:
    if(isCorrect) setScore(prev => prev + 1);

    //save the answer in the object for user answers:
    setUserAnswers(prev => ({...prev, [currentQuestionIndex]: answer}));
  };

  //step can either be going back, so it'll be -1; or going forward, so it'll be +1
  //but we should also restrain it
  const handleChangeQuestion = (step: number) => {
    const newQuestionIndex = currentQuestionIndex + step;

    if(newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;
    //otherwise
    setCurrentQuestionIndex(newQuestionIndex)
  };
  
  return (
    <div className="text-white text-center">
     <p className='p-8 font-bold text-[20px]'>Score: {score}</p>
     <p className='text-[#9F50AC] font-bold pb-2 text-[14px]'>
       Question {currentQuestionIndex + 1} out of {totalQuestions}
     </p>
     <QuestionCard 
        currentQuestionIndex={currentQuestionIndex} 
        question={questions[currentQuestionIndex].question} 
        answers={questions[currentQuestionIndex].answers} 
        userAnswer={userAnswers[currentQuestionIndex]} 
        correctAnswer={questions[currentQuestionIndex].correct_answer} 
        onClick={handleOnAnswerClick} 
     />
     <div className="flex justify-between mt-16">
      <Button text="Prev" onClick={() => handleChangeQuestion(-1)} />
      <Button 
        text={currentQuestionIndex === totalQuestions - 1 ? "End": "Next"}
        onClick={currentQuestionIndex === totalQuestions - 1 ? () => router.push("/") : () => handleChangeQuestion(1)}
      />
     </div>
    </div>
  )
};

export default Quiz;




/* Record<Keys, Type>
Constructs an object type whose property keys are Keys and whose property values
are Type. This utility can be used to map the properties of a type to another type. */