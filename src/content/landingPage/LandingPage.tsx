import CardCom from "./CardLanding.tsx";
import { cardData } from "../../data/landingPage/CardsData";
import Header from "./Header";
import BounceOnScroll from "../../utillities/BounceScroll";

function LandingPage() {
  return (
    <>
      <Header />
      <main
        className="grid gap-20 lg:gap-10 md:grid-cols-1 lg:grid-cols-3 mb-36 w-full p-2"
      >
        {Object.entries(cardData).map(([key, data],index) => (
          <>
            <BounceOnScroll key={key}>
              <CardCom key={key} index={index} data={data} />
            </BounceOnScroll>
          </>
        ))}
      </main>
    </>
  );
}

export default LandingPage;
