import { FormattedMessage} from 'react-intl';
import { mindQuestions } from './questions/questions';


interface Props {
    index: number;
    startQuiz: boolean;
    setAnswer: (value: string) => void;
}

function Quiz({ index, setAnswer, startQuiz }: Props) {


    return index < mindQuestions.length && startQuiz ? (
        mindQuestions[index].answers.map((answer) => (
            <div
                key={answer.answer.id}
                data-arr={answer.dataArr}
                className={`relative  cursor-pointer ${startQuiz ? '' : 'hidden'}   `}
                style={{ backgroundImage: `url(${answer.imagePath})` }}
                onClick={(e) => setAnswer(e.currentTarget.dataset.arr!)}
            >
                <p className="absolute bottom-0 w-full bg-slate-50 text-center">
                    <FormattedMessage {...answer.answer} />
                </p>
            </div>
        ))
    ) : (
        <div>asdfasdfsadcv</div>
    );
}

export default Quiz;
