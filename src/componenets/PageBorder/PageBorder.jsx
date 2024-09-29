import PropTypes from "prop-types"
import { List, Item } from "./PageBoarder"
import { Events } from "../Event/Event.jsx"

export const PageBorder = ({events}) => {
    
    return (
        <List>
            {events.map(event => 
            <Item>
                <Events name={event.name} 
                        location={event.location} 
                        speaker={event.speaker} 
                        type={event.type} 
                        start={event.time.start}
                        end={event.time.end}/>
            </Item>)}
        </List>
    )

}

PageBorder.propTypes = {
    events: PropTypes.array.isRequired
}




