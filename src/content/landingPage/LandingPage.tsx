import CardCom from "./CardLanding.tsx";
import { cardData } from "../../data/landingPage/CardsData";
import Header from "./Header";

function LandingPage() {
  return (
    <>
      <Header />
      <main className="grid sm:gap-y-[4rem] lg:gap-10 md:grid-cols-1 lg:grid-cols-3">
        {Object.entries(cardData).map(([key, data]) => (
          <CardCom key={key} data={data} />
        ))}
      </main>
    </>
  );
}

export default LandingPage;
