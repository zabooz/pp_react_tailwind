import { Button } from 'flowbite-react';
import { usePasswordTesting } from '../../../../contexts/Contexts';
import { FormattedMessage } from 'react-intl';

interface Props {
    className?: string;
    setCount: (count: number) => void;
    count: number;
}

function MojoExtendetTextButton({ className, setCount, count }: Props) {
    const { handleCardGrow, mojoGrow, setMojoGrow } = usePasswordTesting();

    return (
        <div className={className}>
            <Button
                className="w-2/4 mx-auto "
                onClick={() => {
                    handleCardGrow(mojoGrow, setMojoGrow);
                    setCount(count + 1);
                }}
            >
                {mojoGrow ? (
                    <FormattedMessage
                        id="passwordTesting.mojo.mojoExtendet.button.shrink"
                        defaultMessage="Verkleinern"
                    />
                ) : (
                    <FormattedMessage id="passwordTesting.mojo.mojoExtendet.button.grow" defaultMessage="Vergrössern" />
                )}
            </Button>
        </div>
    );
}

export default MojoExtendetTextButton;
