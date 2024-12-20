import { useEffect, useState } from 'react';
import BounceOnScroll from './BounceScroll.tsx';
import CardCom from './CardLanding.tsx';
import Header from './Header.tsx';
import HoverSound from '../../components/HoverSound.tsx';
import { autoLogin } from '../../components/login.register/backend/autoLogin.ts';
import { useLoginContext } from '../../contexts/loginContext/loginContext.ts';
import { cardData } from '../../data/landingPage/CardsData.ts';
function LandingPage() {
    const { setLoggedIn } = useLoginContext();
    useEffect(() => {
        (async () => {
            const result = await autoLogin();
            if (result) {setLoggedIn(true);}
        })();
    }, [setLoggedIn]);

    const [hoverTimer, setHoverTimer] = useState<boolean>(false);

    return (
        <>
            <Header setHoverTimer={setHoverTimer} />
            <main className="grid gap-10 md:grid-cols-1 lg:grid-cols-3  w-full min-h-[95vh] content-center  mt-16 lg:mt-0">
                {Object.entries(cardData).map(([key, data], index) => (
                    <div key={key}>
                        <BounceOnScroll key={key + index}>
                            <HoverSound hoverTimer={hoverTimer} soundFile="/assets/sounds/cardSound.mp3" volume={0.1}>
                                <CardCom key={key} index={index} data={data} />
                            </HoverSound>
                        </BounceOnScroll>
                    </div>
                ))}
            </main>
        </>
    );
}

export default LandingPage;
