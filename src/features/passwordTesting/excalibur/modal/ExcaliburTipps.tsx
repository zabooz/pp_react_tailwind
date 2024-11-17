import { List, ListItem } from 'flowbite-react';
import { useMemo } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { MdOutlineClose } from 'react-icons/md';
import { Points } from '../../../../interfaces/interfaces';

interface Props {
    passwordStrength: { result: number; points: Points } | null;
}
function ExcaliburTipps({ passwordStrength }: Props) {
    const points = passwordStrength?.points;
    const { succesArray, failArray } = useMemo(() => {
        const succesArray: string[] = [];
        const failArray: string[] = [];
        for (const key in points) {
            if (points[key].value === true) {
                succesArray.push(points[key].textTrue);
            } else {
                failArray.push(points[key].textFalse);
            }
        }
        return { succesArray, failArray };
    }, [points]);

    return passwordStrength ? (
        <div className="text-lg text-gray-700 dark:text-gray-400 ">
            <List>
                {succesArray.map((item) => (
                    <ListItem icon={FaCheck} key={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
            <List>
                {failArray.map((item) => (
                    <ListItem color="red" icon={MdOutlineClose} key={item}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </div>
    ) : (
        <p className="mt-auto h-full">Hier könnte ihre Werbung stehen</p>
    );
}

export default ExcaliburTipps;
