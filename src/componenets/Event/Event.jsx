import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { HiMiniTableCells } from "react-icons/hi2";
import { LuClock4 } from "react-icons/lu";

import { TitleEvent, Text } from "./Event";

export const Events = ({name, location, speaker, type, start, end}) => {

    let hours = parseInt(end.slice(11, 13))-parseInt(start.slice(11, 13))
    let minutes = Math.abs(parseInt(end.slice(14, 16))-parseInt(start.slice(14, 16)))
    let time = `${hours}${minutes ? `:${minutes}` : ` `}`

    

    return(
        <>
            <TitleEvent>{name}</TitleEvent>
            <Text><FaLocationDot/>{location}</Text>
            <Text><IoPerson/>{speaker}</Text>
            <Text><HiMiniTableCells/>{`${start.slice(8, 10)}.${start.slice(5, 7)} ${start.slice(0, 4)} ,${start.slice(11, 16)}`}</Text>            
            <Text><LuClock4/>{time} hours</Text>
        </>
    )

}
// (11, 13)
// (14, 16)





