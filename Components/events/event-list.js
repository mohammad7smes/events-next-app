import EventItem from "./event-item";
import classess from "./event-item.module.css"

function EventList({ items }) {

    return <ul className={classess.list} >

        {items.map(e => (
            <EventItem
                key={e.id}
                id={e.id}
                title={e.title}
                location={e.location}
                date={e.date}
                image={e.image}
            />))}
    </ul>
}

export default EventList;