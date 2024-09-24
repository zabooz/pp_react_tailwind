import { List, ListItem } from "flowbite-react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { Points } from "../../../../interfaces/interfaces";
import { useMemo } from "react";

interface Props {
  passwordStrength: {result: number, points: Points} | null;
}
function ExcaliburTipps({ passwordStrength }: Props) {
  const points = passwordStrength!.points;
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

  return (
    <div>
      <List>
        {succesArray.map((item, index) => (
          <ListItem color="green" icon={FaCheck} key={index}>
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
  );
}

export default ExcaliburTipps;
