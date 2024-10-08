import { mindQuestions } from "./questions/questions";

interface Props {
  index: number;
  startQuiz: boolean;
  setAnswer: (value: string) => void;
}

function Quiz({ index, setAnswer, startQuiz }: Props) {
  console.log(index, mindQuestions.length);
  return index < mindQuestions.length && startQuiz ? (
    mindQuestions[index].answers.map((answer, i) => (
      <div
        key={i}
        data-arr={answer.dataArr}
        className={`relative  cursor-pointer ${startQuiz ? "" : "hidden"}   `}
        style={{ backgroundImage: `url(${answer.imagePath})` }}
        onClick={(e) => setAnswer(e.currentTarget.dataset.arr!)}
      >
        <p className="absolute bottom-0 w-full bg-slate-50 text-center">
          {answer.answer}
        </p>
      </div>
    ))
  ) : (
    <div>asdfasdfsadcv</div>
  );
}

export default Quiz;
