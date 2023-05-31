export const getBGColor = (userAnswer: string | undefined, correctAnswer: string, answer: string): string => {
    const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;
  
    if ((isAnswerCorrect === true && answer === userAnswer) || (isAnswerCorrect === false && answer === correctAnswer))
      return 'bg-[#55AC78] text-white';
  
    if (isAnswerCorrect === false && answer === userAnswer) return 'bg-[#AC5050] text-white';
  
    return 'bg-white text-[#9F50AC]';
  };


/* const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;
1. check if there is userAnswer: userAnswer ?
if it exists:
2. here userAnswer === correctAnswer --> this tells us if it's true or false;
3. otherwise: it'll be undefined (if the user answer doesnt exist) as it can be
undefined also that' why we have: userAnswer: string | undefined,
 */