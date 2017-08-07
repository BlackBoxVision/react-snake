const getKeys = obj => Object.keys(obj);

export default class EventLoop {
    subscribers = {};
    eventHandlers = {};

    getEventHandlerByName = eventName => event => this.subscribers[eventName].forEach(handler => handler(event));

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
        this.subscribers[name] = this.subscribers[name] ? this.subscribers[name].concat(callback) : [].concat(callback);
    };

    unsubscribe = callbackName => (this.subscribers[callbackName] = []);

    clearSubscribers = () => (this.subscribers = {});
}
