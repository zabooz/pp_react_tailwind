import { CopyToClipBoard } from '@/components/CopyToClipBoard';

interface Props {
    username: HTMLSpanElement | null;
}

function WizardOutput({ username }: Props) {
    return (
        <p className="border-2 border-2-slate-400 rounded text-center p-2 text-gray-400">
            {username && (
                <CopyToClipBoard clippy={false} value={username.innerText} type="username">
                    <span>{username.innerText}</span>
                </CopyToClipBoard>
            )}
        </p>
    );
}

export default WizardOutput;
