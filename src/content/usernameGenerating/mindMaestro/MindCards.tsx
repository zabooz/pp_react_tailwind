import { mindQuestions } from "./questions/questions";
import "../username.css";
import { useEffect, useState } from "react";
interface Props {
  setIndex: (value: number) => void;
  index: number;
  answers: {
    answer: string;
    dataArr: string;
    imagePath: string;
  }[];
  setStartQuiz: (value: boolean) => void;
  setAnswers: (value: string[]) => void;
  userAnswers: string[];
}

function MindCards({
  setIndex,
  answers,
  index,
  setStartQuiz,
  setAnswers,
  userAnswers,
}: Props) {
  const [cardsChange, setCardsChange] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(false);

  useEffect(() => {
    setCardsChange(true);
    setTimeout(() => {
      setCardsChange(false);
    }, 2000);
    return () => {
      setBackground(false);
      setCardsChange(false);
    };
  }, [answers]);

  return (
    <>
      <div className=" grid grid-cols-2 gap-4 grid-rows-2">
        {answers.map((answer, i) => (
          <div
            key={i}
            data-type={answer.dataArr}
            className=" w-full h-[140px] relative"
          >
            <div
              data-type={answer.dataArr}
              className={` mx-auto w-full h-full rounded-md dark:border-slate-400 border-4  bg-center bg-cover relative ${
                cardsChange ? "cardsAnimation" : ""
              }`}
              onMouseEnter={(e) => {
                const current = e.currentTarget;
                if(!cardsChange){
                  current.children[0].classList.remove("hidden");
                  current.style.backgroundImage = `url('${answer.imagePath}')`;
                }
              }}
              style={{
                backgroundImage: background
                  ? `url('${answer.imagePath}')`
                  : `url('/assets/usernameGenerating/mindMaestro/cardDeck.webp')`,
              }}
              onClick={(e) => {
                const target = e.currentTarget;
                if (mindQuestions.length - 1 === index) {
                  setStartQuiz(false);
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
                setAnswers([...userAnswers, target.dataset.type!]);
                setBackground(true);
              }}
            >
              <p
                className={`text-center absolute bottom-2 bg-slate-400 font-semibold text-gray-100 bg-opacity-90 w-full ${
                  !background ? "hidden" : ""
                }`}
              >
                {answer.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MindCards;
