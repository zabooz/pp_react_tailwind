import { Button, Label, Radio, Spinner, TextInput } from 'flowbite-react';
import { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { startBruteForce, stopBruteForce } from './scripts/mojoScripts';
import { useBruteForceContext } from '../../../contexts/bruteForceContext/bruteForceContext';
import { thinker } from '../../../utillities/thinker';

interface Props {
    className?: string;
}

function MojoControl({ className }: Props) {
    const {
        bruteType,
        password,
        setIsBruteActive,
        setShowResults,
        setBruteForceResults,
        bruteForceResults,
        bruteForceThinkerInterval,
        setBruteForceThinkerInterval,
        isBruteActive,
        setPassword,
        setBruteType,
    } = useBruteForceContext();
    const handleBruteForceStart = async () => {
        setIsBruteActive(true);
        await startBruteForce(
            bruteType,
            password,
            setIsBruteActive,
            setShowResults,
            setBruteForceResults,
            bruteForceResults,
        );
    };
    const intl = useIntl();
    const handleBruteForceStop = async () => {
        await stopBruteForce(setIsBruteActive, bruteForceThinkerInterval);
    };

    const handleBruteTypeClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLInputElement;
        if (target.tagName === 'INPUT' && target.type === 'radio') {
            setBruteType(target.dataset.type!);
        }
    };

    useEffect(() => {
        if (isBruteActive) {
            const spinner = document.getElementById('spinner')!;
            spinner.textContent = '...';
            const intervalId = setInterval(() => {
                spinner!.textContent = thinker();
            }, 1500);
            setBruteForceThinkerInterval(intervalId as unknown as number);
        } else {
            clearInterval(bruteForceThinkerInterval);
        }

        return () => {
            clearInterval(bruteForceThinkerInterval);
        };
    }, [isBruteActive]); // eslint-disable-line

    const spinner = () => {
        if (isBruteActive) {
            return (
                <>
                    <Spinner aria-label="Spinner button example" size="sm" />
                    <span className="pl-3" id="spinner"></span>
                </>
            );
        } else {
            return <span className="pl-3">Start</span>;
        }
    };

    return (
        <div
            className={className}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <TextInput
                type="text"
                onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                placeholder={intl.formatMessage({ id: 'pl_mojo', defaultMessage: 'Teste dein Passwort' })}
            />
            <div onClick={(e) => handleBruteTypeClick(e)} className="w-full flex justify-evenly my-5">
                <div className="my-2">
                    <Label htmlFor="simple" className="!text-gray-400 me-2">
                        <FormattedMessage id="simple" defaultMessage="Einfach" />
                    </Label>
                    <Radio id="simple" name="bruteForce" value={'Einfach'} data-type="simple" />
                </div>
                <div className="my-2">
                    <label htmlFor="list" className="text-gray-400 me-2">
                        <FormattedMessage id="list" defaultMessage="Liste" />
                    </label>
                    <Radio id="list" name="bruteForce" value={'Liste'} data-type="library" defaultChecked />
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-row gap-3 w-full justify-between ">
                    <Button onClick={handleBruteForceStart} disabled={isBruteActive} className="w-full">
                        {spinner()}
                    </Button>
                    <Button disabled={false} onClick={handleBruteForceStop} className="w-full">
                        Stop
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default MojoControl;
