import { Button, Progress, Spinner, TextInput } from 'flowbite-react';
import { FormattedMessage } from 'react-intl';
import { excaliburTesting } from './scripts/excaliburScript';
import { useExcalibur } from '../../../contexts/excaliburContext/excaliburContext';
import { usePasswordTesting } from '../../../contexts/passwordTestingContext/passwordTestingContext';

interface Props {
    className?: string;
}

function ExcaliburControl({ className }: Props) {
    const {
        setPassword,
        setPasswordStrength,
        setNerdStats,
        setShowModalLink,
        setModalLinkText,
        passwordStrength,
        password,
    } = useExcalibur();

    const { isThinking, setIsThinking } = usePasswordTesting();

    return (
        <div className={`${className} `}>
            <div className="my-4">
                <TextInput type="text" onChange={(e) => setPassword(e.target.value)} className="mb-4" />
                <Progress
                    progress={passwordStrength ? passwordStrength.result : 0}
                    progressLabelPosition="inside"
                    textLabel="Passwort Stärke"
                    textLabelPosition="outside"
                    size="lg"
                    labelProgress
                    labelText
                    className="my-2"
                />
            </div>
            <Button
                onClick={() =>
                    excaliburTesting({
                        setNerdStats,
                        password,
                        setShowModalLink,
                        setModalLinkText,
                        setPasswordStrength,
                        setIsThinking,
                    })
                }
                className="w-1/2 mx-auto mt-7 mb-7"
            >
                {isThinking ? (
                    <>
                        <Spinner aria-label="Spinner button example" size="sm" />
                        <span className="pl-3" id="spinner"></span>
                    </>
                ) : (
                    <span className="pl-3">
                        <FormattedMessage id="passwordTesting.excalibur.button.start" defaultMessage="Start" />
                    </span>
                )}
            </Button>
        </div>
    );
}
export default ExcaliburControl;
