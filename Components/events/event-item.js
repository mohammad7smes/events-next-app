
import styles from "./event-item.module.css"
import Button from "../ui/button";

import AddressIcon from "../icon/address-icon";
import DateIcon from "../icon/date-icon";
import ArrowRightIcon from "../icon/arrow-right-icon";
function EventItem({ id, title, location, date, image }) {

    // cahnge date to human readable date
    const humanReadableDate = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    // cahnge foramat location
    const foramtedLocation = location.replace(", ", "\n")

    // cahnge Link
    const exploreLink = `/events/${id}`

    return (<li className={styles.item}>
        <img src={"/" + image} alt={title} />


        <div className={styles.content}>
            <div className={styles.summery}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <address>{foramtedLocation}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    {ArrowRightIcon}
                </Button>
            </div>
        </div>
    </li>
    )
}

export default EventItem;