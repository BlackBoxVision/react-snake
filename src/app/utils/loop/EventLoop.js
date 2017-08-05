export default class EventLoop {
    subscribers = {};

    start = () => {
        Object.keys(this.subscribers).forEach(eventName => {
            const eventHandlers = this.subscribers[eventName];

            window.addEventListener(eventName, event => eventHandlers.forEach(eventHandler => eventHandler(event)));
        });
    };

    stop = () => {
        Object.keys(this.subscribers).forEach(eventName => {
            const eventHandlers = this.subscribers[eventName];

            window.removeEventListener(eventName, event => eventHandlers.forEach(eventHandler => eventHandler(event)));
        });
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
