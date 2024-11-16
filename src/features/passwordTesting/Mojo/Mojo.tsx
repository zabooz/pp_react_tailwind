import { lazy, useEffect, useState } from 'react';
const TextCanvas = lazy(() => import('../../../components/TextCanvas'));
const ResultsModal = lazy(() => import('./mojoModal/ResultsModal'));
import MojoControll from './MojoControl';
import MojoTextContent from './MojoTextContent';
import MojoAllResultsLink from './MojoAllResultsLink';
import MojoExtendetButton from './mojoExtendet/MojoExtendetButton';
import MojoTable from './MojoTable';
import { Card } from 'flowbite-react';
import CardHeader from '../../../components/CardHeader';
import MojoExtendet from './mojoExtendet/MojoExtendet';
import { cardsGrow } from '../cardsGrow';
import { usePasswordTesting } from '../../../contexts/passwordTestingContext/passwordTestingContext';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import { useBruteForceContext } from '../../../contexts/bruteForceContext/bruteForceContext';


function Mojo() {
    const { setOpenResultModal, bruteForceResults, openResultModal, setDrawerShow, drawer, drawerContent } =
        useBruteForceContext();
    const { onSite, mojoGrow, excaliburGrow } = usePasswordTesting();
    const { startAnimation } = useSlideContext();

    const [animation, setAnimation] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const handleCloseDrawer = () => {
        setDrawerShow(!drawer);
    };

    useEffect(() => {
        const animation = cardsGrow(mojoGrow, excaliburGrow, count);
        setAnimation(animation);

        if (count === 2) setCount(0);
    }, [mojoGrow, excaliburGrow, count]);

    return (
        <div
            className={`flex  ${
                !onSite ? '' : animation
            }  min-h-[670px] transition-all rounded dark:border-slate-700 max-w-[508px] lg:max-w-[1003px] relative dark:hover:shadow-2xl cursor-default duration-1000 `}
        >
            <Card
                className={`max-w-lg ${startAnimation ? 'animate-fade-out' : 'animate-fade-in '}  border-2 border-r-1`}
                imgAlt="Mojo APP picture"
                imgSrc="/assets/passwordTesting/mojo.webp"
            >
                <CardHeader title="Mojo" top={165} />
                <MojoTextContent />
                <MojoTable />
                <MojoAllResultsLink />
                <MojoControll className="lg:hidden" />
                <MojoExtendetButton setCount={setCount} count={count} className="hidden lg:block dark:text-gray-400" />
            </Card>
            <MojoExtendet />
            <TextCanvas handleClose={handleCloseDrawer} show={drawer} data={drawerContent} />
            <ResultsModal
                openModal={openResultModal}
                setOpenModal={setOpenResultModal}
                bruteForceResults={bruteForceResults}
            />
        </div>
    );
}

export default Mojo;
