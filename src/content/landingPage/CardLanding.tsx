import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSlideContext } from "../../contexts/Contexts";


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
}

function CardCom({ data }: Props) {


  const {setDirection} = useSlideContext()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Sanfte Scrollbewegung
    });
  };


  return (
    <Card
      className="max-w-lg mx-auto  p-2  dark:bg-slate-700 hover:animate-glow "
      imgSrc={data.imgSrc}
      imgAlt={data.imgAlt}

    >

      {/* WHAT THE FUCK IS THIS? custom animation wont work if not set mannually somewhere in the dom */}
      <div className="animate-move-right"></div> 
      <div className="animate-move-left"></div>
      <h5 className="text-2xl font-bold tracking-wider text-center text-gray-900 dark:text-gray-200">
        {data.title}
      </h5>
      <h6 className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">{data.subtitle}</h6>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">
        {data.text}
      </p>
      <Link to={data.btnLink} className="w-full" onClick={scrollToTop}>
      <Button className="mt-12 text-lg text-gray-200 tracking-wide w-full "
        onClick={() => setDirection('')}>
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
      </Link>
    </Card>
  );
}

export default CardCom;
