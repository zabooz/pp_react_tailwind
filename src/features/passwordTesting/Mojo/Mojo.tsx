import { lazy } from 'react';
const TextCanvas = lazy(() => import('../../../components/TextCanvas'));
const ResultsModal = lazy(() => import('./mojoModal/ResultsModal'));
import MojoAllResultsLink from './MojoAllResultsLink';
import MojoControll from './MojoControl';
import MojoTable from './MojoTable';
import MojoTextContent from './MojoTextContent';
import { Button, Card } from 'flowbite-react';
import CardHeader from '../../../components/CardHeader';
import { useBruteForceContext } from '../../../contexts/bruteForceContext/bruteForceContext';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import ExcaliburExtendet from '../excalibur/ExcaliburExtendet';
import { usePasswordTesting } from '@/contexts/passwordTestingContext/passwordTestingContext';

function Mojo() {
    const { setOpenResultModal, bruteForceResults, openResultModal, setDrawer, drawer, drawerContent } =
        useBruteForceContext();
    const { extendetExcalibur, setExtendetMojo, extendetMojo } = usePasswordTesting();
    const { startAnimation } = useSlideContext();

    const handleCloseDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <>
            <div className="justify-center  rounded-lg  items-center flex">
                <div className=" rounded-xl  border-2 border-slate-700 dark:border-slate-700  max-w-lg dark:hover:shadow-2xl transition-shadow duration-1000  ">
                    {!extendetExcalibur ? (
                        <Card
                            className={`max-w-lg min-h-[682px] border-none ${
                                startAnimation ? 'animate-fade-out' : 'animate-fade-in '
                            }  `}
                            imgAlt="Mojo APP picture"
                            imgSrc="/assets/passwordTesting/mojo.webp"
                        >
                            <CardHeader title="Mojo" top={165} />
                            <MojoTextContent />
                            <MojoTable />
                            <MojoAllResultsLink />
                            <MojoControll className="lg:hidden" />
                            <Button
                                onClick={() => {
                                    setExtendetMojo(!extendetMojo);
                                }}
                            >
                                slkgasglkj
                            </Button>
                        </Card>
                    ) : (
                        <ExcaliburExtendet />
                    )}
                </div>
            </div>
            <TextCanvas handleClose={handleCloseDrawer} show={drawer} data={drawerContent} />
            <ResultsModal
                openModal={openResultModal}
                setOpenModal={setOpenResultModal}
                bruteForceResults={bruteForceResults}
            />
        </>
    );
}

export default Mojo;
