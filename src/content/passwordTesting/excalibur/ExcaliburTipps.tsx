import { List } from "flowbite-react";
import {FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
function ExcaliburTipps() {
  return (
    <div>
                  <List>
                <List.Item icon={FaCheck}>At least 10 characters (and up to 100 characters)</List.Item>
                <List.Item icon={FaCheck}>At least one lowercase character</List.Item>
                <List.Item icon={FaCheck}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
            </List>
            <List>
                <List.Item icon={MdOutlineClose}>At least 10 characters (and up to 100 characters)</List.Item>
                <List.Item icon={MdOutlineClose}>At least one lowercase character</List.Item>
                <List.Item icon={MdOutlineClose}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
            </List>
    </div>
  )
}

export default ExcaliburTipps
