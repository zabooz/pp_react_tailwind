import { mindMaestro } from './mindeMastroScript';
import { CopyToClipBoard } from '../../../components/CopyToClipBoard';
interface Props {
    values: string[];
}
function NotMindCards({ values }: Props) {
    const username = mindMaestro({ values });

    return (
        <div className="w-full  dark:text-gray-400">
            {values.length === 5 ? (
                <div
                    className="w-full  flex h-[300px] flex-col items-center border rounded"
                    style={{
                        backgroundImage: 'url(\'/assets/usernameGenerating/mindMaestro/endCard.webp\')',
                    }}
                >
                    <h5 className="text-lg mt-8 font-semibold  dark:text-gray-300">Dein Ergebnis</h5>
                    <p className="mt-12 border rounded p-2 w-2/3 text-center text-xl dark:bg-slate-800  font-bold">
                        <CopyToClipBoard value={username} type="username" clippy={false}>
                            {username}
                        </CopyToClipBoard>
                    </p>
                </div>
            ) : (
                'wstg'
            )}
        </div>
    );
}

export default NotMindCards;
