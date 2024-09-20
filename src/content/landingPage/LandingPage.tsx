import CardCom from "./CardLanding.tsx";
import { cardData } from "../../data/landingPage/CardsData";
import Header from "./Header";
import BounceOnScroll from "../../utillities/BounceScroll"


function LandingPage() {


  return (
    <>
      <Header/>
      <main className={`grid gap-10 md:grid-cols-1 lg:grid-cols-3  min-h-[86vh] content-center w-full`}>
          
        {Object.entries(cardData).map(([key, data]) => (
          <BounceOnScroll key={key}>
            <CardCom key={key} data={data} />
           </BounceOnScroll> 
        ))}

      </main>
    </>
  );
}

export default LandingPage;
