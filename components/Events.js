import Event from "./Event";

const Events = (props) => {
    const eventsID = Object.keys(props.events);

    return (
        <div className="list-group">
            { eventsID.map(key => (
                <Event
                    key={ key }
                    info={ props.events[key] }
                />
            )) }
        </div>
    );
};

export default Events;