import { Card, Button } from "flowbite-react";

interface CardData {
  title: string;
  subtitle: string;
  text: string;
  btnText: string;
  imgSrc: string;
  imgAlt: string;
}

interface Props {
  data: CardData;
}

function CardCom({ data }: Props) {
  return (
    <Card
      className="max-w-[30rem] mx-auto dark:text-white p-2  dark:bg-slate-700 hover:shadow-2xl"
      imgSrc={data.imgSrc}
      imgAlt={data.imgAlt}

    >
      <h5 className="text-2xl font-bold tracking-wider text-center text-gray-900 dark:text-white">
        {data.title}
      </h5>
      <h6 className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">{data.subtitle}</h6>
      <p className="font-normal text-gray-700 dark:text-gray-400 ">
        {data.text}
      </p>
      <Button className="mt-12">
        {data.btnText}
        <svg
          className="-mr-1 ml-2 h-4 w-4"
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
  );
}

export default CardCom;
