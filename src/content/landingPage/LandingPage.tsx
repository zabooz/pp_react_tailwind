import CardCom from "./CardLanding.tsx";
import { cardData } from "../../data/landingPage/CardsData";
import Header from "./Header";
import BounceOnScroll from "../../utillities/BounceScroll";
import { useLoginContext } from "../../contexts/Contexts.tsx";
import { useEffect } from "react";
import { autoLogin } from "../../backend/autoLogin.ts";

function LandingPage() {

  const { setLoggedIn } = useLoginContext();
  useEffect(() => {
    (async () => {
      const result = await autoLogin();
      if (result) setLoggedIn(true);
    })();
  }, []);


  return (
    <>
      <Header  />
      <main
        className="grid gap-10 md:grid-cols-1 lg:grid-cols-3  w-full min-h-[90vh]  content-center  mt-16 lg:mt-0"
     
      >
        {Object.entries(cardData).map(([key, data],index) => (
          <div key={index}>
            <BounceOnScroll key={key+index}>
              <CardCom key={key} index={index} data={data} />
            </BounceOnScroll>
        
          </div>
          
        ))}
      </main>
    </>
  );
}

export default LandingPage;
