interface Props {
    title: string;
    top: number;
}

function CardHeader(props: Props) {
    return (
        <div className="relative">
            <div className="absolute  flex items-center justify-center w-full" style={{ top: `-${props.top}px` }}>
                <h5 className="text-2xl font-bold tracking-tight text-center bg-slate-800  w-full bg-opacity-80  text-gray-200">
                    {props.title}
                </h5>
            </div>
        </div>
    );
}

export default CardHeader;
