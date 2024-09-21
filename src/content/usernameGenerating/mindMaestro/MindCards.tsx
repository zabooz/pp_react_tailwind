import { mindQuestions } from "./questions/questions";

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
  return (
    <>
      {!true ? (
        <div className=" grid grid-cols-2 gap-4 grid-rows-2 ">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="overflow-hidden w-full h-[170px] relative"
            >
              <img
                src="src/assets/usernameGenerating/mindMaestro/cardDeck.jpeg"
                alt="carddeck"
                className=" mx-auto w-[10rem] object-fit rounded-md border-slate-400 border-4"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-2 gap-4 grid-rows-2">
          {answers.map((answer, i) => (
            <div
              key={i}
              data-type={answer.dataArr}
              className="overflow-hidden w-full h-[170px] relative"
            >
              <div
                data-type={answer.dataArr}
                className={` mx-auto w-full h-full rounded-md dark:border-slate-400 border-4  bg-cover relative`}
                style={{ backgroundImage: `url('${answer.imagePath}')` }}
                onClick={(e) => {
                  if (mindQuestions.length - 1 === index) {
                    const target = e.currentTarget;
                    setAnswers([...userAnswers, target.dataset.type!]);
                    setStartQuiz(false);
                    setIndex(0);
                  } else {
                    const target = e.currentTarget;
                    setAnswers([...userAnswers, target.dataset.type!]);
                    setIndex(index + 1);
                  }
                }}
              >
                <p className="text-center absolute bottom-16 bg-slate-400 font-semibold text-gray-100 bg-opacity-90 w-full ">
                  {answer.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MindCards;
