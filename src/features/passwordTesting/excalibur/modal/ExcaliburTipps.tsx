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
        <div className="text-lg text-gray-700 dark:text-gray-400">
            <List>
                {succesArray.map((item, index) => (
                    <ListItem icon={FaCheck} key={index}>
                        {item}
                    </ListItem>
                ))}
            </List>
            <List>
                {failArray.map((item, index) => (
                    <ListItem color="red" icon={MdOutlineClose} key={index}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </div>
    ) : (
        <p>Hier könnte ihre Werbung stehen</p>
    );
}

export default ExcaliburTipps;
