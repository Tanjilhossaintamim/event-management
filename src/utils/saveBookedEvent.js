
export const getEvents = () => {
    const events = localStorage.getItem('events');
    if (events) {
        return JSON.parse(events);
    }
    return [];
};

export const saveEvent = (event) => {
    const previousEvent = getEvents();
    const isAlreadySaved = previousEvent.find(singelevent => singelevent.id == event.id);
    if (!isAlreadySaved?.id) {

        previousEvent.push(event);
        localStorage.setItem('events', JSON.stringify(previousEvent));
        return true;
    }
    return false;
};