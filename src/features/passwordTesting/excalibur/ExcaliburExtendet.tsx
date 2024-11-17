import { Tabs } from 'flowbite-react';
import { FaRobot, FaRegLightbulb } from 'react-icons/fa6';
import ExcaliburControl from './ExcaliburControl';
import ExcaliburNerdStats from './modal/ExcaliburNerdStats';
import ExcaliburTipps from './modal/ExcaliburTipps';
import { useExcalibur } from '../../../contexts/excaliburContext/excaliburContext';
import { useSlideContext } from '@/contexts/slideProvider/slideContext';

function ExcaliburExtendet() {
    const { passwordStrength, nerdStats } = useExcalibur();
    const { startAnimation } = useSlideContext();
    return (
        <div
            className={`relative max-w-lg  w-[512px] w-full min-h-[680px] px-4 rounded-lg ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in '
            } `}
        >
            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Tipps" icon={FaRegLightbulb}>
                    <ExcaliburTipps passwordStrength={passwordStrength} />
                </Tabs.Item>
                <Tabs.Item title="Nerd Stats" icon={FaRobot}>
                    <ExcaliburNerdStats nerdStats={nerdStats} />
                </Tabs.Item>
            </Tabs>
            <ExcaliburControl className="absolute bottom-0 w-full right-0" />
        </div>
    );
}

export default ExcaliburExtendet;
