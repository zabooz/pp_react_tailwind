import { Card, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useSlideContext } from "../../contexts/Contexts";
import { useRef } from "react";

interface CardData {
  title: string;
  subtitle: string;
  text: string;
  btnText: string;
  imgSrc: string;
  imgAlt: string;
  btnLink: string;
}

interface Props {
  data: CardData;
  index: number;
}

function CardCom({ data, index }: Props) {
  const scrollDiv1 = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Sanfte Scrollbewegung
    });
  };

  const scrollToElement = (scroll: React.RefObject<HTMLImageElement>) => {
    const { current } = scroll;

    if (current !== null) {
      current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { startAnimation, directionFunc } = useSlideContext();
  return (
    <>
      <Card
        className={`max-w-lg mx-auto dark:border-2 dark:hover:shadow-2xl transition-shadow duration-1000  dark:bg-slate-700 lg:mt-16 ${
          startAnimation ? "animate-fade-out" : ""
        }`}
        imgSrc={data.imgSrc}
        imgAlt={data.imgAlt}
      >
        <h5 className="text-2xl font-bold tracking-wider text-center text-gray-900 dark:text-gray-200">
          {data.title}
        </h5>
        <h6 className="sm:mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">
          {data.subtitle}
        </h6>
        <p className="font-normal text-gray-700 dark:text-gray-400 ">
          {data.text}
        </p>

        <Button
          className="sm:mt-12 text-lg text-gray-200 tracking-wide w-full bg-[#ea6954]"
          onClick={() => {
            directionFunc(index + 1);
            setTimeout(() => {
              scrollToTop();
              navigate("/password-generating");
            }, 800);
          }}
        >
          {data.btnText}
          <svg
            className="-mr-1 ml-2 h-5 w-4 items-center justify-center flex "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </Card>
      <img
        src="/assets/landingPage/arrow.svg"
        alt="arrow"
        className="max-w-[4rem] cursor-pointer lg:hidden hidden sm:block rotate-180 mx-auto my-16 "
        onClick={() => scrollToElement(scrollDiv1)}
        ref={scrollDiv1}
      />
    </>
  );
}

export default CardCom;
