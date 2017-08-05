const getKeys = obj => Object.keys(obj);

export default class EventLoop {
    subscribers = {};
    eventHandlers = {};

    getEventHandlerByName = eventName => {
        return event => this.subscribers[eventName].forEach(eventHandler => eventHandler(event));
    };

    start = () => {
        getKeys(this.subscribers).forEach(eventName => {
            this.eventHandlers[eventName] = this.getEventHandlerByName(eventName);

            window.addEventListener(eventName, this.eventHandlers[eventName], true);
        });
    };

    stop = () => {
        getKeys(this.subscribers).forEach(eventName =>
            window.removeEventListener(eventName, this.eventHandlers[eventName], true)
        );
    };

    subscribe = (name, callback) => {
        const subscriber = this.subscribers[name];

        if (subscriber) {
            subscriber.push(callback);
        }

        this.subscribers[name] = [].concat(callback);
    };

    unsubscribe = callbackName => (this.subscribers[callbackName] = []);

    clearSubscribers = () => (this.subscribers = {});
}
