import { Tabs } from 'flowbite-react';
import ExcaliburControl from './ExcaliburControl';
import ExcaliburNerdStats from './modal/ExcaliburNerdStats';
import ExcaliburTipps from './modal/ExcaliburTipps';
import { FaRobot, FaRegLightbulb } from 'react-icons/fa6';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import { useExcalibur } from '../../../contexts/excaliburContext/excaliburContext';

function ExcaliburExtendet() {
    const { startAnimation } = useSlideContext();

    const { passwordStrength, nerdStats } = useExcalibur();

    return (
        <div
            className={`  absolute top-0 min-h-[680px] border-2  left-0 w-[500px] px-4 rounded-lg -z-10 border-slate-700 dark:border-slate-700  lg:flex flex-col ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in'
            }`}
        >
            <Tabs aria-label="Default tabs" variant="default">
                <Tabs.Item active title="Tipps" icon={FaRegLightbulb}>
                    <ExcaliburTipps passwordStrength={passwordStrength} />
                </Tabs.Item>
                <Tabs.Item title="Nerd Stats" icon={FaRobot}>
                    <ExcaliburNerdStats nerdStats={nerdStats} />
                </Tabs.Item>
            </Tabs>
            <ExcaliburControl className="mt-auto" />
        </div>
    );
}

export default ExcaliburExtendet;
