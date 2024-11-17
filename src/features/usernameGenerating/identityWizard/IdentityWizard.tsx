import { Card } from 'flowbite-react';
import WizardControl from './WizardControl';
import WizardText from './WizardText';
import { useSlideContext } from '../../../contexts/slideProvider/slideContext';
import CardHeader from '@/components/CardHeader';

const IdentityWizard = () => {
    const { startAnimation } = useSlideContext();

    return (
        <Card
            className={`max-w-lg mx-auto border-4 ${
                startAnimation ? 'animate-fade-out' : 'animate-fade-in'
            } dark:hover:shadow-2xl transition-shadow duration-1000 `}
            imgAlt="Identity Wizard Picture"
            imgSrc="/assets/usernameGenerating/identityWizard.webp"
        >
            <CardHeader title="Identity Wizard" top={-100} />
            <WizardText />
            <WizardControl />
        </Card>
    );
};

export default IdentityWizard;
