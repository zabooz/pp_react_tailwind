import { Card, Button } from "flowbite-react";
import { useState, useEffect } from "react";

import { useSlideContext } from "../../../contexts/Contexts";
import MindCards from "./MindCards";
import { Question } from "../../../interfaces/interfaces";
import { mindQuestions } from "./questions/questions";
import NotMindCards from "./NotMindCards";

function MindMaestro() {
  const { startAnimation } = useSlideContext();

  const [startQuiz, setStartQuiz] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question>(mindQuestions[index]);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    setQuestion(mindQuestions[index]);
  }, [index]);

  return (
    <Card
      className={`max-w-lg mx-auto border-4 ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      } dark:hover:shadow-2xl transition-shadow duration-1000 `}
      imgAlt="MindMaestro Picture"
      imgSrc="/assets/usernameGenerating/mindMaestro.jpeg"
    >
      <div className="relative">
        <div className="absolute  -top-[185px] flex items-center justify-center w-full">
          <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80   !text-gray-200">
            {!startQuiz ? "Mind Maestro" : question.question}
          </h5>
        </div>
      </div>
      <div className="">
        {startQuiz ? (
          <MindCards
            index={index}
            setIndex={setIndex}
            answers={question!.answers}
            setStartQuiz={setStartQuiz}
            setAnswers={setAnswers}
            userAnswers={answers}
          />
        ) : (
          <NotMindCards values={answers}></NotMindCards>
        )}
      </div>
      <Button
        className="mt-4 bg-[#ea6954]"
        onClick={() => {
          
          setAnswers([]);
          setStartQuiz(true);
        }}
      >
        Start
      </Button>
    </Card>
  );
}

export default MindMaestro;
