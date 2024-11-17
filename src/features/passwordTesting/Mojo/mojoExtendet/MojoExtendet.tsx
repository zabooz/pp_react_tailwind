import { Button } from 'flowbite-react';
import { FormattedMessage } from 'react-intl';
import MojoControl from '../MojoControl';
import MojoExtAllResultsLink from './MojoExtAllResultsLink';
import MojoExtendetTable from './MojoExtendetTable';
import { useBruteForceContext } from '../../../../contexts/bruteForceContext/bruteForceContext';
import { useSlideContext } from '@/contexts/slideProvider/slideContext';

function MojoExtendet() {
    const { setBruteForceResults } = useBruteForceContext();
    const { startAnimation } = useSlideContext();
    return (
        <div
            className={`relative max-w-lg  w-[512px] w-full min-h-[680px] ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in '
            } `}
        >
            <MojoExtendetTable />
            <div className="my-10 ms-auto flex flex-row-reverse items-center w-full  justify-evenly">
                <Button className="w-1/3" onClick={() => setBruteForceResults([])}>
                    <FormattedMessage id="clearMojo" defaultMessage={'Löschen'} />
                </Button>

                <MojoExtAllResultsLink />
            </div>
            <MojoControl className="  absolute w-full right-0 bottom-0 p-6 " />
        </div>
    );
}

export default MojoExtendet;
