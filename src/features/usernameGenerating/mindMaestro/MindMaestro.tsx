import { Card, Button } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useSlideContext } from '../../../contexts/Contexts';

import { Questions } from '../../../interfaces/interfaces';
import { mindQuestions } from './questions/questions';

import CardHeader from '../../../components/CardHeader';
import IntroPage from './IntroPage';
import Quiz from './Quiz';
import { FormattedMessage } from 'react-intl';

function MindMaestro() {
    const { startAnimation } = useSlideContext();

    const [startQuiz, setStartQuiz] = useState<boolean>(true);
    const [index, setIndex] = useState<number>(0);
    const [question, setQuestion] = useState<Questions>(mindQuestions[index % mindQuestions.length]);
    const [answers, setAnswers] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>('');

    useEffect(() => {
        setQuestion(mindQuestions[index]);
    }, [index]);

    return (
        <Card
            className={`max-w-lg mx-auto border-4 ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in'
            } dark:hover:shadow-2xl transition-shadow duration-1000 `}
            imgAlt="MindMaestro Picture"
            imgSrc="/assets/usernameGenerating/mindMaestro.webp"
        >
            <CardHeader title={startQuiz ? question?.question : 'Mind Maestro'} top={165} />
            <div className="border h-[300px] grid grid-cols-2 gap-2 p-2 grid-rows-2">
                <IntroPage startQuiz={startQuiz} />
                <Quiz index={index} setAnswer={setAnswer} startQuiz={startQuiz} />
            </div>
            {!startQuiz ? (
                <Button
                    onClick={() => {
                        setStartQuiz(true);
                    }}
                >
                    Start
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        setIndex(index + 1);
                        setAnswers([...answers, answer]);
                        if (answers.length === mindQuestions.length) {
                            setStartQuiz(false);
                            setAnswers([]);
                        }
                    }}
                >
                    <FormattedMessage id="usernameGenerating.mindMaestro.next" defaultMessage="Weiter" />
                </Button>
            )}
        </Card>
    );
}

export default MindMaestro;
